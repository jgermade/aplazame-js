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
