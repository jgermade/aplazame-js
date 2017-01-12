
export function isType (type, o) {
  return o ? typeof o === type : function (_o) {
    return typeof _o === type;
  };
}

export function isObject (o) {
  return o !== null && typeof o === 'object';
}

export const isArray = Array.isArray || function (o) {
  return o instanceof Array;
};

export const isString = isType('string');

export const isFunction = isType('function');

var arrayShift = [].shift;

export function extend () {
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

export function merge () {
  var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while( src ) {

    if( typeof dest !== typeof src ) {
        dest = isArray(src) ? [] : ( isObject(src) ? {} : src );
    }

    if( isObject(src) ) {

      for( key in src ) {
        if( src[key] === undefined ) {
          dest[key] = undefined;
        } else if( isArray(dest[key]) ) {
          [].push.apply(dest[key], src[key]);
        } else if( isObject(dest[key]) ) {
          dest[key] = merge(dest[key], src[key]);
        } else {
          dest[key] = src[key];
        }
      }
    }
    src = arrayShift.call(arguments);
  }

  return dest;
}

export function mapObject (o, iteratee) {
  var result = {};
  for( var key in o ) {
    result[key] = iteratee(o[key], key);
  }
  return result;
}

export function copy (src) {
  if( isArray(src) ) {
    return src.map(function (item) {
      return copy(item);
    });
  }

  if( isObject(src) ) {
    return mapObject(src, function (item) {
      return copy(item);
    });
  }

  return src;
}

var RE_dotsBack = /[^\/]+\/\.\.\//g,
	clearStr = function () { return ''; };

export function joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, '');

    for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
        path += '/' + arguments[i].replace(/^\/|\/$/g, '');
    }
    if( last ) {
        path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
    }

    while( RE_dotsBack.test(path) ) {
			path = path.replace(RE_dotsBack, clearStr);
    }

    return path;
}
