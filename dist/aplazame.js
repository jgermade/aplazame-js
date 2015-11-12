(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.92';

},{}],2:[function(require,module,exports){
(function (global){

global.aplazame = require('./core/core');

global.aplazame.checkout = require('./apps/checkout');
global.aplazame.button = require('./apps/button');
global.aplazame.simulator = require('./apps/simulator');
global.aplazame.modal = require('./apps/modal');

require('./apps/http-service');

require('./loaders/data-aplazame')(global.aplazame);
require('./loaders/data-button')(global.aplazame);
require('./loaders/data-simulator')(global.aplazame);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./apps/button":3,"./apps/checkout":4,"./apps/http-service":5,"./apps/modal":6,"./apps/simulator":7,"./core/core":10,"./loaders/data-aplazame":12,"./loaders/data-button":13,"./loaders/data-simulator":14}],3:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function getCartPrice() {
  var priceParts = document.querySelector('#total_price').textContent.match(/(\d+)([,.](\d+))?/);
  var amount = Number(priceParts[1]) * 100 + Number(priceParts[3]);
  return amount;
}

function button(options) {

  if (!options) {
    throw new Error('aplazame.button requires parameters');
  }

  if (!options.id && !options.button && !options.selector) {
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
  }

  if (document.querySelector('#total_price')) {
    options.amount = getCartPrice();

    if (!button.watching) {
      button.watching = true;
      options.lastPrice = options.amount;

      // console.debug('total price watching');

      setInterval(function () {
        // console.log('checking price', options.amount, getCartPrice() );
        if (getCartPrice() !== options.lastPrice) {
          options.amount = getCartPrice();
          options.lastPrice = options.amount;
          options.forceUpdate = true;
          button(options);
        }
      }, 400);
    }
  }

  if (!options.amount) {
    throw new Error('button amount missing');
  }

  var elements, elButton;

  if (options.button) {
    elButton = document.querySelector(options.button);
  } else if (options.id) {
    elButton = document.querySelector((/^#/.test(options.id) ? '' : '#') + options.id);
  }

  elements = elButton ? [elButton] : [];

  if (options.selector) {
    [].push.apply(elements, _.cssQuery(options.selector));
  }

  if (options.description) {
    [].push.apply(elements, _.cssQuery(options.description));
  }

  elButton = elButton || elements[0];

  if (!options.$$running && options.selector) {
    options.$$running = true;

    _.liveDOM.subscribe(function (el) {
      button(options);
    });
  }

  if (!options.forceUpdate && (!elements.length || _.elementData(elButton, 'buttonInitialized'))) {
    return;
  }

  options.forceUpdate = false;

  if (elButton && options.parent) {
    var parent = elButton.parentElement;

    while (parent && parent !== document.body) {
      if (parent.matchesSelector(options.parent)) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  elements.forEach(function (el) {
    if (el.style.display !== 'none') {
      el.__display = el.style.display;
    }
    el.style.display = 'none';
  });

  button.check(options, function (allowed) {
    if (allowed) {
      var elms = elements.slice();
      elms.forEach(function (el) {
        el.style.display = el.__display;
      });
    }
  });

  elements.forEach(function (el) {
    _.elementData(el, 'buttonInitialized', true);
  });
}

button.check = function (options, callback) {
  if (_.isString(options) || _.isNumber(options)) {
    options = { amount: Number(options) };
  }

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if (options.country) {
    params.country = options.country;
  }

  var checkPromise = apiHttp.get('checkout/button', { params: params });

  if (_.isFunction(callback)) {
    checkPromise.then(function (response) {
      callback(response.data.allowed, response);
    }, function (response) {
      callback(false, response);
    });
  }

  return checkPromise;
};

module.exports = button;

},{"../core/api-http":8,"../tools/tools":19}],4:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools');

function checkout(options) {

  options = options || {};
  var baseUrl = (options.host === 'location' ? location.origin : options.host) || 'https://aplazame.com/static/checkout/';

  if (!/\/$/.test(baseUrl)) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime();

  options.api = api;

  _.http(iframeSrc).then(function (response) {
    // document.body.style.overflow = 'hidden';
    // var iframeHtml = response.data.replace(/(src|href)\s*=\s*\"(?!http|\/\/)/g, '$1=\"' + baseUrl);
    var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />'),
        iframe = _.getIFrame({
      // position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '0',
      background: 'transparent',
      'z-index': 2147483647
    }),
        cssBlur = _.cssHack('blur'),
        cssModal = _.cssHack('modal');

    iframe.className = 'aplazame-modal';

    // blur.setAttribute('rel', 'stylesheet');
    // blur.textContent = 'body > *:not(.aplazame-checkout-iframe) { -webkit-filter: blur(3px); filter: blur(3px); }';

    // iframe.setAttribute('allowtransparency', 'true');
    // iframe.setAttribute('allowfullscreen', 'true');
    // iframe.setAttribute('sandbox', 'allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms');

    document.body.appendChild(iframe);
    iframe.src = iframeSrc;
    // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    // _.writeIframe(iframe, iframeHtml);

    if (!options.merchant) {
      throw new Error('missing merchant parameters');
    }

    if (!options.merchant.public_api_key) {
      if (api.publicKey) {
        options.merchant.public_api_key = api.publicKey;
      } else {
        throw new Error('missing public key');
      }
    }

    options.origin = {
      href: location.href,
      host: location.host,
      protocol: location.protocol,
      origin: location.origin
    };

    _.onMessage('checkout', function (e, message) {

      switch (message.event) {
        case 'merchant':
          cssModal.hack(true);
          cssBlur.hack(true);
          e.source.postMessage({
            checkout: options
          }, '*');
          break;
        case 'drop-blur':
          document.head.removeChild(cssBlur);
          break;
        case 'success':
          console.log('aplazame.checkout:success', message);

          _.http(options.merchant.confirmation_url, {
            method: 'post',
            contentType: 'application/json',
            data: message.data,
            params: message.params
          }).then(function (response) {
            e.source.postMessage({
              aplazame: 'checkout',
              event: 'confirmation',
              result: 'success',
              response: _.http.plainResponse(response)
            }, '*');
          }, function () {
            e.source.postMessage({
              aplazame: 'checkout',
              event: 'confirmation',
              result: 'error',
              response: _.http.plainResponse(response)
            }, '*');
          });
          // confirmation_url
          break;
        case 'close':
          if (iframe && message.close) {
            document.body.removeChild(iframe);
            cssModal.hack(false);
            iframe = null;

            switch (message.result) {
              case 'dismiss':
                location.replace(options.merchant.checkout_url || '/');
                break;
              case 'success':
                location.replace(options.merchant.success_url);
                break;
              case 'cancel':
                location.replace(options.merchant.cancel_url);
                break;
            }
          }
          break;
      }

      if (message.require === 'merchant') {
        cssModal.hack(true);
        cssBlur.hack(true);
        e.source.postMessage({
          checkout: options
        }, '*');
      } else if (iframe && message.close) {
        document.body.removeChild(iframe);
        cssModal.hack(false);
        iframe = null;

        switch (message.close) {
          case 'dismiss':
            location.replace(options.merchant.checkout_url || '/');
            break;
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

module.exports = checkout;

},{"../core/api":9,"../tools/tools":19}],5:[function(require,module,exports){
'use strict';

var _ = require('../tools/tools');

_.onMessage('http', function (e, message) {

  _.http(message.url, {
    method: message.method,
    contentType: message.contentType,
    data: message.data,
    params: message.params
  }).then(function (response) {
    e.source.postMessage({
      aplazame: 'http',
      event: 'response',
      result: 'success',
      response: _.http.plainResponse(response)
    }, '*');
  }, function (response) {
    e.source.postMessage({
      aplazame: 'http',
      event: 'response',
      result: 'error',
      response: _.http.plainResponse(response)
    }, '*');
  });
});

module.exports = { ready: true };

},{"../tools/tools":19}],6:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    lastScrollTop;

function modal(content, options) {

  // if( !modal.cached ) {
  //   return _.http.noCache( api.baseUrl + 'widgets/modal/modal.html' ).then(function (response) {
  //     modal.cached = _.template.compile( response.data.replace(/\n/g, '').replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />') );
  //     modal(data, options);
  //   });
  // }

  if (modal.iframe) {
    document.body.removeChild(modal.iframe);
  }

  options = options || {};

  modal.iframe = _.getIFrame({
    top: 0,
    left: 0,
    width: '100%',
    height: '0',
    background: 'transparent',
    'z-index': 2147483647
  });

  modal.iframe.className = 'aplazame-modal';

  modal.iframe.content = content;

  // lastScrollTop = _.scrollTop();
  // console.log('scrollTop', lastScrollTop );
  // _.cssHack('modal').hack(true);

  // var cssBlur = _.cssHack('blur'),
  //     cssModal = _.cssHack('modal');

  // modal.iframe.overflow = document.body.style.overflow;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.baseUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
  // _.writeIframe(modal.iframe, modal.cached(content || {}) );

  // document.body.style.overflow = 'hidden';
}

_.onMessage('modal', function (e, message) {

  // console.log('message', 'modal', message);

  switch (message.event) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
      _.cssHack('modal').hack(true);
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      break;
    case 'close':
      _.cssHack('modal').hack(false);
      setTimeout(function () {
        _.scrollTop(lastScrollTop);
      }, 0);
      if (modal.iframe) {
        document.body.removeChild(modal.iframe);

        if (modal.referrer) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if (modal.message) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }
});

module.exports = modal;

},{"../../.tmp/aplazame-version":1,"../core/api":9,"../tools/tools":19}],7:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function simulator(amount, _options, callback, onError) {
  if (_.isFunction(_options)) {
    onError = callback;
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
  if (_options.payday) {
    options.params.payday = _options.payday;
  }
  if (_options.publicKey) {
    options.publicKey = _options.publicKey;
  }
  apiHttp.get('instalment-plan-simulator', options).then(function (response) {
    if (_.isFunction(callback)) {
      callback(response.data.choices[0].instalments, response.data.options, response.data);
    }
  }, onError);
}

module.exports = simulator;

},{"../core/api-http":8,"../tools/tools":19}],8:[function(require,module,exports){
'use strict';

var acceptTmpl = 'application/vnd.aplazame{{sandbox}}.v{{version}}+json',
    _ = require('../tools/tools'),
    api = require('./api');

// aplazame methods

function apiOptions(options) {
  options = options || {};
  var publicKey = options.publicKey || api.publicKey;

  if (!publicKey) {
    throw new Error('public key needs to be specified');
  }

  options = _.merge({}, {
    headers: {
      authorization: 'Bearer ' + publicKey
    }
  }, options);

  options.version = options.version || api.version;
  options.sandbox = (options.sandbox === undefined ? api.sandbox : options.sandbox) ? '.sandbox' : '';
  // options.paramsStr = '';
  // if( options.params ) {
  //   for( var key in options.params ) {
  //     options.paramsStr += ( options.paramsStr ? '&' : '?' ) + key + '=' + encodeURIComponent(options.params[key]);
  //   }
  // }

  return _.merge(options, {
    headers: {
      accept: _.replaceKeys(acceptTmpl, options)
    }
  });
}

module.exports = {
  get: function (path, options) {
    options = apiOptions(options);
    var url = path ? _.joinPath(api.host, path) : api.host;

    return _.http(url, options);
  },
  post: function (path, data, options) {
    options = apiOptions(options);
    var url = path ? _.joinPath(api.host, path) : api.host;

    return _.http(url, _.merge(options, { method: 'post', data: data }));
  }
};

},{"../tools/tools":19,"./api":9}],9:[function(require,module,exports){
'use strict';

module.exports = {
  host: 'https://api.aplazame.com/',
  baseUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  version: require('../../.tmp/aplazame-version')
};

},{"../../.tmp/aplazame-version":1,"../tools/tools":19,"./api-http":8,"./init":11}],11:[function(require,module,exports){
'use strict';

var api = require('./api'),
    _ = require('../tools/tools');

function init(options) {
  options = options || {};

  if (typeof options.version === 'string') {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if (!matchVersion) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if (matchVersion[3] !== undefined) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if (typeof options.sandbox === 'string') {
    options.sandbox = options.sandbox === 'true';
  }

  if (typeof options.analytics === 'string') {
    options.analytics = options.analytics === 'true';
  }

  _.extend(api, options);

  console.log('aplazame.init', api);
}

module.exports = init;

},{"../tools/tools":19,"./api":9}],12:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]'),
      options = {};

  if (aplazameScript) {

    if (aplazameScript.src) {
      options.baseUrl = aplazameScript.src.match(/(.*)\/(.*)$/)[1];

      if (!/\/$/.test(options.baseUrl)) {
        options.baseUrl += '/';
      }
    }

    var href = aplazameScript.src.split('?'),
        sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

    if (sandboxMatch) {
      options.sandbox = sandboxMatch[1] === '1' || sandboxMatch[1] === 'true';
    }
  }

  if (document.querySelector('script[data-aplazame]')) {

    var script = document.querySelector('script[data-aplazame]'),
        initText = script.getAttribute('data-aplazame');

    if (/\:/.test(initText)) {
      initText.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });
    } else {
      if (initText) {
        options.publicKey = initText;
      }
    }

    if (script.getAttribute('data-version')) {
      options.version = script.getAttribute('data-version');
    }

    if (script.getAttribute('data-sandbox')) {
      options.sandbox = script.getAttribute('data-sandbox');
    }

    if (script.getAttribute('data-analytics')) {
      options.analytics = script.getAttribute('data-analytics');
    }
  }

  aplazame.init(options);
};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._;

  function buttonsLookup(element) {
    if (!element.querySelectorAll) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if (btns.length) {

      [].forEach.call(btns, function (btn) {
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
          selector: '[data-aplazame-button' + (btnId ? '=\"' + btnId + '\"' : '') + '], [data-aplazame-button-info' + (btnId ? '=\"' + btnId + '\"' : '') + ']',
          parent: btn.getAttribute('data-parent'),
          publicKey: btn.getAttribute('data-public-key'),
          amount: btn.getAttribute('data-amount'),
          currency: btn.getAttribute('data-currency') || undefined,
          sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
          country: btn.getAttribute('data-country') || undefined
        };

        aplazame.button(btnParams);
      });
    }
  }

  _.liveDOM.subscribe(buttonsLookup);

  _.ready(function () {
    buttonsLookup(document);
  });
};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      api = require('../core/api');

  function widgetsLookup(element) {
    if (!element.querySelectorAll) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]');

    if (simulators.length) {

      var iframes = [],
          choices = [];

      _.listen(window, 'message', function (e) {
        var message = e.data;

        if (!e.used && message.aplazame === 'simulator') {
          e.used = true;

          switch (message.event) {
            case 'resize':
              iframes.forEach(function (iframe) {
                if (iframe.contentWindow === e.source) {
                  iframe.style.height = message.data.height + 'px';
                }
              });
              break;
            case 'require:choices':
              e.source.postMessage({
                aplazame: 'simulator',
                event: 'choices',
                data: choices
              }, '*');
              break;
          }
        }
      });

      [].forEach.call(simulators, function (simulator) {

        if (_.elementData(simulator, 'checked')) {
          return;
        }

        _.elementData(simulator, 'checked', true);

        var simulatorParams = {
          simulator: '[data-aplazame-simulator]',
          amount: simulator.getAttribute('data-amount'),
          publicKey: simulator.getAttribute('data-public-key')
        };

        simulator.innerHTML = 'cargando cuotas...';

        aplazame.simulator(simulatorParams.amount, function (_choices) {
          var child = simulator.firstChild,
              now = new Date().getTime();

          choices = _choices;

          while (child) {
            simulator.removeChild(child);
            child = simulator.firstChild;
          }

          _.http(api.baseUrl + 'widgets/simulator/simulator.html?' + now).then(function (response) {
            var iframe = _.getIFrame({
              width: '100%'
            });

            iframes.push(iframe);
            // iframe.src = api.baseUrl + 'widgets/simulator/simulator.html?' + now;
            simulator.appendChild(iframe);

            _.writeIframe(iframe, response.data.replace(/<head\>/, '<head><base href="' + api.baseUrl + 'widgets/simulator/" />'));

            // _.writeIframe(iframe,
            //   response.data
            //     .replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />')
            //     .replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices) + ';')
            // );
          }, function () {
            simulator.innerHTML = '';
          });
        }, function () {
          simulator.innerHTML = '';
        });
      });
      // aplazame.button(btnParams);
    }
  }

  _.liveDOM.subscribe(widgetsLookup);

  _.ready(function () {
    widgetsLookup(document);
  });
};

},{"../core/api":9}],15:[function(require,module,exports){

if (!Element.prototype.matchesSelector) {
  Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
}

function _isType(type) {
  return function (o) {
    return typeof o === type;
  };
}

function _instanceOf(_constructor) {
  return function (o) {
    return o instanceof _constructor;
  };
}

var _isObject = _isType('object'),
    _isFunction = _isType('function'),
    _isString = _isType('string'),
    _isNumber = _isType('number'),
    _isArray = Array.isArray || _instanceOf(Array),
    _isDate = _instanceOf(Date),
    _isRegExp = _instanceOf(RegExp),
    _isElement = function (o) {
  return o && o.nodeType === 1;
};

if (window.attachEvent && !window.HTMLElement.prototype.addEventListener) {
  window.HTMLElement.prototype.addEventListener = function (eventName, listener) {
    this.attachEvent('on' + eventName, listener);
  };
}

function listen(element, eventName, listener) {
  if (element instanceof Array) {
    for (var i = 0, n = element.length; i < n; i++) {
      element[i].addEventListener(eventName, listener, false);
    }
    return;
  }
  element.addEventListener(eventName, listener, false);
}

// var listen = window.addEventListener ? function (element, eventName, listener) {
//   if( element instanceof Array ) {
//     for( var i = 0, n = element.length ; i < n ; i++ ) {
//       element[i].addEventListener(eventName, listener, false);
//     }
//     return;
//   }
//   element.addEventListener(eventName, listener, false);
// } : ( window.attachEvent && function (element, eventName, listener) {
//   if( element instanceof Array ) {
//     for( var i = 0, n = element.length ; i < n ; i++ ) {
//       element[i].addEventListener(eventName, listener, false);
//     }
//     return;
//   }
//   element.attachEvent('on' + eventName, listener);
// } );

if (!window.HTMLElement.prototype.addEventListener) {
  throw new Error('Your Browser does not support events');
}

function once(fn) {
  var done;
  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}

function docReady(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    listen(window, 'load', callback);
  }
}

function replaceKeys(tmpl, keys) {
  return keys ? tmpl.replace(/\{\{([^\}]+)\}\}/g, function (match, key) {
    return keys[key];
  }) : function (ks) {
    return replaceKeys(tmpl, ks);
  };
}

