(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]');

if( aplazameScript ) {
  var href = aplazameScript.src.split('?'),
      sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

  if( sandboxMatch ) {
    aplazame.init({}, { sandbox: sandboxMatch[1] === '1' || sandboxMatch[1] === 'true' });
  }
}

if( document.querySelector('script[data-aplazame]') ) {

  var script = document.querySelector('script[data-aplazame]'),
      initText = script.getAttribute('data-aplazame'),
      envOptions = {},
      apiOptions = {};

  if( /\:/.test(initText) ) {
    initText.split(',').forEach(function (part) {
      var keys = part.match(/^([^\:]+)\:(.*)/);
      envOptions[keys[1].trim()] = keys[2].trim();
    });
  } else {
    if( initText ) {
      envOptions.publicKey = initText;
    }
  }

  if( script.getAttribute('data-version') ) {
    var matchVersion = script.getAttribute('data-version').match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('malformed version, should be like \'v1.2\'');
    }

    apiOptions.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      apiOptions.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( script.getAttribute('data-sandbox') ) {
    apiOptions.sandbox = script.getAttribute('data-sandbox') === 'true';
  }
  if( script.getAttribute('data-analytics') ) {
    envOptions.analytics = script.getAttribute('data-analytics') === 'true';
  }

  aplazame.init(envOptions, apiOptions);
}

},{}],2:[function(require,module,exports){
var btn = document.querySelector('[data-aplazame-button]');

if( btn ) {
  var btnParams = {
    button: '[data-aplazame-button]',
    description: '[data-aplazame-button-info]',
    parent: btn.getAttribute('data-parent'),
    publicKey: btn.getAttribute('data-aplazame-button'),
    amount: btn.getAttribute('data-amount'),
    currency: btn.getAttribute('data-currency') || undefined,
    sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
    country: btn.getAttribute('data-country') || undefined
  };

  aplazame.button(btnParams);
}

},{}],3:[function(require,module,exports){
// factory http

function headerToTitleSlug(text) {
  var key = text[0].toUpperCase() + text.substr(1);
  return key.replace(/([a-z])([A-Z])/, function (match, lower, upper) {
      return lower + '-' + upper;
  });
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function http (url, options) {
  options = options || {};
  options.headers = options.headers || {};
  options.url = url;

  var request = null,
      on = { resolve: [], reject: [] };

  try { // Firefox, Opera 8.0+, Safari
      request = new XMLHttpRequest();
  } catch (e) { // Internet Explorer
      try { request = new ActiveXObject("Msxml2.XMLHTTP"); }
      catch (er) { request = new ActiveXObject("Microsoft.XMLHTTP"); }
  }
  if( request === null ) { throw "Browser does not support HTTP Request"; }

  request.open( ( options.method || 'get').toUpperCase(), url );

  if( options.withCredentials ) {
    request.withCredentials = true;
  }

  for( var key in options.headers ) {
      request.setRequestHeader( headerToTitleSlug(key), options.headers[key] );
  }

  request.resolve = function ( response ) {
    on.resolve.forEach(function (handler) {
      handler(response);
    });
  };
  request.reject = function ( response ) {
    on.reject.forEach(function (handler) {
      handler(response);
    });
  };

  var headersCache;
  request.getHeaders = function () {
    if( !headersCache ) {
      headersCache = {};
      request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
          headersCache[headerToCamelCase(key)] = value.trim();
      });
    }
    return headersCache;
  };

  request.onreadystatechange = function(){
    if( request.readyState === 'complete' || request.readyState === 4 ) {
      var response = {
        data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
        status: request.status,
        headers: request.getHeaders,
        xhr: request
      };
      if( request.status >= 200 && request.status < 300 ) {
        request.resolve( response );
      } else if( request.status >= 400 ) {
        request.reject( response );
      } else {
        throw new Error('Unexpected status code ' + request.status);
      }
    }
  };

  request.options = options;

  request.send( options.data );

  return {
    then: function (onResolve, onReject) {
      on.resolve.push(onResolve);
      if( onReject instanceof Function ) {
        on.reject.push(onReject);
      }
    },
    error: function (onReject) {
      on.reject.push(onReject);
    }
  };
}

module.exports = http;

},{}],4:[function(require,module,exports){
var http = require('./http'),
    _ = require('./utils'),
    iframeStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'transparent',
      'z-index': 2147483647
    },
    api = {
      host: 'https://api.aplazame.com/',
      version: 1,
      checkoutVersion: 1,
      sandbox: false
    },
    acceptTmpl = 'application/vnd.aplazame{{sandbox}}.v{{version}}+json',
    env = {};

function apiOptions (options) {
  options = options || {};
  var publicKey = options.publicKey || env.publicKey;

  if( !publicKey ) {
    throw new Error('public key needs to be specified');
  }

  options = _.merge({}, {
    headers: {
      authorization: 'Bearer ' + publicKey
    }
  }, options);

  options.version = options.version || api.version;
  options.sandbox = ( options.sandbox === undefined ? api.sandbox : options.sandbox ) ? '.sandbox' : '';
  options.paramsStr = '';
  if( options.params ) {
    for( var key in options.params ) {
      options.paramsStr += ( options.paramsStr ? '&' : '?' ) + key + '=' + encodeURIComponent(options.params[key]);
    }
  }
  console.log('apiOptions', options);

  return _.merge(options, {
    headers: {
      accept: _.replaceKeys(acceptTmpl, options)
    }
  });
}

// aplazame methods

function init (initEnv, initApi) {
  _.extend(api, initApi || {});
  _.extend(env, initEnv || {});

  console.debug('init', env, api);
}

function apiGet (path, options) {
  options = apiOptions(options);
  var url = path ? _.joinPath(api.host, path) : api.host;

  return http( url + options.paramsStr, options );
}

function apiPost (path, data, options) {
  options = apiOptions(options);
  var url = path ? _.joinPath(api.host, path) : api.host;

  return http( url + options.paramsStr, _.merge(options, { method: 'post', data: data }) );
}

function button (options) {

  if( !options ) {
    throw new Error('aplazame.button requires parameters');
  }

  var elements, elButton;

  if( options.button ) {
    elButton = document.querySelector(options.button);
  } else if( options.id ) {
    elButton = document.querySelector( ( /^#/.test(options.id) ? '' : '#' ) + options.id );
  }

  if( !elButton ){
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - )');
  }

  elements = [elButton];


  if( options.parent ) {
    var parent = elButton.parentElement;

    while( parent && parent !== document.body ) {
      if( parent.matchesSelector(options.parent) ) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  if( options.description ) {
    [].push.apply( elements, document.querySelectorAll(options.description) );
  }

  elements.forEach(function (el) {
    el.__display = el.style.display;
    el.style.display = 'none';
  });

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if( options.country ) {
    params.country = options.country;
  }

  apiGet('checkout/button', { params: params })
    .then(function () {
      elements.forEach(function (el) {
        el.style.display = el.__display;
      });
    });
}

function writeIframe (iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  iframeDoc.charset = 'UTF-8';
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function checkout (options) {
  options = options || {};
  var baseUrl = ( options.host === 'location' ? location.origin : options.host ) || 'https://aplazame.com/static/checkout/';

  options.api = api;

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  http(baseUrl + 'iframe.html').then(function (response) {
    document.body.style.overflow = 'hidden';
    // var iframeHtml = response.data.replace(/(src|href)\s*=\s*\"(?!http|\/\/)/g, '$1=\"' + baseUrl);
    var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />');

    var iframe = document.createElement('iframe');
    _.extend(iframe.style, iframeStyle);

    iframe.frameBorder = '0';
    document.body.appendChild(iframe);
    writeIframe(iframe, iframeHtml);

    if( !options.merchant ) {
      throw new Error('missing merchant parameters');
    }

    if( !options.merchant.public_api_key ) {
      if( env.publicKey ) {
        options.merchant.public_api_key = env.publicKey;
      } else {
        throw new Error('missing public key');
      }
    }

    _.listen(window, 'message', function (e) {
      if( !iframe ) {
        return;
      }

      var message = e.data;

      if( message.aplazame === 'checkout' && message.require === 'merchant' ) {
        e.source.postMessage({
          checkout: options
        }, '*');
      } else if( message.aplazame === 'checkout' && message.result ) {
        document.body.removeChild(iframe);
        iframe = null;

        switch( message.result ) {
          case 'success':
            location.replace(options.merchant.success_url);
            break;
          case 'cancel':
            location.replace(options.merchant.cancel_url);
            break;
        }
      }
    });
  }, function () {
    throw new Error('can not connect to ' + baseUrl);
  });

}

function simulator (amount, _options, callback) {
  if( _.isFunction(_options) ) {
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }
  var options = {
    params: {
      amount: amount
    }
  };
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }
  apiGet('instalment-plan-simulator', options ).then(function (response) {
    if( _.isFunction(callback) ) {
      callback(response.data.choices[0].instalments);
    }
  });
}

window.aplazame = {
  init: init,
  checkout: checkout,
  button: button,
  apiGet: apiGet,
  apiPost: apiPost,
  simulator: simulator
};

require('./data-aplazame');
require('./data-button');

},{"./data-aplazame":1,"./data-button":2,"./http":3,"./utils":5}],5:[function(require,module,exports){
if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

function _isType (type) {
    return function (o) {
        return (typeof o === type);
    };
}

function _instanceOf (_constructor) {
    return function (o) {
        return ( o instanceof _constructor );
    };
}

var _isObject = _isType('object'),
    _isFunction = _isType('function'),
    _isString = _isType('string'),
    _isNumber = _isType('number'),
    _isArray = Array.isArray || _instanceOf(Array),
    _isDate = _instanceOf(Date),
    _isRegExp = _instanceOf(RegExp),
    _isElement = function(o) {
      return o && o.nodeType === 1;
    };

var listen = window.addEventListener ? function (element, eventName, listener) {
  element.addEventListener(eventName, listener, false);
} : ( window.attachEvent && function (element, eventName, listener) {
  element.attachEvent('on' + eventName, listener);
} );
if( !listen ) {
  throw new Error('Your Browser does not support events');
}

function once (fn) {
  var done;
  return function () {
    if( !done ) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}

function docReady (callback) {
  if( document.readyState === 'complete' ) {
    callback();
  } else {
    listen(window, 'load', callback);
  }
}

function replaceKeys (tmpl, keys) {
  return keys ? tmpl.replace(/\{\{([^\}]+)\}\}/g, function (match, key) {
    return keys[key];
  }) : function (ks) {
    return replaceKeys(tmpl, ks);
  };
}

var arrayShift = [].shift;
function extend () {
    var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while( src ) {
    for( key in src) {
      dest[key] = src[key];
    }
    src = arrayShift.call(arguments);
  }

  return dest;
}

function merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

        if( typeof dest !== typeof src ) {
            dest = _isArray(src) ? [] : ( _isObject(src) ? {} : src );
        }

        if( _isObject(src) ) {

            for( key in src ) {
                if( src[key] !== undefined ) {
                    if( typeof dest[key] !== typeof src[key] ) {
                        dest[key] = merge(undefined, src[key]);
                    } else if( _isArray(dest[key]) ) {
                        [].push.apply(dest[key], src[key]);
                    } else if( _isObject(dest[key]) ) {
                        dest[key] = merge(dest[key], src[key]);
                    } else {
                        dest[key] = src[key];
                    }
                }
            }
        }
        src = arrayShift.call(arguments);
    }

    return dest;
}

function joinPath () {
  return [].reduce.call(arguments, function (prev, path, index, list) {

    path = index ? path.replace(/^\//, '') : path;
    path = ( index === (list.length - 1) ) ? path : path.replace(/\/$/, '');

    return prev + ( index ? '/' : '' ) + path;

  }, '');
}

module.exports = {
  isObject: _isObject,
  isFunction: _isFunction,
  isString: _isString,
  isNumber: _isNumber,
  isArray: _isArray,
  isDate: _isDate,
  isRegExp: _isRegExp,
  isElement: _isElement,
  listen: listen,
  once: once,
  ready: docReady,
  replaceKeys: replaceKeys,
  merge: merge,
  extend: extend,
  joinPath: joinPath
};

},{}]},{},[4]);
