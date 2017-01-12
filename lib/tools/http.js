/* global ActiveXObject */

// var Promise = require('parole');
import api from '../aplazame/api';
import Promise from 'parole';

import { isObject, isString, isFunction, merge, copy, joinPath } from './misc';

function resolveFunctions (o, args, thisArg) {
  for( var key in o ) {
    if( isFunction(o[key]) ) {
      o[key] = o[key].apply(thisArg, args || []);
    } else if( isObject(o[key]) ) {
      o[key] = resolveFunctions(o[key], args, thisArg);
    }
  }
  return o;
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?([^;]*)/;
function parseContentType(contentType) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches ? matches[3] : 'text';
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([a-zA-Z])/g, function (_match, lower, upper) {
    return lower + upper.toUpperCase();
  });
}

function headerToTitleSlug(text) {
  // console.log('headerToTitleSlug', text);
  var key = text.replace(/([a-z])([A-Z])/g, function (_match, lower, upper) {
      return lower + '-' + upper;
  });
  key = key[0].toUpperCase() + key.substr(1);

  return key;
}

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (_match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function headersGetter (request) {
  var headersCache;
  return function () {
    if( !headersCache ) headersCache = _getHeaders(request);
    return headersCache;
  };
}

var parseData = {
  json: function (data) {
    return JSON.parse(data);
  }
};

var makeRequest = global.fetch ? function (config, onSuccess, onError) {
  return fetch( new Request(config.url, {
    method: config.method,
    headers: new Headers(config.headers)
  }) ).then(function (response) {
    var headers = {},
        iterator = response.headers.entries(),
        entry = iterator.next();
    while( entry ) {
      headers[headerToCamelCase(entry.value[0])] = entry.value[1];
      entry = iterator.next();
    }

    return response[config.format || parseContentType(headers.contentType)]().then(function (data) {
      response.data = data;
      onSuccess(response);
    });
    // onSuccess({ ok: true, headers: response.headers });
  }, onError);
} : function (config, resolve, reject) {

  var request = null;

  try { // Firefox, Opera 8.0+, Safari
    request = new XMLHttpRequest();
  } catch (e) { // Internet Explorer
    try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
    catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
  }
  if( request === null ) { throw 'Browser does not support HTTP Request'; }

  request.onreadystatechange = function(){
    if( request.readyState === 'complete' || request.readyState === 4 ) {
      var headers = headersGetter(request),
          type = parseContentType(headers.contentType);
      var response = {
        config: config,
        data: type === 'xml' ? request.responseXML : (parseData[type] ? parseData[type](request.responseText) : request.responseText),
        status: request.status,
        headers: headersGetter(request)
      };
      if( request.status >= 200 && request.status < 400 ) {
        resolve( response );
      } else {
        reject( response );
      }
    }
  };

  request.open(config.method, config.url, true);
  for( var key in config.headers ) {
    request.setRequestHeader(key, config.headers[key]);
  }

  request.send( isString(config.data) ? config.data : JSON.stringify(config.data) );

};

function serializeParams (params) {
  var result = '';

  for( var param in params ) {
    result += ( result ? '&' : '' ) + param + '=' + encodeURIComponent(params[param]);
  }
  return result;
}

function http (url, config, method, data) {

  config = copy( isObject(url) ? url : config || {} );
  config.url = url === config ? config.url : url;
  config.method = (method || config.method || 'GET').toUpperCase();
  config.timestamp = new Date().getTime();
  config.data = data || config.data;

  config = resolveFunctions(config, [config]);

  var headers = {};
  config.headers = config.headers || {};
  for( var key in config.headers ) {
    headers[ headerToTitleSlug(key) ] = config.headers[key];
  }
  config.headers = headers;

  console.log('http', config);

  if( !isString(config.url) ) throw new Error('url must be a string');

  if( config.params ) {
    config.url += ( /\?/.test(config.url) ? '&' : '?' ) + serializeParams( config.params );
  }

  var request = new Promise(function (resolve, reject) {
    makeRequest(config, resolve, reject);
  });

  request.config = config;

  return request;
}

function plainOptions (optionsPile) {
  optionsPile = optionsPile ? copy(optionsPile) : [];

  var plainOptions = copy(api.config),
      options = optionsPile.shift();

  while( options ) {
    merge(plainOptions, options);
    options = optionsPile.shift();
  }

  return plainOptions;
}

function basePath (_path) {
  var getPath = typeof _path === 'string' ? function () {
    return _path;
  } : _path;
  return function (path) {
    if( path === undefined ) {
      return getPath();
    }
    return joinPath(getPath(), path);
  };
}

['get', 'head', 'delete'].forEach(function (method) {
  http[method] = function (url, options) {
    console.log('http.get', url, options);
    return http(url, options, method);
  };
});

['post', 'put', 'patch'].forEach(function (method) {
  http[method] = function (url, data, options) {
    return http(url, options, method, data );
  };
});

http.responseData = function (response) {
  return response.data;
};

function apiLayer (_path, optionsPile) {
  var _apiPath = basePath(_path);

  return {
    head: function (path, options) {
      return http.head( _apiPath(path), plainOptions( optionsPile.concat(options) ) );
    },
    get: function (path, options) {
      return http.get( _apiPath(path), plainOptions( optionsPile.concat(options) ) );
    },
    post: function (path, data, options) {
      return http.post( _apiPath(path), data, plainOptions( optionsPile.concat(options) ) );
    },
    put: function (path, data, options) {
      return http.put( _apiPath(path), data, plainOptions( optionsPile.concat(options) ) );
    },
    patch: function (path, data, options) {
      return http.patch( _apiPath(path), data, plainOptions( optionsPile.concat(options) ) );
    },
    delete: function (path, options) {
      return http.delete( _apiPath(path), plainOptions( optionsPile.concat(options) ) );
    },
    path: _apiPath,
    base: function (path, options) {
      return apiLayer(_apiPath(path), optionsPile.concat(options || {}) );
    },
    config: function (options) {
      if( options === undefined ) {
        return plainOptions( optionsPile );
      }
      if( options.origin ) {
        _apiPath = basePath(options.origin);
      }
      merge(optionsPile[optionsPile.length - 1], options);
    },
    responseData: http.responseData
  };
}

http.base = function (path, options) {
  return apiLayer(path, [options ||{}]);
};

// http.usePromise = function (P) { Promise = P; };

export default http;