var arrayShift = [].shift;
function extend() {
  var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while (src) {
    for (key in src) {
      dest[key] = src[key];
    }
    src = arrayShift.call(arguments);
  }

  return dest;
}

function merge() {
  var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while (src) {

    if (typeof dest !== typeof src) {
      dest = _isArray(src) ? [] : _isObject(src) ? {} : src;
    }

    if (_isObject(src)) {

      for (key in src) {
        if (src[key] !== undefined) {
          if (typeof dest[key] !== typeof src[key]) {
            dest[key] = merge(undefined, src[key]);
          } else if (_isArray(dest[key])) {
            [].push.apply(dest[key], src[key]);
          } else if (_isObject(dest[key])) {
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

function joinPath() {
  return [].reduce.call(arguments, function (prev, path, index, list) {

    path = index ? path.replace(/^\//, '') : path;
    path = index === list.length - 1 ? path : path.replace(/\/$/, '');

    return prev + (index ? '/' : '') + path;
  }, '');
}

function writeIframe(iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  iframeDoc.charset = 'UTF-8';
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function getIFrame(iframeStyles) {
  var iframe = document.createElement('iframe');
  extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  return iframe;
}

function template(name, data) {
  return template.cache[name](data || {});
}

template.cache = {};

template.compile = function (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
  'var p=[],print=function(){p.push.apply(p,arguments);};' +

  // Introduce the data as local variables using with(){}
  'with(obj){p.push(\'' +

  // Convert the template into pure JavaScript
  tmpl.trim().replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

function findBubbleClose(str) {
  var level = 0;

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === '(') {
      level++;
    } else if (str[i] === ')') {
      if (level === 0) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector(selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if (closePosition === -1) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if (partialQuery) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery));
      });

      return submatches;
    }

    return matches;
  }, [].slice.call((rootElement || document).querySelectorAll(splitHas.shift())));
}

function querySelector(selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if (!selector) {
    return [];
  }

  if (!/\:has\(/.test(selector)) {
    return [].slice.call((rootElement || document).querySelectorAll(selector));
  }

  return hasSelector(selector);
}

function cssQuery(_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat(querySelector(selector, rootElement));
  }, []);
}

function getAmount(amount) {
  var prefix = '';

  if (amount < 0) {
    prefix = '-';
    amount = 0 - amount;
  }

  if (!amount) {
    return '0,00';
  } else if (amount < 10) {
    return '0,0' + amount;
  } else if (amount < 100) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

var cssHack = (function () {
  var cache = {},
      hacks = {
    blur: 'body > *:not(.aplazame-modal) { -webkit-filter: blur(3px); filter: blur(3px); }',
    // modal: '.aplazame-modal { height: 100%; } html, body { margin: 0; padding: 0; } @media (max-width: 767px) { body > *:not(.aplazame-modal) { display: none; } }'
    modal: '.aplazame-modal { height: 100%; } html, body { margin: 0; padding: 0; } body { overflow: hidden; }' + '@media (max-width: 767px) { html, body { height: 100%; } body > *:not(.aplazame-modal) { display: none; } iframe.aplazame-modal { position: absolute; } }' + '@media (min-width: 768px) { .aplazame-modal { position: fixed; } }'
    // overflow: '/* html { height: 100%; } body { overflow: hidden; } */',
    // inputFocus: 'html, body { height: 100vh; overflow: hidden; }'
  };

  return function hack(hackName) {
    if (!cache[hackName]) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
      style.textContent = hacks[hackName].replace(/;/g, ' !important;');

      var enabled = false;

      style.hack = function (enable) {
        enable = enable === undefined || enable;

        if (enable) {
          if (enabled) {
            return;
          }
          enabled = true;
          document.head.appendChild(style);
        } else {
          if (!enabled) {
            return;
          }
          enabled = false;
          document.head.removeChild(style);
        }
      };

      cache[hackName] = style;
    }
    return cache[hackName];
  };
})();

function scrollTop(value) {
  if (value !== undefined) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
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
  joinPath: joinPath,
  writeIframe: writeIframe,
  getIFrame: getIFrame,
  template: template,
  cssQuery: cssQuery,
  getAmount: getAmount,
  cssHack: cssHack,
  scrollTop: scrollTop
};

},{}],16:[function(require,module,exports){
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
  return matches && (matches[3] === 'json' ? JSON.parse(text) : matches[3] === 'xml' ? xml : text);
}

function http(url, config) {
  config = config || {};
  config.headers = config.headers || {};
  config.url = url;

  var request = null,
      on = { resolve: [], reject: [] };

  try {
    // Firefox, Opera 8.0+, Safari
    request = new XMLHttpRequest();
  } catch (e) {
    // Internet Explorer
    try {
      request = new ActiveXObject('Msxml2.XMLHTTP');
    } // jshint ignore:line
    catch (er) {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } // jshint ignore:line
  }
  if (request === null) {
    throw 'Browser does not support HTTP Request';
  }

  if (config.params) {
    var i = 0;
    for (var param in config.params) {
      url += (i++ ? '&' : /\?/.test(url) ? '&' : '?') + param + '=' + encodeURIComponent(config.params[param]);
    }
  }

  request.open((config.method || 'get').toUpperCase(), url);

  if (config.withCredentials) {
    request.withCredentials = true;
  }

  for (var key in config.headers) {
    request.setRequestHeader(headerToTitleSlug(key), config.headers[key]);
  }

  request.resolve = function (response) {
    on.resolve.forEach(function (handler) {
      handler(response);
    });
  };
  request.reject = function (response) {
    on.reject.forEach(function (handler) {
      handler(response);
    });
  };

  var headersCache;
  request.getHeaders = function () {
    if (!headersCache) {
      headersCache = {};
      request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
        headersCache[headerToCamelCase(key)] = value.trim();
      });
    }
    return headersCache;
  };

  request.onreadystatechange = function () {
    if (request.readyState === 'complete' || request.readyState === 4) {
      var response = {
        config: request.config,
        data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
        status: request.status,
        headers: request.getHeaders,
        xhr: request
      };
      if (request.status >= 200 && request.status < 300) {
        request.resolve(response);
      } else {
        request.reject(response);
      }
    }
  };

  request.config = config;

  if (config.contentType) {
    request.setRequestHeader('Content-Type', config.contentType);

    if (config.contentType === 'application/json' && typeof config.data !== 'string') {
      config.data = JSON.stringify(config.data);
    }
  } else {
    if (typeof config.data === 'string') {
      config.contentType = 'text/html';
    } else {
      config.contentType = 'application/json';
      config.data = JSON.stringify(config.data);
    }
  }

  request.send(config.data);

  return {
    then: function (onResolve, onReject) {
      if (onResolve instanceof Function) {
        on.resolve.push(onResolve);
      }
      if (onReject instanceof Function) {
        on.reject.push(onReject);
      }
    },
    error: function (onReject) {
      if (onReject instanceof Function) {
        on.reject.push(onReject);
      }
    }
  };
}

http.noCache = function (url, config) {
  url += (/\?/.test(url) ? '&' : '?') + 't=' + new Date().getTime();
  return http(url, config);
};

http.plainResponse = function (response) {
  return {
    config: response.config,
    data: response.data,
    status: response.status,
    headers: response.headers()
  };
};

module.exports = http;

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function (_) {
  var suscriptors = [],
      running = false;

  function initLiveDOM() {

    _.ready(function () {
      document.body.addEventListener('DOMSubtreeModified', function (event) {
        // console.debug( 'DOM Changed at ', new Date(), event.target );
        for (var i = 0, n = suscriptors.length; i < n; i++) {
          suscriptors[i](event.target);
        }
      }, false);
    });
  }

  return {
    subscribe: function (handler) {
      if (!running) {
        initLiveDOM(true);
        running = true;
      }
      if (handler instanceof Function) {
        suscriptors.push(handler);
      }
    }
  };
};

},{}],18:[function(require,module,exports){

module.exports = function (_) {

  var messageTarget = {};

  _.listen(window, 'message', function (e) {
    var message = e.data,
        listener = messageTarget[message.aplazame];

    if (!e.used && listener) {
      e.used = true;
      listener(e, message);
    }
  });

  return function (target, handler) {
    if (_.isString(target) && _.isFunction(handler)) {
      messageTarget[target] = handler;
    }
  };
};

},{}],19:[function(require,module,exports){
// 'use strict';

var _ = require('./basic-tools');

_.extend(_, {
  liveDOM: require('./live-dom')(_),
  http: require('./http'),
  elementData: document.createElement('div').dataset ? function (el, key, value) {
    if (value !== undefined) {
      el.dataset[key] = value;
    }
    return el.dataset[key];
  } : function (el, key, value) {
    if (value !== undefined) {
      el.setAttribute('data-' + key, value);
    }
    return el.getAttribute('data-' + key);
  },
  onMessage: require('./message-listener')(_)
});

module.exports = _;

},{"./basic-tools":15,"./http":16,"./live-dom":17,"./message-listener":18}]},{},[2]);
