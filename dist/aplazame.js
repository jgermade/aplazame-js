(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.353';
},{}],2:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(3px);filter:blur(3px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}';
},{}],3:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';
},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{height:100%;height:100vh;position:relative;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';
},{}],5:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.9);text-align:center;z-index:2147483646;-webkit-transform:translateZ(0);transform:translateZ(0)}.aplazame-overlay:before{content:\'\';display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse}';
},{}],6:[function(require,module,exports){
module.exports = '<div class="card-content">  <header class="aplazame"></header>  <section class="info">    Elige el número de meses y la cuota que más te convengan  </section>  <div class="choices-wrapper">    <% for( var i = choices.length - 1 ; i >= 0 ; i-- ) { %>    <button ng-repeat="choice in choices" type="button" class="choice" ng-click="selectChoice(choice)" ng-class="{ active: choice === currentChoice }">      <div class="wrapper">        <div class="num-instalments">          <span><%= choices[i].num_instalments %></span>&nbsp;<span><%= months(choices[i].num_instalments) %></span>        </div>        <div class="amount">          <span class="amount-amount"><%= getAmount(choices[i].amount) %></span><!--          --><span class="amount-currency">€</span><!--          --><span class="amount-per-month">/mes</span></div>      </div>    </button>    <% } %>  </div>  <section class="tae">TAE máximo: <%= getAmount(choices[0].annual_equivalent) %>%</section>  <section class="how-it-works">    <header>¿Cómo funciona?</header>    <div class="info-wrapper">      <div class="info">        <h3>Elige Aplazame</h3>        <p>en la tienda, cuando vayas a pagar el pedido.</p>      </div>      <div class="info">        <h3>Decide cómo quieres pagar</h3>        <p>Hasta en 12 cuotas, pagando con tarjeta.</p>      </div>      <div class="info">        <h3>Disfruta de tu compra</h3>        <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>      </div>    </div>  </section></div><div class="cta">  <div class="col-sm-6 button-wrapper">    <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>  </div>  <div class="col-sm-6 button-wrapper">    <a class="btn lg btn-block" href="http://aplazame.com/how/" target="_blank">¿Quieres saber más?</a>  </div></div>';
},{}],7:[function(require,module,exports){
module.exports = '<div class="aplazame-widget-instalments">  <span class="aplazame-widget-from">desde&nbsp;</span><!--  --><strong class="aplazame-widget-amount">    <span class="aplazame-widget-price"><%= getAmount(choice.amount) %></span><!--    --><span class="aplazame-widget-currency">€</span>  </strong><!--  --><sub class="aplazame-widget-per-month">/mes</sub><!--  --><span class="aplazame-widget-instalments-wrapper">    <span>&nbsp;en&nbsp;</span>    <em class="aplazame-widget-instalments-num">12</em>    <span>&nbsp;cuotas</span>  </span></div><style rel="stylesheet"><%= options.widget.styles %></style>';
},{}],8:[function(require,module,exports){
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

},{}],9:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

}


},{}],10:[function(require,module,exports){
/*
 * events.js - Single library to handle generic events

 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jesús Manuel Germade Castiñeiras <jesus@germade.es>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function (root, factory) {

  if ( typeof module !== 'undefined' ) {
    module.exports = factory();
  } else if( root ) {
    if( root.define ) {
      root.define('Events', function () { return factory(); } );
    } else if( root.angular ) {
      root.angular.module('eventsWrapper', []).factory('Events', function () { return factory(true); });
    } else if( !root.Events ) {
      root.Events = factory();
    }
  }

})(this, function (ng) {
	'use strict';

  var methods = {
    std: { on: 'on', once: 'once', off: 'off', trigger: 'trigger' },
    safe: { on: '$$on', once: '$$once', off: '$$off', trigger: '$$trigger' }
  };

  function Event (name, args, caller) {
    this.name = name;
    this.args = args;
    this.$$args = [this].concat(args);
    this.caller = caller;
  }

  Event.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };

  function getMethods (ngSafe) {
    return ngSafe ? methods.safe : methods.std;
  }

	function _addListener (handlers, handler, context) {
    if( ! handler instanceof Function ) {
        return false;
    }
    handlers.push({ handler: handler, context: context });
  }

  function _triggerEvent (e, handlers) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; i++ ) {
        handlers[i].handler.apply(e.caller, e.$$args);
        if( e.defaultPrevented ) {
          return i + 1;
        }
      }
      return len;
    }
  }

  function _emptyListener (handlers) {
    if( handlers ) {
      handlers.splice(0, handlers.length);
    }
  }

  function _removeListener (handlers, handler) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; ) {
        if( handlers[i].handler === handler ) {
          handlers.splice(i, 1);
          len--;
        } else {
          i++;
        }
      }
    }
  }

  function Events (target, ngSafe) {
    target = target || this;

    var listeners = {},
        listenersOnce = {},
        method = getMethods(ngSafe);

    function checkEach (_method, eventName, arg1, arg2, arg3) {
      if( eventName instanceof Array ) {
        eventName.forEach(function (_eventName) { target[_method](_eventName, arg1, arg2, arg3); });
        return true;
      }
      if( typeof eventName !== 'string' ) {
        throw new Error('event name should be a string');
      }
      if( / /.test(eventName) ) {
        target[_method](eventName.split(/ +/), arg1, arg2, arg3);
        return true;
      }
    }

    target[method.on] = function (eventName, handler, context) {
      if( checkEach(method.on, eventName, handler, context) ) {
        return target;
      }
      listeners[eventName] = listeners[eventName] || [];
      _addListener(listeners[eventName], handler, context);
      return target;
    };

    target[method.once] = function (eventName, handler, context) {
      if( checkEach(method.once, eventName, handler, context) ) {
        return target;
      }
      listenersOnce[eventName] = listenersOnce[eventName] || [];
      _addListener(listenersOnce[eventName], handler, context);
      return target;
    };

    target[method.trigger] = function (eventName, attrs, caller) {
      if( checkEach(method.trigger, eventName, attrs, caller) ) {
        return target;
      }
      var e = new Event(eventName, attrs, caller);

      _triggerEvent(e, listeners[eventName]);

      if( !e.defaultPrevented ) {
        var len = _triggerEvent(e, listenersOnce[eventName]);
        if( len ) {
          listenersOnce[eventName].splice(0, len);
        }
      }
      return target;
    };

    target[method.off] = function (eventName, handler) {
      if( checkEach(method.off, eventName, handler) ) {
        return target;
      }
      if( handler === undefined ) {
        _emptyListener(listeners[eventName]);
        _emptyListener(listenersOnce[eventName]);
      } else {
        _removeListener(listeners[eventName], handler);
        _removeListener(listenersOnce[eventName], handler);
      }
      return target;
    };
  }

  return Events;
});

},{}],11:[function(require,module,exports){

// factory http

var $q = require('q-promise'),
    _ = require('nitro-tools/extend');

function resolveFunctions (o, args, thisArg) {
  for( var key in o ) {
    if( o[key] instanceof Function ) {
      o[key] = o[key].apply(thisArg, args || []);
    } else if( typeof o[key] === 'object' && o[key] !== null ) {
      o[key] = resolveFunctions(o[key], args, thisArg);
    }
  }
  return o;
}

function headerToTitleSlug(text) {
  // console.log('headerToTitleSlug', text);
  var key = text.replace(/([a-z])([A-Z])/g, function (match, lower, upper) {
      return lower + '-' + upper;
  });
  key = key[0].toUpperCase() + key.substr(1);

  return key;
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/g, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function headersGetter (request) {
  var headersCache;
  return function () {
    if( !headersCache ) {
      headersCache = _getHeaders(request);
    }
    return headersCache;
  };
}

function serializeParams (params) {
  var result = '';

  for( var param in params ) {
    result += ( result ? '&' : '' ) + param + '=' + encodeURIComponent(params[param]);
  }
  return result;
}

function addHeadersToRequest (req, headers) {
  for( var key in headers ) {
    req.setRequestHeader( headerToTitleSlug(key), headers[key] );
  }
}

var defaultSettings = {};

http.config = function (settings) {
  _.merge(defaultSettings, settings);
  return http;
};

function http (url, config) {

  if( config === undefined && typeof url === 'object' && url !== null ) {
    config = url;
    url = config.url;
  } else {
    config = config || {};
    config.url = url;
  }

  config = _.merge(_.copy(defaultSettings),_.copy(config));
  config = resolveFunctions( config, [config], null );
  config.method = ( config.method || 'GET').toUpperCase();

  if( typeof config.url !== 'string' ) {
    throw new Error('url should be a string');
  }

  return $q(function (resolve, reject) {

    var request = null;

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
        catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
    }
    if( request === null ) { throw 'Browser does not support HTTP Request'; }

    if( config.params ) {
      url += ( /\?/.test(url) ? '&' : '?' ) + serializeParams( config.params );
    }

    request.open( config.method, url );

    if( config.withCredentials ) {
      request.withCredentials = true;
    }

    addHeadersToRequest(request, config.headers || {} );

    request.config = config;
    config.start = new Date().getTime();

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: headersGetter(request),
          xhr: request
        };
        if( request.status >= 200 && request.status < 400 ) {
          resolve( response );
        } else {
          reject( response );
        }
      }
    };

    if( config.contentType ) {

      if( config.data && config.contentType === 'application/json' && typeof config.data !== 'string' ) {
        config.data = JSON.stringify(config.data);
      }

    } else if( config.data instanceof FormData ) {
      config.contentType = 'multipart/form-data';
    } else if( typeof config.data === 'object' && config.data !== null ) {
      config.contentType = 'application/json';
      if( config.data ) {
        config.data = JSON.stringify(config.data);
      }
    }

    if( config.contentType ) {
      // addHeadersToRequest(request, { contentType: config.contentType });
      request.setRequestHeader( 'Content-Type', config.contentType );
    }

    request.send( config.data );

  });
}

http.serialize = serializeParams;

http.noCache = function (url, config) {
  url += ( /\?/.test(url) ? '&' : '?' ) + 't=' + new Date().getTime();
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

['get', 'delete'].forEach(function (method) {
  http[method] = function (url, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method
    }));
  };
});

['post', 'put', 'patch'].forEach(function (method) {
  http[method] = function (url, data, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method,
      data: data || {}
    }));
  };
});

// basePath

function basePath (bp) {
  if( /\/$/.test(bp) ) {
    bp = bp.replace(/\/$/,'');
  }
  return function (p) {
    if( !p ) {
      return bp;
    }
    return bp + ( /^\//.test(p) ? '' : '/' ) + p;
  };
}

http.base = function (url, baseConfig) {
  var bp = basePath(url),
      based = function () {
        return based.get.apply(this, arguments);
      };

  baseConfig = baseConfig || {};

  ['get', 'delete'].forEach(function (method) {
    based[method] = function (p, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method }));
    };
  });

  ['post', 'put', 'patch'].forEach(function (method) {
    based[method] = function (p, data, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method, data: data }) );
    };
  });

  return based;
};

http.responseData = function (response) {
  return response.data;
};

module.exports = http;

},{"nitro-tools/extend":13,"q-promise":20}],12:[function(require,module,exports){

var arrayShift = [].shift;

module.exports = function extend () {
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
};

},{}],13:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    type = require('./type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

      if( typeof dest !== typeof src ) {
          dest = type.isArray(src) ? [] : ( type.isObject(src) ? {} : src );
      }

      if( type.isObject(src) ) {

        for( key in src ) {
          if( src[key] === undefined ) {
            dest[key] = undefined;
          } else if( type.isArray(dest[key]) ) {
            [].push.apply(dest[key], src[key]);
          } else if( type.isObject(dest[key]) ) {
            dest[key] = _merge(dest[key], src[key]);
          } else {
            dest[key] = src[key];
          }
        }
      }
      src = arrayShift.call(arguments);
    }

    return dest;
}

function mapObject (o, iteratee) {
  var result = {};
  for( var key in o ) {
    result[key] = iteratee(o[key], key);
  }
  return result;
}

function _copy (src) {
  if( type.isArray(src) ) {
    return src.map(function (item) {
      return _copy(item);
    });
  }
  
  if( type.isObject(src) ) {
    return mapObject(src, function (item) {
      return _copy(item);
    });
  }

  return src;
}

module.exports = {
  extend: require('./_extend'),
  merge: _merge,
  copy: _copy
};

},{"./_extend":12,"./type":17}],14:[function(require,module,exports){

var type = require('./type');

function _key (o, _key, value){
    if( !type.isObject(o) ) {
			return undefined;
		}

    var keys = _key.split('.'),
        key = keys.shift();

    if( value === undefined ) {
      while (key) {
        if( type.isObject(o) && key in o ) {
          o = o[key];
        } else {
          return;
        }
        key = keys.shift();
      }

      return o;
    } else {

      while (key) {
        if( o instanceof Object ) {
          if ( keys.length ){
            if( !(key in o) ) {
              o[key] = {};
            }
            o = o[key];
          } else {
            o[key] = value;
            return true;
          }
        }
        key = keys.shift();
      }

      return false;
    }
}

module.exports = {
  key: _key,
  keys: Object.keys
};

},{"./type":17}],15:[function(require,module,exports){

var type = require('./type'),
    arrSome = Array.prototype.some,
    arrEvery = Array.prototype.every,
    arrForEach = Array.prototype.forEach,
    arrMap = Array.prototype.map,
    arrIndexOf = Array.prototype.indexOf;

// -----------------------------------------

function _eachInList( list, iteratee, thisArg ) {
  return arrForEach.call(list, iteratee, thisArg);
}

function _eachInObject( o, iteratee, thisArg ) {
  for( var key in o ) {
    iteratee.call(thisArg, [o[key], key]);
  }
}

function _matchAll (o, filters) {
  for( var key in filters ) {
    if( o[key] !== filters[key] ) {
      return false;
    }
  }
  return true;
}

function _matchAny (o, filters) {
  for( var key in filters ) {
    if( o[key] === filters[key] ) {
      return true;
    }
  }
  return false;
}

function _iterateeFn (iteratee) {
  if( type.isFunction(iteratee) ) {
    return iteratee;
  }

  if( type.isObject(iteratee) ) {
    return function (item) {
      return _matchAll(item, iteratee);
    };
  }

  return function (item) {
    return item === iteratee;
  };
}

// -----------------------------------------

function each (o, iteratee, thisArg) {
  if( o && o.length ) {
    arrForEach.call(o, iteratee, thisArg);
  } else if( type.isObject(o) ) {
    _eachInObject(o, iteratee, thisArg || this);
  }
}

function indexOf (list, iteratee, thisArg) {
  if( !type.isFunction(iteratee) ) {
    return arrIndexOf.call(list, iteratee, thisArg);
  }

  for( var i = 0, n = list.length; i < n ; i++ ) {
    if( iteratee.call(thisArg, list[i], i) ) {
      return i;
    }
  }
  return -1;
}

function _indexBy (list, iteratee, thisArg) {
  var map = {};

	for( var i = 0, len = list.length; i < len; i++ ) {
    map[iteratee.call(thisArg, list[i], i)] = list[i];
  }
  return map;
}

function indexBy (list, iteratee, thisArg) {
	if( type.isString(iteratee) ) {
		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
	} else if( type.isFunction(iteratee) ) {
		return _indexBy(list, iteratee, thisArg);
	}
	return {};
}

function some (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrSome.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( iteratee.call(thisArg, list[key], key) ) {
        return true;
      }
    }
    return false;
  }
};

function every (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrEvery.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( !iteratee.call(thisArg, list[key], key) ) {
        return false;
      }
    }
    return true;
  }
};

function map (list, _iteratee, thisArg) {
  var iteratee = type.isString(_iteratee) ? function (item) { return item[_iteratee]; } : _iteratee;

  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    var result = {};
    for( var key in list )  {
      result[key] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
};

function map2List (list, iteratee, thisArg) {
  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  }
  var result = [], i = 0;
  for( var key in list )  {
    result[i++] = iteratee.call(thisArg, list[key], key);
  }
  return result;
};

function remove (list, iteratee, thisArg) {
    thisArg = thisArg === undefined ? this : thisArg;

    iteratee = _iterateeFn(iteratee);

    for( var i = 0, len = list.length; i < len; i++ ) {
				if( iteratee.call(thisArg, list[i]) ) {
						list.splice(i, 1);
						i--;
				}
		}
}

function first (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;

		iteratee = _iterateeFn(iteratee);

    var i = arrIndexOf.call(list, iteratee, thisArg);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
}

function last (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;

		iteratee = _iterateeFn(iteratee);

		for( var i = list.length - 1 ; i >= 0 ; i-- ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
}

function filter (list, iteratee, thisArg) {
    var newList = [];

		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = _iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

module.exports = {
  _matchAll: _matchAll,
  _matchAny: _matchAny,
  find: first,
  first: first,
  last: last,
  filter: filter,
  each: each,
  some: some,
  every: every,
  map: map,
  pluck: map,
  map2List: map2List,
  indexOf: indexOf,
  indexBy: indexBy,
  remove: remove,
  if: function (result, fn) {
    if( result !== undefined && fn instanceof Function ) {
      return fn(result);
    }
  }
};

},{"./type":17}],16:[function(require,module,exports){

var RE_dotsBack = /[^\/]+\/\.\.\//g,
	clearStr = function () { return ''; };

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, ''),
    	backDots;

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

module.exports = {
  joinPath: _joinPath
};

},{}],17:[function(require,module,exports){
'use strict';

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

module.exports = {
  isType: function (type, value) {
    if( value === undefined ) {
      return _isType(type);
    }
    return _isType(type)(value);
  },
  instanceOf: function (Proto, value) {
    if( value === undefined ) {
      return _instanceOf(Proto);
    }
    return _instanceOf(Proto)(value);
  },
  isObject: function (o) {
    return typeof o === 'object' && o !== null;
  },
	isFunction: _isType('function'),
	isString: _isType('string'),
	isNumber: _isType('number'),
	isArray: Array.isArray || _instanceOf(Array),
	isDate: _instanceOf(Date),
	isRegExp: _instanceOf(RegExp),
	isElement: function(o) {
    return o && o.nodeType === 1;
  },
  isUndefined: function (value) {
    return value === undefined;
  }
};

},{}],18:[function(require,module,exports){

module.exports = function (Promise) {

	if( !Promise.defer ) {
		Promise.defer = function () {
		  var deferred = {};
		  deferred.promise = new Promise(function (resolve, reject) {
		    deferred.resolve = resolve;
		    deferred.reject = reject;
		  });
		  return deferred;
		};
	}

	function each (iterable, handler) {
		for( var i = 0, n = iterable.length; i < n ; i++ ) {
			handler(iterable[i], i);
		}
	}

	if( !Promise.all ) {
		Promise.all = function (iterable) {
		  return new Promise(function (resolve, reject) {
		    var pending = iterable.length,
		        results = [];
		    each(iterable, function (_promise, i) {

		      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
		        results[i] = result;
		        if( --pending === 0 ) {
		          resolve(results);
		        }
		      }, function (reason) {
		        if( pending !== -1 ) {
		          pending === -1;
		          reject(reason);
		        }
		      });
		    });
		  });
		};
	}

	if( !Promise.race ) {
		Promise.race = function (iterable) {
		  return new Promise(function (resolve, reject) {
		    var done = false;

		    each(iterable, function (_promise, i) {
		      if( done ) {
		        return;
		      }
		      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
		        if( !done ) {
		          done = true;
		          resolve(result);
		        }
		      }, function (reason) {
		        if( !done ) {
		          done = true;
		          reject(reason);
		        }
		      });
		    });
		  });
		};
	}

	if( !Promise.resolve ) {
		Promise.resolve = function (result) {
		  return new Promise(function (resolve, reject) { resolve(result); });
		};
	}

	if( !Promise.reject ) {
		Promise.reject = function (reason) {
		  return new Promise(function (resolve, reject) { reject(reason); });
		};
	}

	return Promise;
};

},{}],19:[function(require,module,exports){

function stepResult (step, value, type) {
  if( value && value.then ) {
    value.then(function (result) {
      step.deferred.resolve(result);
    }, function (reason) {
      step.deferred.reject(reason);
    });
  } else {
    step.deferred[type](value);
  }
}

function processQueue(promise) {
  if( promise.$$succeeded === undefined ) {
    return;
  }

  var len = promise.$$queue.length,
      step = promise.$$queue.shift(),
      type = promise.$$succeeded ? 'resolve' : 'reject',
      uncough = !promise.$$succeeded && promise.$$uncought++;

  while( step ) {

    if( step[type] ) {
      uncough = false;

      try {
        stepResult(step, step[type](promise.$$value), 'resolve');
      } catch (reason) {
        stepResult(step, reason, 'reject');
      }

    } else {
      stepResult(step, promise.$$value, type);
    }

    step = promise.$$queue.shift();
  }

  if( !promise.$$succeeded && uncough ) {
    // setTimeout(function () {
    if( promise.$$uncough === uncough ) {
      throw new Error('Uncaught (in promise)');
    }
    // }, 0);
  }
}

function Promise (executor) {
  if( !( executor instanceof Function ) ) {
    throw new TypeError('Promise resolver undefined is not a function');
  }

  var p = this;
  this.$$queue = [];
  this.$$uncough = 0;

  try {
    executor(function (result) {
      p.$$succeeded = true;
      p.$$value = result;
      processQueue(p);
    }, function (reason) {
      p.$$succeeded = false;
      p.$$value = reason;
      processQueue(p);
    });
  } catch (err) {
    p.$$succeeded = false;
    p.$$value = err;
    processQueue(p);
  }
}

Promise.prototype.then = function (onsucceeded, onRejected) {
  var _this = this,
      _promise = new Promise(function (resolve, reject) {
        _this.$$queue.push({ resolve: onsucceeded, reject: onRejected, deferred: { resolve: resolve, reject: reject } });
      });

  processQueue(this);

  return _promise;
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

require('./promise-methods')(Promise);

module.exports = Promise;

},{"./promise-methods":18}],20:[function(require,module,exports){
(function (global){

module.exports = require('./qizer')( global.Promise ? require('./promise-methods')(global.Promise) : require('./promise-polyfill') );

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./promise-methods":18,"./promise-polyfill":19,"./qizer":21}],21:[function(require,module,exports){

module.exports = function (Promise) {

  function q (executor) {
    return new Promise(executor);
  }

  ['defer', 'resolve', 'reject', 'all', 'race'].forEach(function (fName) {
    q[fName] = Promise[fName];
  });

  q.when = function (p) { return ( p && p.then ) ? p : Promise.resolve(p); };
  q.usePolyfill = function () {
  	Promise = require('./promise-polyfill');
    ['defer', 'resolve', 'reject', 'all', 'race'].forEach(function (fName) {
      q[fName] = Promise[fName];
    });
  };

  return q;

};

},{"./promise-polyfill":19}],22:[function(require,module,exports){

module.exports = require('./lib/qizer')( require('./lib/promise-polyfill') );

},{"./lib/promise-polyfill":19,"./lib/qizer":21}],23:[function(require,module,exports){

// require('./browser-polyfills/current-script');
require('./browser-polyfills/date');
require('./browser-polyfills/dom-closest');
require('./browser-polyfills/event-listener');
require('./browser-polyfills/match-media');
require('./browser-polyfills/matches-selector');

},{"./browser-polyfills/date":24,"./browser-polyfills/dom-closest":25,"./browser-polyfills/event-listener":26,"./browser-polyfills/match-media":27,"./browser-polyfills/matches-selector":28}],24:[function(require,module,exports){

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
},{}],25:[function(require,module,exports){

if( !Element.prototype.closest ) {
  Element.prototype.closest = function (selector) {
    var el = this;

    while( el ) {
      if( el.matchesSelector(selector) ) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  };
}
},{}],26:[function(require,module,exports){

if( !Element.prototype.addEventListener ) {
  if( Element.prototype.attachEvent ) {
    Element.prototype.addEventListener = function (eventName, listener) {
      return Element.prototype.attachEvent( 'on' + eventName, listener );
    };
    Element.prototype.removeEventListener = function (eventName, listener) {
      return Element.prototype.detachEvent( 'on' + eventName, listener );
    };
  } else {
    throw 'Browser not compatible with element events';
  }
}
},{}],27:[function(require,module,exports){
(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);
},{}],28:[function(require,module,exports){

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}


},{}],29:[function(require,module,exports){

require('./browser-polyfills');
// document.currentScript
// Date.now()
// HTMLElement.closest()
// HTMLElement.addEventListener
// HTMLElement.removeEventListener
// window.matchMedia
// Element.prototype.matchesSelector

require('classlist.js'); // https://developer.mozilla.org/es/docs/Web/API/Element/classList

var extend = require('nitro-tools/extend');

function _ (selector, source) {
  return source && typeof source === 'string' ?
		selector.querySelector(source) :
		(source || document).querySelector(selector);
}

_.noop = function (value) { return value; };

extend.extend(_, extend);

_.extend(_,
  require('nitro-tools/type'),
	require('nitro-tools/key'),
	require('nitro-tools/path')
);

_.extend(_, {
	animate: require('./deferred/animate'),
	wait: require('./deferred/wait')
});

_.extend(_, {
	ready: require('./fn/ready'),
	template: require('./fn/template'),
	debounce: require('./fn/debounce')
});

_.extend(_,
  require('./utils/events'),
	// _.on(el, eventName, handler, useCapture)
	// _.off(el, eventName, handler, useCapture)
	// _.triggerEvent(element, eventName, data)

  require('./utils/dom')
  // _.create(tagName, attrs)
	// _.attr(el, name, value)
  // _.tmpClass(el, className, duration, cb)
);

_.extend(_, {
	normalize: require('./utils/normalize'),
	// _.touchDevice === true | false
	// _.isMac === true | false
	// _.isAndroid === true | false

	scroll: require('./utils/scroll/bundle') // scroll is not available until document is ready
	// _.scroll.on( handler, useCapture )
	// _.scroll.off( handler, useCapture )
	// _.scroll.top()
	// _.scroll.goto(value)
	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
	// _,scroll.inAnimation === true | false
});

module.exports = _;

},{"./browser-polyfills":23,"./deferred/animate":30,"./deferred/wait":31,"./fn/debounce":32,"./fn/ready":33,"./fn/template":34,"./utils/dom":35,"./utils/events":36,"./utils/normalize":37,"./utils/scroll/bundle":40,"classlist.js":9,"nitro-tools/extend":13,"nitro-tools/key":14,"nitro-tools/path":16,"nitro-tools/type":17}],30:[function(require,module,exports){

var $q = require('q-promise/no-native'),
    timingFunctions = {},
    noop = function () {},
    getTimingFunction = function (timingFunctionName) {
      if( !timingFunctions[timingFunctionName] ) {
        if( timingFunctionName === 'linear' ) {
          timingFunctions[timingFunctionName] = function ( value ) { return value; };
        } else if( timingFunctionName === 'ease' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.17,.67,.83,.67);
        } else if( timingFunctionName === 'ease-in' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.42,0,1,1);
        } else if( timingFunctionName === 'ease-out' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(0,0,.58,1);
        } else if( timingFunctionName === 'ease-in-out' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.42,0,.58,1);
        }
      }
      return timingFunctions[timingFunctionName];
    },
    defer = function () {
		  var deferred = {};
		  deferred.promise = $q(function (resolve, reject) {
		    deferred.resolve = resolve;
		    deferred.reject = reject;
		  });
		  return deferred;
		};;

function animate (progressFn, duration, atEnd, timingFunctionName) {
  if ( duration instanceof Function ) {
    if ( typeof atEnd === 'number' ) {
      aux = duration;
      duration = atEnd;
      atEnd = aux;
    } else {
      atEnd = duration;
      duration = 400;
    }
  } else if ( duration === undefined ) {
    duration = 400;
  }

  timingFunctionName = timingFunctionName || ( typeof atEnd === 'string' ? atEnd : ( typeof duration === 'string' ? duration : 'ease' ) );

  progressFn(duration === 0 ? 1 : 0);

  var stopped = false,
      timingFunction = getTimingFunction(timingFunctionName),
      deferred = defer();

  if( duration > 0 ) {
    var start = Date.now(),
        interval = setInterval(function () {
          var elapsed = Date.now() - start;

          if( stopped ) {
            clearInterval(interval);
          } else if( elapsed >= duration ) {
            stopped = true;
            progressFn(1);
            deferred.resolve();
            (atEnd || noop)();
          } else {
            progressFn( timingFunction(elapsed/duration) );
          }
        }, 10);
  }

  deferred.promise.stop = function (reject) {
    stopped = true;
    if( reject ) {
      deferred.reject();
    }
  };

  return deferred.promise;
}

animate.time = function (el) {
  var time = 0;
  var duration = window.getComputedStyle(el).animationDuration;
  if( duration ) {
    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      time += ms ? Number(t) : Number(t)*1000;
    });
  }
  if( window.getComputedStyle(el).animationDelay ) {
    window.getComputedStyle(el).animationDelay.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      time += ms ? Number(t) : Number(t)*1000;
    });
  }
  duration = window.getComputedStyle(el).transitionDuration;
  if( duration ) {
    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      var t = ms ? Number(t) : Number(t)*1000;
      if( t > time ) {
        time = t;
      }
    });
  }
  // console.log('animationTime', el, time);
  return time;
};

module.exports = animate;

},{"bezier-easing":8,"q-promise/no-native":22}],31:[function(require,module,exports){

var $q = require('q-promise/no-native'),
	wait = function (delay, callback) {
		if( delay instanceof Function ) {
			delay = [callback, callback = delay][0];
		}
		if( callback && !(callback instanceof Function) ) {
			throw new Error('callback should be a Function');
		}
		if( typeof delay !== 'number' ) {
			throw new Error('delay should be a Number');
		}
		return $q(function (resolve, reject) {
			setTimeout(function () {
				resolve();
				if( callback ) {
					callback();
				}
			}, delay);
		});
	};

module.exports = wait;

},{"q-promise/no-native":22}],32:[function(require,module,exports){

function debounce (fn, timeslot) {
  var timer = null,
      timeslot = timeslot || 80;

  return function () {
    var _this = this, args = arguments;

    if( timer ) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, timeslot);
  };
}

module.exports = debounce;
},{}],33:[function(require,module,exports){
var readyListeners = [],
    initReady = function () {
      var listeners = readyListeners;
      readyListeners = undefined;
      [].forEach.call(listeners, function (cb) { cb(); });
      document.removeEventListener('DOMContentLoaded', initReady);
      window.removeEventListener('load', initReady);
    };

document.addEventListener('DOMContentLoaded', initReady);
window.addEventListener('load', initReady);

function ready (callback) {
  if( callback instanceof Function ) {
    if( readyListeners ) {
      readyListeners.push(callback);
    } else {
      callback();
    }
  }
}

module.exports = ready;

},{}],34:[function(require,module,exports){

function template (name, data){
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
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

module.exports = template;
},{}],35:[function(require,module,exports){

var _dom = {
  currentScript: document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })(),
  create: function (tagName, attrs) {
    var el = document.createElement(tagName);

    if( attrs ) {
      if( attrs.html ) {
        el.innerHTML = attrs.html;
      }
      for( var attr in attrs ) {
        if( attr !== 'html' ) {
          el[attr] = attrs[attr];
        }
      }
    }
    return el;
  },
  attr: function (el, name, value) {
    if( !(el instanceof Element) && el[0] instanceof Element ) {
      el = el[0];
    }
    if( value !== undefined ) {
      el.setAttribute(name, value);
    }
    return el.getAttribute(name);
  },
  tmpClass: function (el, className, duration, cb) {
    var isCollection = !(el instanceof Element ) && el.length;

    if( isCollection ) {
      [].forEach.call(el, function (_el) {
        _el.classList.add(className);
      });
    } else {
      el.classList.add(className);
    }
    setTimeout(function () {
      if( isCollection ) {
        [].forEach.call(el, function (_el) {
          _el.classList.remove(className);
        });
      } else {
        el.classList.remove(className);
      }
      if( cb instanceof Function ) {
        cb();
      }
    }, duration instanceof Function ? duration() : duration );
  },
  formParams: function (form) {
    if( !(form instanceof Element) && form.length ) {
      form = form[0];
    }

    var data = {};
    [].forEach.call(form.elements, function (el) {
      if( el.name && !el.disabled ) {
        if( el.type === 'radio' ) {
          if( el.checked ) {
            data[el.name] = el.value;
          }
        } else {
          data[el.name] = el.value;
        }
      }
    });
    return data;
  }
};

module.exports = _dom;

},{}],36:[function(require,module,exports){

module.exports = {
  on: function (el, eventName, handler, useCapture) {
    if( typeof el === 'string' ) {
      return document.documentElement.addEventListener(el, eventName, handler);
    }
    return el.addEventListener(eventName, handler, useCapture);
  },
  off: function (el, eventName, handler, useCapture) {
    if( typeof el === 'string' ) {
      return document.documentElement.removeEventListener(el, eventName, handler);
    }
    return el.removeEventListener(eventName, handler, useCapture);
  },
  triggerEvent: document.createEvent ? function (element, eventName, data) {
    var event = document.createEvent("HTMLEvents");
    event.data = data;
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
    return event;
  } : function (element, eventName, data) {
    var event = document.createEventObject();
    event.data = data;
    element.fireEvent("on" + eventName, event);
    return event;
  }
};

},{}],37:[function(require,module,exports){

var normalize = {
  isTouchDevice: 'ontouchstart' in document.documentElement,
  isMac: /^Mac/.test(navigator.platform),
  isAndroid: /^Android/.test(navigator.platform)
};

document.documentElement.classList.add( normalize.isTouchDevice ? 'touch' : 'no-touch' );
if( normalize.isMac ) {
  document.documentElement.classList.add('is-mac');
}
if( normalize.isAndroid ) {
  document.documentElement.classList.add('is-android');
}

module.exports = normalize;

},{}],38:[function(require,module,exports){

function getScrollRoot () {
    if( document.documentElement.scrollTop ) {
      return document.documentElement;
    } else if ( document.body.scrollTop ) {
      return document.body;
    }

    var html = document.documentElement, body = document.body,
        cacheTop = ((typeof window.pageYOffset !== "undefined") ? window.pageYOffset : null) || body.scrollTop || html.scrollTop, // cache the window's current scroll position
        root;

    html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
    // find root by checking which scrollTop has a value larger than the cache.
    root = (html.scrollTop !== cacheTop) ? html : body;

    root.scrollTop = cacheTop; // restore the window's scroll position to cached value

    return root; // return the scrolling root element
}

var ready = require('../fn/ready'),
	scrollRoot = { scrollTop: 0 }
    scroll = {
      root: scrollRoot,
      on: function ( handler, useCapture ) {
        return document.addEventListener('scroll', handler, useCapture);
      },
      off: function ( handler, useCapture ) {
        return document.removeEventListener('scroll', handler, useCapture);
      },
      top: function () {
        return scroll.root.scrollTop;
      },
      goto: function ( value ) {
        scroll.root.scrollTop = value;
      }
    };

ready(function () {
  scrollRoot = getScrollRoot();
  scroll.root = scrollRoot;
});

module.exports = scroll;

},{"../fn/ready":33}],39:[function(require,module,exports){

module.exports = function (scroll) {

	var animate = require('../../deferred/animate'),
		$q = require('q-promise/no-native'),
		noop = function() {},
		scrollAnimation = animate(noop, 0),
		aux;

	scroll.animation = function () {
		return scrollAnimation;
	};

	scroll.animateTo = function (value, cb, duration ) {
		if( value === undefined ) {
		  return $q.reject();
		}
		if( value instanceof Element ) {
		  value = value.offsetTop;
		}

		if( typeof cb === 'number' ) {
		  aux = cb;
		  duration = cb;
		  cb = aux;
		}

		var scrollFrom = scroll.top(),
		    scrollDelta = value - scrollFrom;

		scrollAnimation.stop();
		scroll.inAnimation = true;
		scrollAnimation = animate(function (progress) {
		  scroll.goto( scrollFrom + scrollDelta*progress );
		}, function () {
		  scroll.inAnimation = false;
		  (cb || _.noop)();
		}, duration || 350, 'ease-out');

		return scrollAnimation;
	};

	return scroll;
};

},{"../../deferred/animate":30,"q-promise/no-native":22}],40:[function(require,module,exports){

var scroll = require('../scroll');

require('./top-class')(scroll);
require('./animate')(scroll);

module.exports = scroll;
},{"../scroll":38,"./animate":39,"./top-class":41}],41:[function(require,module,exports){

module.exports = function (scroll) {

	var onScroll = function () {
	      document.documentElement.classList.toggle('scroll-top', !scroll.top() );
	    };

	scroll.on(onScroll);

	require('../../fn/ready')(onScroll);

};

},{"../../fn/ready":33}],42:[function(require,module,exports){
(function (global){

require('./sandbox')(function () {
  'use strict';

  // if( document.documentMode || /Edge\//.test(navigator.userAgent) ) {
  //   require('q-promise/no-native').usePolyfill();
  // }

  var aplazame = require('./core/core');

  aplazame.checkout = require('./apps/checkout');
  aplazame.button = require('./apps/button');
  aplazame.simulator = require('./apps/simulator');
  aplazame.modal = require('./apps/modal');

  global.aplazame = aplazame;

  aplazame.info = function () {
    return {
      api: require('./core/api'),
      log: require('./tools/log').history,
      version: require('../.tmp/aplazame-version')
    };
  };

  aplazame.log = function () {
    require('./tools/log').history.forEach(function (l) {
      console.log(l.time);
      console.log.apply(console, l.args);
    });
  };

  require('./apps/http-service');

  require('./loaders/data-aplazame')(global.aplazame);
  aplazame._.ready(function () {
    var buttonsLookup = require('./loaders/data-button')(global.aplazame),
        widgetsLookup = require('./loaders/data-simulator')(global.aplazame),
        cb = require('./core/api').callback;

    if( cb ) {
      if(  typeof global[cb] !== 'function' ) {
        throw new Error('callback should be a global function');
      }
      global[cb](aplazame);
      buttonsLookup();
      widgetsLookup();
    }

  });

  // global.$q = require('q-promise/no-native');
  // global.$http = require('http-browser');

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../.tmp/aplazame-version":1,"./apps/button":43,"./apps/checkout":44,"./apps/http-service":45,"./apps/modal":47,"./apps/simulator":48,"./core/api":50,"./core/core":51,"./loaders/data-aplazame":53,"./loaders/data-button":54,"./loaders/data-simulator":55,"./sandbox":56,"./tools/log":63}],43:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function getCartPrice () {
  return _.parsePrice( document.querySelector('#total_price').textContent );
}

function button (options) {

  if( !options ) {
    throw new Error('aplazame.button requires parameters');
  }

  if( !options.id && !options.button && !options.selector ){
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
  }

  if( document.querySelector('#total_price') ) {
    options.amount = getCartPrice() || options.amount;

    if( !button.watching ) {
      button.watching = true;
      options.lastPrice = options.amount;

      setInterval(function () {
        var amount = getCartPrice();
        if( amount && amount !== options.lastPrice ) {
          options.amount = amount;
          options.lastPrice = options.amount;
          options.forceUpdate = true;
          button(options);
        }
      }, 400);
    }
  }

  if( !options.amount ){
    throw new Error('button amount missing');
  }

  var elements, elButton;

  if( options.button ) {
    elButton = document.querySelector(options.button);
  } else if( options.id ) {
    elButton = document.querySelector( ( /^#/.test(options.id) ? '' : '#' ) + options.id );
  }

  elements = elButton ? [elButton] : [];

  if( options.selector ) {
    [].push.apply( elements, _.cssQuery(options.selector) );
  }

  if( options.description ) {
    [].push.apply( elements, _.cssQuery(options.description) );
  }

  elButton = elButton || elements[0];

  if( !options.$$running && options.selector ) {
    options.$$running = true;
  }

  if( !options.forceUpdate && ( !elements.length || _.elementData(elButton, 'buttonInitialized') ) ) {
    return;
  }

  options.forceUpdate = false;

  if( elButton && options.parent ) {
    var parent = elButton.parentElement;

    while( parent && parent !== document.body ) {
      if( parent.matchesSelector(options.parent) ) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  elements.forEach(function (el) {
    if( el.style.display !== 'none' ) {
      el.__display = el.style.display;
    }
    el.__input = ( el.nodeName === 'INPUT' || el.nodeName === 'BUTTON' ) ? el : el.querySelector('input, button');

    if( el.__input ) {
      el.__input.__disabled = el.__input.__disabled === undefined ? el.__input.hasAttribute('disabled') : el.__input.__disabled;
      el.__input.__checked = el.__input.__checked === undefined ? el.__input.checked : el.__input.__checked;
      if( el.__input.__checked !== undefined ) {
        el.__input.checked = false;
      }
      if( !el.__input.__disabled ) {
        el.__input.setAttribute('disabled', 'disabled');
      }
    }
    el.style.display = 'none';
  });

  elements.forEach(function (el) {
    _.elementData(el, 'buttonInitialized', true);
  });

  return button.check(options, function (allowed) {
    if( allowed ) {
      var elms = elements.slice();
      elms.forEach(function (el) {
        el.style.display = el.__display;
        if ( el.__input ) {
          if( !el.__input.__disabled && el.__input.hasAttribute('disabled') ) {
            el.__input.removeAttribute('disabled');
          }
          if( el.__input.__checked !== undefined ) {
            el.__input.checked = el.__input.__checked;
          }
        }

      });
    }
  });
}

button.check = function (options, callback) {
  if( _.isString(options) || _.isNumber(options) ) {
    options = { amount: Number(options) };
  }

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if( options.country ) {
    params.country = options.country;
  }

  var checkPromise = apiHttp.get('checkout/button', { params: params });

  if( _.isFunction(callback) ) {
    checkPromise.then(function (response) { callback(response.data.allowed, response); }, function (response) { callback(false, response); });
  }

  return checkPromise;
};

module.exports = button;

},{"../core/api-http":49,"../tools/tools":66}],44:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    http = require('http-browser'),
    $q = require('q-promise/no-native'),
    cssHack = require('../tools/css-hack');

function checkout (options) {

  options = options || {};
  var baseCheckout = ( options.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseCheckout) ) {
    baseCheckout += '/';
  }

  var on = {},
      iframeSrc = baseCheckout + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal');

  if( options.merchant.onSuccess ) {
    on.success = options.merchant.onSuccess;
    delete options.merchant.onSuccess;
  }
  if( options.merchant.onError ) {
    on.error = options.merchant.onError;
    delete options.merchant.onError;
  }
  if( options.merchant.onDismiss ) {
    on.dismiss = options.merchant.onDismiss;
    delete options.merchant.onDismiss;
  }

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);
  cssBlur.hack(true);

  setTimeout(function () {
    if( !errorLoading ) {
      _.addClass(document.body, 'aplazame-blur');
    }
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if( !errorLoading ) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
    }
  }, 200);

  options.api = _.copy(api);

  return http( iframeSrc ).then(function (response) {
      var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseCheckout + '" />'),
          iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          }),
          httpCheckout = function () {
            var started = Date.now();
            return http.apply(this, arguments).then(function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-success',
                started: started,
                elapsed: Date.now() - started,
                response: http.plainResponse(response)
              }, '*');
              return response;
            }, function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-error',
                started: started,
                elapsed: Date.now() - started,
                response: http.plainResponse(response)
              }, '*');
              throw response;
            });
          };

      iframe.className = 'aplazame-modal';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      if( !options.merchant ) {
        throw new Error('missing merchant parameters');
      }

      if( 'sandbox' in options.merchant ) {
        api.sandbox = options.merchant.sandbox;
      }

      if( !options.merchant.public_api_key ) {
        if( api.publicKey ) {
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

      var onMessage = function (e, message) {

        switch( message.event ) {
          case 'merchant':
            iframe.style.display = null;
            e.source.postMessage({
              checkout: options
            }, '*');
            break;
          case 'show-iframe':
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            break;
          case 'loading-text':
            loadingText.textContent = message.text;
            break;
          case 'drop-blur':
            _.removeClass(document.body, 'aplazame-blur');
            _.addClass(document.body, 'aplazame-unblur');
            setTimeout(function () {
              cssBlur.hack(false);
              _.removeClass(document.body, 'aplazame-blur');
              _.removeClass(document.body, 'aplazame-unblur');
            }, 600);
            break;
          case 'confirm':
          case 'success':
            _.log('aplazame.checkout:confirm', message);

            httpCheckout( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: _.extend(message.params || {}, {
                order_id: message.data.checkout_token,
                checkout_token: message.data.checkout_token
              })
            }).then(function (response) {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'success',
                response: http.plainResponse(response)
              }, '*');
            }, function () {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'error',
                response: http.plainResponse(response)
              }, '*');
            });
            // confirmation_url
            break;
          case 'close':
            if( iframe ) {
              document.body.removeChild(iframe);
              cssModal.hack(false);
              iframe = null;

              _.onMessage.off('checkout', onMessage);

              switch( message.result ) {
                case 'success':
                  if( typeof on.success === 'function' ) {
                    on.success();
                  } else if( !options.merchant.success_url ) {
                    throw new Error('success_url missing');
                  } else {
                    location.replace(options.merchant.success_url);
                  }
                  break;
                case 'cancel':
                  if( typeof on.error === 'function' ) {
                    on.error();
                  } else if( !options.merchant.cancel_url ) {
                    throw new Error('cancel_url missing');
                  } else {
                    location.replace(options.merchant.cancel_url);
                  }
                  break;
                case 'dismiss':
                  if( typeof on.dismiss === 'function' ) {
                    on.dismiss();
                  } else {
                    location.replace(options.merchant.checkout_url || '/');
                  }
                  break;
              }
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);

    }).catch(function (reason) {
      // throw new Error('can not connect to ' + baseCheckout);
      errorLoading = true;

      console.error('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      (options.onError || _.noop)(reason);
    });

}

module.exports = checkout;

},{"../core/api":50,"../tools/css-hack":60,"../tools/tools":66,"./loading-svg":46,"http-browser":11,"q-promise/no-native":22}],45:[function(require,module,exports){
'use strict';

var _ = require('../tools/tools'),
    http = require('http-browser');

function processResponse(result, message, messageSrc, started) {

  return function (response) {

    var responsep = http.plainResponse(response);
    responsep.config = message;

    messageSrc.postMessage({
      aplazame: 'http',
      event: 'response',
      started: started,
      elapsed: Date.now() - started,
      result: result,
      response: responsep
    }, '*');
  };
}

_.onMessage('http', function (e, message) {

  var started = Date.now();

  http( message.url, message )
    .then(
      processResponse('success', message, e.source, started),
      processResponse('error', message, e.source, started)
    );

});

module.exports = { ready: true };

},{"../tools/tools":66,"http-browser":11}],46:[function(require,module,exports){

module.exports = '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' +
'<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' +
'</svg>' +
'<svg class="smile" version="1.1" viewBox="0 0 100 100">' +
'<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' +
'<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'</g>' +
'</svg>' +
'<svg class="line-large" version="1.1" viewBox="0 0 100 100">' +
'<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' +
'</svg>';

},{}],47:[function(require,module,exports){
'use strict';

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var api = require('../core/api'),
    _ = require('../tools/tools'),
    cssHack = require('../tools/css-hack'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    isMobile = window.matchMedia('( max-width: 767px )'),
    lastScrollTop;

var tmpOverlay = document.createElement('div'),
    cssOverlay = cssHack('overlay'),
    cssBlur = cssHack('blur'),
    cssModal = cssHack('modal');

function modal (content, options) {

  if( modal.iframe ) {
    document.body.removeChild(modal.iframe);
  }

  options = options || {};

  cssOverlay.hack(true);
  cssBlur.hack(true);
  cssModal.hack(true);

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
  document.body.appendChild(tmpOverlay);

  setTimeout(function () {
    _.addClass(document.body, 'aplazame-blur');
  }, 0);
  setTimeout(function () {
    _.removeClass(tmpOverlay, 'aplazame-overlay-show');
  }, isMobile.matches ? 0 : 600 );

  modal.iframe = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent'
      });

  modal.iframe.className = 'aplazame-modal';
  // modal.iframe.style.display = 'none';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.staticUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opening':
      modal.iframe.style.display = null;
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
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
      _.removeClass(document.body, 'aplazame-blur');
      _.addClass(document.body, 'aplazame-unblur');
      _.addClass(tmpOverlay, 'aplazame-overlay-hide');
      setTimeout(function () {
        cssBlur.hack(false);
        _.removeClass(document.body, 'aplazame-unblur');
      }, isMobile.matches ? 0 : 600 );
      break;
    case 'close':
      setTimeout(function () {
        cssModal.hack(false);
      }, isMobile.matches ? 0 : 100 );
      document.body.removeChild(tmpOverlay);
      _.removeClass(tmpOverlay, 'aplazame-overlay-hide');
      _.scrollTop(lastScrollTop);
      if( modal.iframe ) {
        document.body.removeChild(modal.iframe);

        if( modal.referrer ) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if( modal.message ) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }

});

module.exports = modal;

},{"../../.tmp/aplazame-version":1,"../core/api":50,"../tools/css-hack":60,"../tools/tools":66}],48:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('q-promise/no-native'),
    cache = [],
    requestsCache = {};

function simulator (amount, _options, callback, onError) {

  if( _.isFunction(_options) ) {
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
      },
      hash = amount + ',' + JSON.stringify(options);

  if( requestsCache[hash] ) {
    return requestsCache[hash].then(function (result) {
      (callback || _.noop)( result.choices, result.options );
    });
  }

  if( _options.view ) {
    options.params.view = _options.view;
  }
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  requestsCache[hash] = ( !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options ).then(function (response) {
      var result = {
        amount: amount,
        choices: response.data.choices[0].instalments,
        options: response.data.options,
        response: response
      };
      cache.push(result);

      return result;
    }) )
    .then(function (result) {
      (callback || _.noop)( result.choices, result.options );
      return result;
    }, function (response) {
      if( response.status === 403 ) {
        console.error('Aplazame: Permiso denegado usando la clave pública: ' + response.config.publicKey);
        console.info('Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.fields.amount.0') ) {
        console.error('Aplazame: ' + response.data.error.fields.amount[0]);
      } else if( _.key(response, 'data.error.message') ) {
        console.error('Aplazame: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });

  return requestsCache[hash];
}

module.exports = simulator;

},{"../core/api-http":49,"../tools/tools":66,"q-promise/no-native":22}],49:[function(require,module,exports){
'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json'),
    acceptHeader = function (config) {
      var _api = _.copy(api);
      if( 'version' in config || 'apiVersion' in config ) {
        _api.version = 'version' in config ? config.version : config.apiVersion;
      }
      if( 'sandbox' in config ) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorizationHeader = function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    };

var apiHttp = {};

_.each(['get', 'delete'], function (method) {
  apiHttp[method] = function (path, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

_.each(['post', 'put', 'patch'], function (method) {
  apiHttp[method] = function (path, data, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, data, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

module.exports = apiHttp;

},{"../../.tmp/aplazame-version":1,"../tools/tools":66,"./api":50,"http-browser":11}],50:[function(require,module,exports){
'use strict';

module.exports = {
  host: 'https://api.aplazame.com/',
  // host: 'https://api.aplazame.com/',
  staticUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],51:[function(require,module,exports){
'use strict';

module.exports = {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  apiDelete: require('./api-http')['delete'],
  apiPut: require('./api-http').put,
  version: require('../../.tmp/aplazame-version')
};

},{"../../.tmp/aplazame-version":1,"../tools/tools":66,"./api-http":49,"./init":52}],52:[function(require,module,exports){
'use strict';

var api = require('./api'),
    _ = require('../tools/tools');

function init (options) {
  options = options || {};

  if( typeof options.version === 'string' ) {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  if( typeof options.analytics === 'string' ) {
    options.analytics = options.analytics === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', api);
}

module.exports = init;

},{"../tools/tools":66,"./api":50}],53:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      script = _.currentScript,
      dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/\?/.test(script.src) ? _.deserialize(script.src.match(/(.*?)\?(.*)/)[2]) : {}) || {};

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  if( dataAplazame ) {

    if( /\:/.test(dataAplazame) ) {
      dataAplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });

      if( !options.publicKey ) {
        throw new Error('publicKey missing in data-aplazame');
      }
    } else {
      options.publicKey = dataAplazame;
    }

    if( script.getAttribute('data-api-host') ) {
      options.host = script.getAttribute('data-api-host');
    }

    if( script.getAttribute('data-version') ) {
      options.version = script.getAttribute('data-version');
    }

    if( script.getAttribute('data-sandbox') ) {
      options.sandbox = script.getAttribute('data-sandbox');
    }

    if( script.getAttribute('data-analytics') ) {
      options.analytics = script.getAttribute('data-analytics');
    }

    if( script.getAttribute('data-static-url') ) {
      options.staticUrl = script.getAttribute('data-static-url');
    }

    if( script.getAttribute('data-callback') ) {
      // if( typeof global[script.getAttribute('data-callback')] !== 'function' ) {
      //   throw new Error('callback should be a global function');
      // }

      options.callback = script.getAttribute('data-callback');
      // _.ready(function () {
      //   global[script.getAttribute('data-callback')](aplazame);
      // });
    }
  }

  aplazame.init(options);

};

},{}],54:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._,
      $q = require('q-promise/no-native');

  function buttonsLookup (element) {
    element = element || document;
    if( !element.querySelectorAll ) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if( btns.length ) {
      // console.log('.btn(s)', btns);
      var promises = [];

      _.each(btns, function (btn) {
        // console.log('.btn', arguments, btns);
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
              selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
              parent: btn.getAttribute('data-parent'),
              publicKey: btn.getAttribute('data-public-key'),
              amount: btn.getAttribute('data-amount'),
              currency: btn.getAttribute('data-currency') || undefined,
              sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
              country: btn.getAttribute('data-country') || undefined
            };

        promises.push( aplazame.button(btnParams) );
      });

      if( promises.length ) {
        return $q.all(promises);
      } else {
        return $q.resolve();
      }
    } else {
      return $q.resolve();
    }
  }

  _.ready(function () {
    buttonsLookup().then(function () {
      _.liveDOM.subscribe(buttonsLookup);
    });
  });

  return buttonsLookup;

};

},{"q-promise/no-native":22}],55:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $q = require('q-promise/no-native'),
      Events = require('events-wrapper'),
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )'),
      each = Array.prototype.forEach;

  function getQty (qtySelector) {
    if( !_.isString(qtySelector) ) {
      console.warn('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch(err) {
      console.warn(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return Number( qtyElement.value );
      case 'select':
        return Number( qtyElement.querySelector('option[selected]').value );
      default:
        return Number( qtyElement.textContent.trim() );
    }
  }

  var cmsPriceSelector = [
    'form#product_addtocart_form .special-price .price', // magento
    'form#product_addtocart_form .regular-price .price', // magento
    '#product-info .special-price .price', // magento
    '#product-info .regular-price .price', // magento
    'form#buy_block #our_price_display', // prestashop
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount' // woocommerce
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    'form#product-options-form button[data-id=qty]', // custom
    '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
  ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty'),
        autoDiscovered = false;

    if( priceSelector ) {
      // try{
      //   document.querySelector(priceSelector);
      // } catch(err) {
      //   priceSelector = null;
      //   console.warn(err.message);
      // }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          console.warn(err.message);
        }
      }
    } else {
      priceSelector = _.find(cmsPriceSelector, matchSelector);

      if( priceSelector ) {
        qtySelector = _.find(cmsQtySelector, matchSelector);
        autoDiscovered = true;

        _.log('auto-discovered price selector', priceSelector, qtySelector);
      }
    }

    var getter = priceSelector ? function () {
      var qty = qtySelector ? getQty( qtySelector ) : 1, priceElement;
      try {
        priceElement = document.querySelector( priceSelector );
      } catch(err) {}

      var amount = priceElement ? priceElement.value : '0';

      if( typeof amount === 'undefined' ) {
        if( !/\d+[,.]\d+/.test(priceElement.textContent) && priceElement.children && priceElement.children.length ) {
          amount = '';

          var part = priceElement.firstChild, matched;

          while( part ) {
            if( /[,.]/.test(amount) ) {
              return;
            }
            matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).match(/[\d,.]+/);

            if( matched ) {
              amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
            }

            part = part.nextSibling;
          }
        } else {
          amount = priceElement.textContent;
        }
      }

      return _.parsePrice( amount );
    } : function () {
      // return Number( widgetElement.getAttribute('data-amount') );
      return;
    };

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;
    getter.autoDiscovered = autoDiscovered;

    return getter;
  }

  function Iframe (url) {
    var el = _.getIFrame({ width: '100%', height: '40px' }),
        iframe = this;
    this.el = el;
    this.el.src = url;

    new Events (this);

    this.onload = function () {
      this.trigger('load', null, this);
    };

    _.onMessage('simulator', function (e, message) {
      // console.log('message.simulator', e, message);
      if( e.source === el.contentWindow ) {
        iframe.trigger('message:' + message.event, [message], this);
      }
    });

    this.on('message:resize', function (e, message) {
      el.style.height = message.height + 'px';
    });
  }

  Iframe.prototype.message = function (eventName, data) {
    var _data = _.extend({
      aplazame: 'simulator',
      event: eventName,
      mobile: isMobile.matches
    }, data || {});
    if( this.el.contentWindow ) {
      // console.log('iframe message', eventName, _data, this);
      this.el.contentWindow.postMessage(_data, '*');
    } else {
      console.warn('iframe contentWindow missing', this);
    }
  };

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function getWidget (meta) {
    if( !meta.options.widget ) {
      return;
    }

    getWidget.serial = getWidget.serial ? getWidget.serial + 1 : 1;

    var widget,
        id = getWidget.serial;

    if( meta.options.widget.type === 'button' ) {
      widget = new Iframe( api.staticUrl + 'widgets/simulator/simulator.html?' + Date.now() + '&simulator=' + id );

      widget.on('message:require.choices choices.update', function (e, message) {
        if( message && message.simulatorId && message.simulatorId !== id ) {
          return;
        }
        // console.log(e, meta, message);
        widget.message('choices', {
          amount: meta.amount,
          choice: meta.choices.reduce(maxInstalments, null),
          choices: meta.choices,
          options: meta.options
        });
      });

      widget.on('choices.updating', function (e) {
        widget.message('loading');
      });

    } else {
      _.template.put('widget-raw', require('../../.tmp/simulator/templates/widget-raw') );
      widget = { el: document.createElement('div') };
      new Events(widget);

      widget.el.innerHTML = _.template('widget-raw', {
        getAmount: _.getAmount,
        amount: meta.amount,
        choice: meta.choices.reduce(maxInstalments, null),
        choices: meta.choices,
        options: meta.options
      });

      widget.el.addEventListener('click', function () {
        window.postMessage({
          aplazame: 'modal',
          event: 'open',
          name: 'instalments',
          data: {
            card: _.template.compile( require('../../.tmp/simulator/templates/modal-instalments') )({
              selectedChoice: meta.choices.reduce(maxInstalments, null),
              choices: meta.choices,
              getAmount: _.getAmount,
              months: function (m) {
                return m > 1 ? 'meses' : 'mes';
              }
            })
          }
        }, '*');

      });
    }

    widget.id = id;

    return widget;
  }

  function placeWidget (widget, widgetWrapper, selector) {
    if( !selector ) {
      widgetWrapper.appendChild(widget.el);
      return;
    }

    var pseudoLocator;
    selector = selector.trim().replace(/:(\w+?)$/, function (matched, locator) {
      pseudoLocator = locator;
      return '';
    });

    var el = document.querySelector(selector);
    if( el ) {
      if( pseudoLocator ) {
        switch( pseudoLocator ) {
          case 'after':
            if( el.nextElementSibling ) {
              el.parentElement.insertBefore(widget.el, el.nextElementSibling);
            } else {
              el.parentElement.appendChild(widget.el);
            }
            break;
          case 'before':
            el.parentElement.insertBefore(widget.el, el);
            break;
          default:
            throw new Error('pseudoLocator ' + pseudoLocator + ' not defined');
        }
      } else {
        el.appendChild(widget.el);
      }
    }
  }

  function evalWidget (widgetWrapper) {
    var meta, updateData = false, detectedAmount, simulatorOptions = {};

    if( widgetWrapper.__apz_widget__ ) {
      meta = widgetWrapper.__apz_widget__;

      detectedAmount = meta.getAmount();
      if( detectedAmount && meta.amount !== detectedAmount ) {
        updateData = true;
        // console.log(widgetWrapper, meta.amount, meta.getAmount() );
        meta.amount = meta.getAmount();
      }
    } else {
      meta = { getAmount: amountGetter(widgetWrapper) };
      meta.amount = widgetWrapper.getAttribute('data-amount') ? Number(widgetWrapper.getAttribute('data-amount')) : meta.getAmount();
      updateData = true;
      if( meta.getAmount.qtySelector ) {
        meta.qty = getQty(meta.getAmount.qtySelector) || 1;
        // console.debug('new watcher');
        meta.watchQty = setInterval(function () {
          if( !document.body.contains(widgetWrapper) ) {
            clearInterval(meta.watchQty);
            return;
          }
          var qty = getQty(meta.getAmount.qtySelector);
          if( qty !== meta.qty ) {
            meta.qty = qty;
            evalWidget(widgetWrapper);
          }
        }, 250);
      }
    }

    if( widgetWrapper.getAttribute('data-view') ) {
      simulatorOptions.view = widgetWrapper.getAttribute('data-view');
    }

    if( meta.amount && meta.getAmount.qtySelector ) {
      meta.amount *= ( getQty(meta.getAmount.qtySelector) || 1 );
    }
    if( meta.amount && updateData ) {
      if( meta.widget && meta.widget.message ) {
        meta.widget.message('loading');
      }
      aplazame.simulator( meta.amount, simulatorOptions, function (_choices, _options) {
        _options.widget = _options.widget || {};
        meta.choices = _choices;
        meta.options = _options;
        meta.widget = meta.widget || getWidget(meta);

        if( meta.widget && !document.body.contains(meta.widget.el) ) {
          placeWidget(meta.widget, widgetWrapper, widgetWrapper.getAttribute('data-location') || _options.widget.location );
        }

        meta.widget.trigger('choices.update');
      }, function () {
        if( meta.widget && meta.widget.message ) {
          meta.widget.message('abort');
        }
        if( meta.widget && document.body.contains(meta.widget.el) ) {
          var parent = meta.widget.el.parentElement;
          parent.removeChild(meta.widget.el);
        }
      });
    }

    widgetWrapper.__apz_widget__ = meta;
  }

  function widgetsLookup (element) {
    var promises = [];

    each.call(document.querySelectorAll('[data-aplazame-simulator]'), evalWidget );

    return promises.length ? $q.all(promises) : $q.resolve();
  }

  widgetsLookup().then(function () {
    _.liveDOM.subscribe(widgetsLookup);
  });

  return widgetsLookup;

};

},{"../../.tmp/simulator/templates/modal-instalments":6,"../../.tmp/simulator/templates/widget-raw":7,"../core/api":50,"events-wrapper":10,"q-promise/no-native":22}],56:[function(require,module,exports){
'use strict';

function _errorData(err) {
  (console.info || console.log)('%c[non blocking error] %caplazame.js\n\n', 'font-weight: bold; color: #267BBD;', 'color: #267BBD;');

  var filename = err.fileName ? err.fileName.lastIndexOf('/') : '<not defined>';
  var stamp = new Date();
  var str = '%cname: %c' + err.name +
          '\n%cError: %c' + err.message +
          '\n%cFile: %c' + filename;

  console.log(str, 'font-weight: bold;', 'color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal; color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal;');
  if( err.stack ) {
    console.log('%c' + err.stack, 'background-color: #ffffee; line-height: 2;');
  }
}

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    _errorData(err);
  }
};

},{}],57:[function(require,module,exports){

function thousands(amount) {
  if( /\d{3}\d+/.test(amount) ) {
    return thousands(amount.replace(/(\d{3}?)(\.|$)/, '.$&'));
  }
  return amount;
}

function getAmount (amount) {
  var prefix = '';

  if( amount < 0 ) {
    prefix = '-';
    amount = 0 - amount;
  }

  if( !amount ) {
    return '0,00';
  } else if( amount < 10 ) {
    return '0,0' + amount;
  } else if( amount < 100 ) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (matched, main, tail) {
    return thousands(main) + ',' + tail;
  });
}

function parsePrice (price) {
  var matched = price.match(/((\d+[,. ])*)(\d+)/),
      amount, main, tail;

  if( matched ) {
    tail = matched[3];
    main = matched[1].replace(/[^\d]/g, '');

    if( !main ) {
      return Number( tail + '00' );
    }

    if( tail.length === 1 ) {
      return Number(main + tail + '0');
    }

    if( tail.length !== 2 ) {
      tail += '00';
    }

    return Number(main + tail);
  }

  if( /\d+/.test(price) ) {
    return Number( price.replace(/[^\d]+/g, '') + '00' );
  }

  console.warn('price data mismatch', price);
}

module.exports = {
	getAmount: getAmount,
	parsePrice: parsePrice
};

},{}],58:[function(require,module,exports){

function _ready (_callback, delay) {
  var callback = delay ? function () { setTimeout(_callback, delay); } : _callback;

  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

function findBubbleClose (str) {
  var level = 0;

  for( var i = 0, len = str.length; i < len ; i++ ) {
    if( str[i] === '(' ) {
      level++;
    } else if( str[i] === ')' ) {
      if( level === 0 ) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector (selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if( closePosition === -1 ) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if( partialQuery ) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery) );
      });

      return submatches;
    }

    return matches;

  }, [].slice.call( (rootElement || document).querySelectorAll( splitHas.shift() ) ) );
}

function querySelector (selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if( !selector ) {
    return [];
  }

  if( !/\:has\(/.test(selector) ) {
    return [].slice.call( (rootElement || document).querySelectorAll( selector ) );
  }

  return hasSelector(selector);
}

function cssQuery (_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat( querySelector(selector, rootElement) );
  }, []);
}

function scrollTop (value) {
  if( value !== undefined ) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function clearElement (el) {
  var child = el.firstChild;

  while( child ) {
    el.removeChild(child);
    child = el.firstChild;
  }
}

// var _classActions = {
//   add: document.documentElement.classList ? function (element, className) {
//     element.classList.add(className);
//   } : function (element, className) {
//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
//     _classActions.remove(element, className);
//     element.className += ' ' + className;
//   },
//   remove: document.documentElement.classList ? function (element, className) {
//     element.classList.remove(className);
//   } : function (element, className) {
//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
//     element.className = element.className.replace(RE_CLEANCLASS,'');
//   },
//   action: function (action, tools) {
//     return function (element, className) {
//       if( className.indexOf(' ') >= 0 ) {
//         className.split(' ').forEach(function (cn) {
//           _classActions[action](element, cn);
//         });
//       } else {
//         _classActions[action](element, className);
//       }
//       return tools;
//     };
//   }
// };

function writeIframe (iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  try { iframeDoc.charset = 'UTF-8'; } catch(err) {}
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function getIFrame (iframeStyles) {
  var iframe = document.createElement('iframe');
  require('nitro-tools/extend').extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  // iframe.style.display = 'none';
  iframe.onload = function () {
    iframe.style.display = null;
  };
  return iframe;
}

var _ = {
  ready: _ready,
  getIFrame: getIFrame,
  writeIframe: writeIframe,
  cssQuery: cssQuery,
  scrollTop: scrollTop,
  clearElement: clearElement,
  elementData: document.createElement('div').dataset ? function (el, key, value) {
    if( value !== undefined ) {
      el.dataset[key] = value;
    }
    return el.dataset[key];
  } : function (el, key, value) {
    if( value !== undefined ) {
      el.setAttribute('data-' + key, value);
    }
    return el.getAttribute('data-' + key);
  },
};

// var addClass = _classActions.action('add', _ ),
//     removeClass = _classActions.action('remove', _ );

// _.addClass = addClass;
// _.removeClass = removeClass;

_.addClass = function (element, className) {
  element.classList.add(className);
};

_.removeClass = function (element, className) {
  element.classList.remove(className);
};

module.exports = _;

},{"nitro-tools/extend":13}],59:[function(require,module,exports){


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function brightness (color) {
  var rgb = hexToRgb(color);
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
  return o < 100 ? 'dark' : ( o > 230 ? 'light' : 'medium' );
}

module.exports = {
  hexToRgb: hexToRgb,
  brightness: brightness
};

},{}],60:[function(require,module,exports){


var importantCSS = function (css) {
      return css.replace(/;/g, ' !important;').replace(/:([^:;]+?)}/g, function (matched, value) {
        return ':' + value + ' !important;}';
      }).replace(/(\d+%|from|to){([^}]+)/g, function (matched, pos, content) {
        return pos + '{' + content.replace(/ !important;/g, ';');
      });
    },
    cssHack = (function () {
      var cache = {},
          hacks = {
            overlay: importantCSS(require('../../.tmp/css-hacks/overlay')),
            blur: importantCSS(require('../../.tmp/css-hacks/blur')),
            logo: importantCSS(require('../../.tmp/css-hacks/logo')),
            modal: importantCSS(require('../../.tmp/css-hacks/modal'))
          };

      // console.log('cssHacks', hacks);

      return function hack (hackName) {
        if( !cache[hackName] ) {
          var style = document.createElement('style');
          style.setAttribute('rel', 'stylesheet');
          style.setAttribute('type', 'text/css');
          style.textContent = hacks[hackName];

          var enabled = false;

          style.hack = function (enable) {
            enable = enable === undefined || enable;

            if( enable ) {
              if( enabled ) { return; }
              enabled = true;
              document.head.appendChild(style);
            } else {
              if( !enabled ) { return; }
              enabled = false;
              document.head.removeChild(style);
            }
          };

          cache[hackName] = style;
        }
        return cache[hackName];
      };
    })();

module.exports = cssHack;

},{"../../.tmp/css-hacks/blur":2,"../../.tmp/css-hacks/logo":3,"../../.tmp/css-hacks/modal":4,"../../.tmp/css-hacks/overlay":5}],61:[function(require,module,exports){


function _key (o, key, value) {
	key.split('.').forEach(function (k, i, keys) {
		if( i === keys.length - 1 ) {
			o[k] = value;
		} else {
			o[k] = o[k] || {};
			o = o[k];
		}
	});
}

function camelCase (text) {
	return text.replace(/_(\w)/g, function (matched, letter) {
		return letter.toUpperCase();
	});
}

function deserialize (querystring, decode) {

	var result = {};

	querystring.split('&').forEach(function (keyValue) {
		var matched = keyValue.match(/(.*?)=(.*)/);

		if( !matched ) {
			throw new Error('could not parse ' + keyValue);
		}

		_key(result, camelCase(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

	});

	return result;

}

module.exports = deserialize;

},{}],62:[function(require,module,exports){
'use strict';

var suscriptors = [],
    running = false;

function initLiveDOM () {

  require('./browser-tools').ready(function () {
    document.body.addEventListener('DOMSubtreeModified', function(event){
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](event.target);
      }
    }, false);
  });

}

module.exports = {
  subscribe: function (handler) {
    if( !running ) {
      initLiveDOM(true);
      running = true;
    }
    if( handler instanceof Function ) {
      suscriptors.push(handler);
    }
  }
};

},{"./browser-tools":58}],63:[function(require,module,exports){


function getErrorObject(){
    try { throw Error(''); } catch(err) { return err; }
}

function log () {
  var err = getErrorObject(),
      caller_line = err.stack.split('\n')[4] || '',
      index = caller_line.indexOf('at ');

  log.history.push({
    time: new Date(),
    args: arguments,
    track: {
      caller_line: caller_line,
      index: index,
      clean: caller_line.slice(index + 2, caller_line.length)
    }
  });

  // console.log.apply(console, arguments);
}

log.history = [];

module.exports = log;

},{}],64:[function(require,module,exports){

var messageTarget = {},
    showLogs = false;

window.addEventListener('message', function (e) {
  var message = e.data,
      listeners = messageTarget[message.aplazame];

  if( !listeners ) {
    return;
  }

  if( showLogs && !e.used ) {
    console.log('message', e, listeners);
  }

  if( !e.used ) {
    e.used = true;
    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
      listeners[i](e, message);
    }
  }
}, true);

function onMessage (target, handler, logs) {
  showLogs = logs;
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    messageTarget[target].push(handler);
  }
}

onMessage.off = function (target, handler) {
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    var i = messageTarget[target].indexOf(handler);
    if( i !== -1 ) {
      messageTarget[target].splice(i,1);
    }
  }
};

module.exports = onMessage;

},{}],65:[function(require,module,exports){

function template (name, data){
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
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

module.exports = template;

},{}],66:[function(require,module,exports){

var _ = require('vanilla-tools');

_.extend(_,
  require('nitro-tools/lists'),
  require('nitro-tools/path'),
  require('./colors'),
  require('./browser-tools'),
  require('./amount-price'),
  {
    liveDOM: require('./live-dom'),
    template: require('./template'),
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

_.log = require('./log');
_.noop = function (value) { return value; };

module.exports = _;

},{"./amount-price":57,"./browser-tools":58,"./colors":59,"./deserialize":61,"./live-dom":62,"./log":63,"./message-listener":64,"./template":65,"nitro-tools/lists":15,"nitro-tools/path":16,"vanilla-tools":29}]},{},[42])
undefined
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9ICcwLjAuMzUzJzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtYmx1cnswJXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApO310b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19QGtleWZyYW1lcyBhcGxhemFtZS1ibHVyezAley13ZWJraXQtZmlsdGVyOmJsdXIoMCk7ZmlsdGVyOmJsdXIoMCl9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fWJvZHkuYXBsYXphbWUtYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS1ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40czthbmltYXRpb24tZHVyYXRpb246LjRzOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cjthbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyfX1ib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApfUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXtib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNHM7YW5pbWF0aW9uLWR1cmF0aW9uOi40czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cjstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZTthbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2V9fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tbGFyZ2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1sYXJnZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1ALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zaG9ydHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNob3J0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1ALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zbWlsZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc21pbGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX19LmxvZ28tYXBsYXphbWV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjE1MHB4fS5sb2dvLWFwbGF6YW1lIC5saW5lLWxhcmdlLC5sb2dvLWFwbGF6YW1lIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lIC5zbWlsZXtzdHJva2U6I2RkZH0ubG9nby1hcGxhemFtZSAuc21pbGUtb3V0bGluZXtzdHJva2U6IzQ4NTI1OX1AbWVkaWEgKG1pbi13aWR0aDo0ODBweCl7LmxvZ28tYXBsYXphbWV7d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4fX0ubG9nby1hcGxhemFtZSBzdmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLnNtaWxley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS41czthbmltYXRpb24tZHVyYXRpb246MS41czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc21pbGU7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zbWlsZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLWxhcmdley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1sYXJnZTthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLWxhcmdlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtc2hvcnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNob3J0O2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc2hvcnR9JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICcuYXBsYXphbWUtbW9kYWx7aGVpZ2h0OjEwMCU7aGVpZ2h0OjEwMHZoO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjE0NzQ4MzY0Nzt9Ym9keXtvdmVyZmxvdzpoaWRkZW59QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe2h0bWx7YmFja2dyb3VuZC1jb2xvcjojMzMzYTNlfWJvZHksaHRtbHtoZWlnaHQ6MTAwdmg7bWFyZ2luOjA7cGFkZGluZzowfWJvZHk+Om5vdCguYXBsYXphbWUtbW9kYWwpe2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpey5hcGxhemFtZS1tb2RhbHtwb3NpdGlvbjpmaXhlZH19JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtb3ZlcmxheXswJXtvcGFjaXR5OjA7fXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBhcGxhemFtZS1vdmVybGF5ezAle29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fS5hcGxhemFtZS1vdmVybGF5e2ZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kOnJnYmEoNTMsNjQsNzEsLjkpO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MjE0NzQ4MzY0Njstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5hcGxhemFtZS1vdmVybGF5OmJlZm9yZXtjb250ZW50OlxcJ1xcJztkaXNwbGF5OmJsb2NrO2hlaWdodDo1MHZofS5hcGxhemFtZS1sb2dvLXdyYXBwZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDotNTAlfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dHtjb2xvcjojOTVhNmIxO21hcmdpbi10b3A6MTRweDtmb250LXNpemU6MTRweH0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgLnRleHQtZXJyb3J7Y29sb3I6I2YwODA4MH0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgYXtjb2xvcjojZjVmNWY1O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCBhOmhvdmVye2JvcmRlci1ib3R0b206MXB4IGRvdHRlZCAjZjVmNWY1fS5hcGxhemFtZS1vdmVybGF5ey13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzfS5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktaGlkZSwuYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LXNob3d7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNnM7YW5pbWF0aW9uLWR1cmF0aW9uOi42czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLW92ZXJsYXk7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtb3ZlcmxheX0uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGV7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPiAgPGhlYWRlciBjbGFzcz1cImFwbGF6YW1lXCI+PC9oZWFkZXI+ICA8c2VjdGlvbiBjbGFzcz1cImluZm9cIj4gICAgRWxpZ2UgZWwgbsO6bWVybyBkZSBtZXNlcyB5IGxhIGN1b3RhIHF1ZSBtw6FzIHRlIGNvbnZlbmdhbiAgPC9zZWN0aW9uPiAgPGRpdiBjbGFzcz1cImNob2ljZXMtd3JhcHBlclwiPiAgICA8JSBmb3IoIHZhciBpID0gY2hvaWNlcy5sZW5ndGggLSAxIDsgaSA+PSAwIDsgaS0tICkgeyAlPiAgICA8YnV0dG9uIG5nLXJlcGVhdD1cImNob2ljZSBpbiBjaG9pY2VzXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2hvaWNlXCIgbmctY2xpY2s9XCJzZWxlY3RDaG9pY2UoY2hvaWNlKVwiIG5nLWNsYXNzPVwieyBhY3RpdmU6IGNob2ljZSA9PT0gY3VycmVudENob2ljZSB9XCI+ICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJudW0taW5zdGFsbWVudHNcIj4gICAgICAgICAgPHNwYW4+PCU9IGNob2ljZXNbaV0ubnVtX2luc3RhbG1lbnRzICU+PC9zcGFuPiZuYnNwOzxzcGFuPjwlPSBtb250aHMoY2hvaWNlc1tpXS5udW1faW5zdGFsbWVudHMpICU+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwiYW1vdW50XCI+ICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW1vdW50LWFtb3VudFwiPjwlPSBnZXRBbW91bnQoY2hvaWNlc1tpXS5hbW91bnQpICU+PC9zcGFuPjwhLS0gICAgICAgICAgLS0+PHNwYW4gY2xhc3M9XCJhbW91bnQtY3VycmVuY3lcIj7igqw8L3NwYW4+PCEtLSAgICAgICAgICAtLT48c3BhbiBjbGFzcz1cImFtb3VudC1wZXItbW9udGhcIj4vbWVzPC9zcGFuPjwvZGl2PiAgICAgIDwvZGl2PiAgICA8L2J1dHRvbj4gICAgPCUgfSAlPiAgPC9kaXY+ICA8c2VjdGlvbiBjbGFzcz1cInRhZVwiPlRBRSBtw6F4aW1vOiA8JT0gZ2V0QW1vdW50KGNob2ljZXNbMF0uYW5udWFsX2VxdWl2YWxlbnQpICU+JTwvc2VjdGlvbj4gIDxzZWN0aW9uIGNsYXNzPVwiaG93LWl0LXdvcmtzXCI+ICAgIDxoZWFkZXI+wr9Dw7NtbyBmdW5jaW9uYT88L2hlYWRlcj4gICAgPGRpdiBjbGFzcz1cImluZm8td3JhcHBlclwiPiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RWxpZ2UgQXBsYXphbWU8L2gzPiAgICAgICAgPHA+ZW4gbGEgdGllbmRhLCBjdWFuZG8gdmF5YXMgYSBwYWdhciBlbCBwZWRpZG8uPC9wPiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RGVjaWRlIGPDs21vIHF1aWVyZXMgcGFnYXI8L2gzPiAgICAgICAgPHA+SGFzdGEgZW4gMTIgY3VvdGFzLCBwYWdhbmRvIGNvbiB0YXJqZXRhLjwvcD4gICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkRpc2ZydXRhIGRlIHR1IGNvbXByYTwvaDM+ICAgICAgICA8cD5EZXNkZSBBcGxhemFtZSBlc3RhcmVtb3MgZGlzcG9uaWJsZXMgcG9yIHNpIG5lY2VzaXRhcyBjdWFscXVpZXIgY29zYS4gwqFBIGRpc2ZydXRhciE8L3A+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPC9zZWN0aW9uPjwvZGl2PjxkaXYgY2xhc3M9XCJjdGFcIj4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBidXR0b24td3JhcHBlclwiPiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGxnIGJ0bi1ibG9jayB3aGl0ZVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW1vZGFsPVwiZGlzbWlzc1wiPlZvbHZlciBhIFRpZW5kYTwvYnV0dG9uPiAgPC9kaXY+ICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgYnV0dG9uLXdyYXBwZXJcIj4gICAgPGEgY2xhc3M9XCJidG4gbGcgYnRuLWJsb2NrXCIgaHJlZj1cImh0dHA6Ly9hcGxhemFtZS5jb20vaG93L1wiIHRhcmdldD1cIl9ibGFua1wiPsK/UXVpZXJlcyBzYWJlciBtw6FzPzwvYT4gIDwvZGl2PjwvZGl2Pic7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50c1wiPiAgPHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtZnJvbVwiPmRlc2RlJm5ic3A7PC9zcGFuPjwhLS0gIC0tPjxzdHJvbmcgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtYW1vdW50XCI+ICAgIDxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LXByaWNlXCI+PCU9IGdldEFtb3VudChjaG9pY2UuYW1vdW50KSAlPjwvc3Bhbj48IS0tICAgIC0tPjxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWN1cnJlbmN5XCI+4oKsPC9zcGFuPiAgPC9zdHJvbmc+PCEtLSAgLS0+PHN1YiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1wZXItbW9udGhcIj4vbWVzPC9zdWI+PCEtLSAgLS0+PHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHMtd3JhcHBlclwiPiAgICA8c3Bhbj4mbmJzcDtlbiZuYnNwOzwvc3Bhbj4gICAgPGVtIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzLW51bVwiPjEyPC9lbT4gICAgPHNwYW4+Jm5ic3A7Y3VvdGFzPC9zcGFuPiAgPC9zcGFuPjwvZGl2PjxzdHlsZSByZWw9XCJzdHlsZXNoZWV0XCI+PCU9IG9wdGlvbnMud2lkZ2V0LnN0eWxlcyAlPjwvc3R5bGU+JzsiLCIvKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuICogQmV6aWVyRWFzaW5nIC0gdXNlIGJlemllciBjdXJ2ZSBmb3IgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAqIGJ5IEdhw6t0YW4gUmVuYXVkZWF1IDIwMTQgLSAyMDE1IOKAkyBNSVQgTGljZW5zZVxuICovXG5cbi8vIFRoZXNlIHZhbHVlcyBhcmUgZXN0YWJsaXNoZWQgYnkgZW1waXJpY2lzbSB3aXRoIHRlc3RzICh0cmFkZW9mZjogcGVyZm9ybWFuY2UgVlMgcHJlY2lzaW9uKVxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gNDtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5cbnZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG52YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG52YXIgZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gQSAoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQiAoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQyAoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMTsgfVxuXG4vLyBSZXR1cm5zIHgodCkgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgeSh0KSBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gY2FsY0JlemllciAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVDsgfVxuXG4vLyBSZXR1cm5zIGR4L2R0IGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIGR5L2R0IGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBnZXRTbG9wZSAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpOyB9XG5cbmZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZSAoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gIGRvIHtcbiAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICBhQiA9IGN1cnJlbnRUO1xuICAgIH0gZWxzZSB7XG4gICAgICBhQSA9IGN1cnJlbnRUO1xuICAgIH1cbiAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcbiAgcmV0dXJuIGN1cnJlbnRUO1xufVxuXG5mdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZSAoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gZm9yICh2YXIgaSA9IDA7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgIHJldHVybiBhR3Vlc3NUO1xuICAgfVxuICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gfVxuIHJldHVybiBhR3Vlc3NUO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICAvLyBQcmVjb21wdXRlIHNhbXBsZXMgdGFibGVcbiAgdmFyIHNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG4gIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRURm9yWCAoYVgpIHtcbiAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICB9XG4gICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgLy8gSW50ZXJwb2xhdGUgdG8gcHJvdmlkZSBhbiBpbml0aWFsIGd1ZXNzIGZvciB0XG4gICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcblxuICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBCZXppZXJFYXNpbmcgKHgpIHtcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVybiB4OyAvLyBsaW5lYXJcbiAgICB9XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuIiwiLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTUwMzEyXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmLCBkb2N1bWVudCwgRE9NRXhjZXB0aW9uICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXG5cbmlmIChcImRvY3VtZW50XCIgaW4gc2VsZikge1xuXG4vLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4vLyBJbmNsdWRpbmcgSUUgPCBFZGdlIG1pc3NpbmcgU1ZHRWxlbWVudC5jbGFzc0xpc3RcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpIFxuXHR8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKSkge1xuXG4oZnVuY3Rpb24gKHZpZXcpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKCdFbGVtZW50JyBpbiB2aWV3KSkgcmV0dXJuO1xuXG52YXJcblx0ICBjbGFzc0xpc3RQcm9wID0gXCJjbGFzc0xpc3RcIlxuXHQsIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCJcblx0LCBlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXVxuXHQsIG9iakN0ciA9IE9iamVjdFxuXHQsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0fVxuXHQsIGFyckluZGV4T2YgPSBBcnJheVtwcm90b1Byb3BdLmluZGV4T2YgfHwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgaSA9IDBcblx0XHRcdCwgbGVuID0gdGhpcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0Ly8gVmVuZG9yczogcGxlYXNlIGFsbG93IGNvbnRlbnQgY29kZSB0byBpbnN0YW50aWF0ZSBET01FeGNlcHRpb25zXG5cdCwgRE9NRXggPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuXHRcdHRoaXMubmFtZSA9IHR5cGU7XG5cdFx0dGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cblx0LCBjaGVja1Rva2VuQW5kR2V0SW5kZXggPSBmdW5jdGlvbiAoY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdGlmICh0b2tlbiA9PT0gXCJcIikge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiU1lOVEFYX0VSUlwiXG5cdFx0XHRcdCwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIlxuXHRcdFx0XHQsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG5cdH1cblx0LCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHZhclxuXHRcdFx0ICB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpXG5cdFx0XHQsIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBbXVxuXHRcdFx0LCBpID0gMFxuXHRcdFx0LCBsZW4gPSBjbGFzc2VzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG5cdFx0fVxuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy50b1N0cmluZygpKTtcblx0XHR9O1xuXHR9XG5cdCwgY2xhc3NMaXN0UHJvdG8gPSBDbGFzc0xpc3RbcHJvdG9Qcm9wXSA9IFtdXG5cdCwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuXHR9XG47XG4vLyBNb3N0IERPTUV4Y2VwdGlvbiBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgYWxsb3cgY2FsbGluZyBET01FeGNlcHRpb24ncyB0b1N0cmluZygpXG4vLyBvbiBub24tRE9NRXhjZXB0aW9ucy4gRXJyb3IncyB0b1N0cmluZygpIGlzIHN1ZmZpY2llbnQgaGVyZS5cbkRPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuY2xhc3NMaXN0UHJvdG8uaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG5cdHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG59O1xuY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0dG9rZW4gKz0gXCJcIjtcblx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xufTtcbmNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG5cdFx0XHR0aGlzLnB1c2godG9rZW4pO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdFx0LCBpbmRleFxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcblx0dG9rZW4gKz0gXCJcIjtcblxuXHR2YXJcblx0XHQgIHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pXG5cdFx0LCBtZXRob2QgPSByZXN1bHQgP1xuXHRcdFx0Zm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIlxuXHRcdDpcblx0XHRcdGZvcmNlICE9PSBmYWxzZSAmJiBcImFkZFwiXG5cdDtcblxuXHRpZiAobWV0aG9kKSB7XG5cdFx0dGhpc1ttZXRob2RdKHRva2VuKTtcblx0fVxuXG5cdGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZm9yY2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICFyZXN1bHQ7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG59O1xuXG5pZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcblx0XHQgIGdldDogY2xhc3NMaXN0R2V0dGVyXG5cdFx0LCBlbnVtZXJhYmxlOiB0cnVlXG5cdFx0LCBjb25maWd1cmFibGU6IHRydWVcblx0fTtcblx0dHJ5IHtcblx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuXHRcdGlmIChleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XG5cdFx0XHRjbGFzc0xpc3RQcm9wRGVzYy5lbnVtZXJhYmxlID0gZmFsc2U7XG5cdFx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdFx0fVxuXHR9XG59IGVsc2UgaWYgKG9iakN0cltwcm90b1Byb3BdLl9fZGVmaW5lR2V0dGVyX18pIHtcblx0ZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbn1cblxufShzZWxmKSk7XG5cbn0gZWxzZSB7XG4vLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcbi8vIHRvIG5vcm1hbGl6ZSB0aGUgYWRkL3JlbW92ZSBhbmQgdG9nZ2xlIEFQSXMuXG5cbihmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO1xuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjMVwiLCBcImMyXCIpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG5cdC8vIGNsYXNzTGlzdC5yZW1vdmUgZXhpc3QgYnV0IHN1cHBvcnQgb25seSBvbmUgYXJndW1lbnQgYXQgYSB0aW1lLlxuXHRpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKSB7XG5cdFx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdO1xuXG5cdFx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHR2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0b2tlbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0XHRvcmlnaW5hbC5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNyZWF0ZU1ldGhvZCgnYWRkJyk7XG5cdFx0Y3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcblx0fVxuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCBmYWxzZSk7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxuXHQvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSkge1xuXHRcdHZhciBfdG9nZ2xlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7XG5cblx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0aWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybiBmb3JjZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0fVxuXG5cdHRlc3RFbGVtZW50ID0gbnVsbDtcbn0oKSk7XG5cbn1cblxufVxuXG4iLCIvKlxuICogZXZlbnRzLmpzIC0gU2luZ2xlIGxpYnJhcnkgdG8gaGFuZGxlIGdlbmVyaWMgZXZlbnRzXG5cbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBKZXPDunMgTWFudWVsIEdlcm1hZGUgQ2FzdGnDsWVpcmFzIDxqZXN1c0BnZXJtYWRlLmVzPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXG4gIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSBpZiggcm9vdCApIHtcbiAgICBpZiggcm9vdC5kZWZpbmUgKSB7XG4gICAgICByb290LmRlZmluZSgnRXZlbnRzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFjdG9yeSgpOyB9ICk7XG4gICAgfSBlbHNlIGlmKCByb290LmFuZ3VsYXIgKSB7XG4gICAgICByb290LmFuZ3VsYXIubW9kdWxlKCdldmVudHNXcmFwcGVyJywgW10pLmZhY3RvcnkoJ0V2ZW50cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhY3RvcnkodHJ1ZSk7IH0pO1xuICAgIH0gZWxzZSBpZiggIXJvb3QuRXZlbnRzICkge1xuICAgICAgcm9vdC5FdmVudHMgPSBmYWN0b3J5KCk7XG4gICAgfVxuICB9XG5cbn0pKHRoaXMsIGZ1bmN0aW9uIChuZykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgc3RkOiB7IG9uOiAnb24nLCBvbmNlOiAnb25jZScsIG9mZjogJ29mZicsIHRyaWdnZXI6ICd0cmlnZ2VyJyB9LFxuICAgIHNhZmU6IHsgb246ICckJG9uJywgb25jZTogJyQkb25jZScsIG9mZjogJyQkb2ZmJywgdHJpZ2dlcjogJyQkdHJpZ2dlcicgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIEV2ZW50IChuYW1lLCBhcmdzLCBjYWxsZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy4kJGFyZ3MgPSBbdGhpc10uY29uY2F0KGFyZ3MpO1xuICAgIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xuICB9XG5cbiAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TWV0aG9kcyAobmdTYWZlKSB7XG4gICAgcmV0dXJuIG5nU2FmZSA/IG1ldGhvZHMuc2FmZSA6IG1ldGhvZHMuc3RkO1xuICB9XG5cblx0ZnVuY3Rpb24gX2FkZExpc3RlbmVyIChoYW5kbGVycywgaGFuZGxlciwgY29udGV4dCkge1xuICAgIGlmKCAhIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGVycy5wdXNoKHsgaGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90cmlnZ2VyRXZlbnQgKGUsIGhhbmRsZXJzKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICBoYW5kbGVyc1tpXS5oYW5kbGVyLmFwcGx5KGUuY2FsbGVyLCBlLiQkYXJncyk7XG4gICAgICAgIGlmKCBlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9lbXB0eUxpc3RlbmVyIChoYW5kbGVycykge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGhhbmRsZXJzLnNwbGljZSgwLCBoYW5kbGVycy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lciAoaGFuZGxlcnMsIGhhbmRsZXIpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyApIHtcbiAgICAgICAgaWYoIGhhbmRsZXJzW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIgKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGxlbi0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEV2ZW50cyAodGFyZ2V0LCBuZ1NhZmUpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7fSxcbiAgICAgICAgbGlzdGVuZXJzT25jZSA9IHt9LFxuICAgICAgICBtZXRob2QgPSBnZXRNZXRob2RzKG5nU2FmZSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0VhY2ggKF9tZXRob2QsIGV2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgaWYoIGV2ZW50TmFtZSBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgICAgICBldmVudE5hbWUuZm9yRWFjaChmdW5jdGlvbiAoX2V2ZW50TmFtZSkgeyB0YXJnZXRbX21ldGhvZF0oX2V2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMyk7IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdldmVudCBuYW1lIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgaWYoIC8gLy50ZXN0KGV2ZW50TmFtZSkgKSB7XG4gICAgICAgIHRhcmdldFtfbWV0aG9kXShldmVudE5hbWUuc3BsaXQoLyArLyksIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9uLCBldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uY2VdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub25jZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSA9IGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0sIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC50cmlnZ2VyXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLnRyaWdnZXIsIGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IG5ldyBFdmVudChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpO1xuXG4gICAgICBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc1tldmVudE5hbWVdKTtcblxuICAgICAgaWYoICFlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgIHZhciBsZW4gPSBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICAgIGlmKCBsZW4gKSB7XG4gICAgICAgICAgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdLnNwbGljZSgwLCBsZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9mZl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vZmYsIGV2ZW50TmFtZSwgaGFuZGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBpZiggaGFuZGxlciA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBfZW1wdHlMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG4gICAgICAgIF9lbXB0eUxpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0sIGhhbmRsZXIpO1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBFdmVudHM7XG59KTtcbiIsIlxuLy8gZmFjdG9yeSBodHRwXG5cbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZScpLFxuICAgIF8gPSByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUZ1bmN0aW9ucyAobywgYXJncywgdGhpc0FyZykge1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICBpZiggb1trZXldIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBvW2tleV0gPSBvW2tleV0uYXBwbHkodGhpc0FyZywgYXJncyB8fCBbXSk7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2Ygb1trZXldID09PSAnb2JqZWN0JyAmJiBvW2tleV0gIT09IG51bGwgKSB7XG4gICAgICBvW2tleV0gPSByZXNvbHZlRnVuY3Rpb25zKG9ba2V5XSwgYXJncywgdGhpc0FyZyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJUb1RpdGxlU2x1Zyh0ZXh0KSB7XG4gIC8vIGNvbnNvbGUubG9nKCdoZWFkZXJUb1RpdGxlU2x1ZycsIHRleHQpO1xuICB2YXIga2V5ID0gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGxvd2VyLCB1cHBlcikge1xuICAgICAgcmV0dXJuIGxvd2VyICsgJy0nICsgdXBwZXI7XG4gIH0pO1xuICBrZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyVG9DYW1lbENhc2UodGV4dCkge1xuICB2YXIga2V5ID0gdGV4dFswXS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHIoMSk7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKFthLXpdKS0oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgcmV0dXJuIGxvd2VyICsgdXBwZXI7XG4gIH0pO1xufVxuXG52YXIgUkVfY29udGVudFR5cGUgPSAvKFteXFwvXSspXFwvKFteK10rXFwrKT8oLiopLztcbmZ1bmN0aW9uIHBhcnNlQ29udGVudFR5cGUoY29udGVudFR5cGUsIHRleHQsIHhtbCkge1xuICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLm1hdGNoKFJFX2NvbnRlbnRUeXBlKTtcbiAgcmV0dXJuIG1hdGNoZXMgJiYgKCBtYXRjaGVzWzNdID09PSAnanNvbicgPyBKU09OLnBhcnNlKHRleHQpIDogKCBtYXRjaGVzWzNdID09PSAneG1sJyA/IHhtbCA6IHRleHQgKSApO1xufVxuXG5mdW5jdGlvbiBfZ2V0SGVhZGVycyAocmVxdWVzdCkge1xuICB2YXIgaGVhZGVycyA9IHt9O1xuICByZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL1xccyooW15cXDpdKylcXHMqXFw6XFxzKihbXlxcO1xcbl0rKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUpIHtcbiAgICAgIGhlYWRlcnNbaGVhZGVyVG9DYW1lbENhc2Uoa2V5KV0gPSB2YWx1ZS50cmltKCk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJzR2V0dGVyIChyZXF1ZXN0KSB7XG4gIHZhciBoZWFkZXJzQ2FjaGU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFoZWFkZXJzQ2FjaGUgKSB7XG4gICAgICBoZWFkZXJzQ2FjaGUgPSBfZ2V0SGVhZGVycyhyZXF1ZXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnNDYWNoZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplUGFyYW1zIChwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciggdmFyIHBhcmFtIGluIHBhcmFtcyApIHtcbiAgICByZXN1bHQgKz0gKCByZXN1bHQgPyAnJicgOiAnJyApICsgcGFyYW0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3BhcmFtXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyc1RvUmVxdWVzdCAocmVxLCBoZWFkZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBoZWFkZXJzICkge1xuICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCBoZWFkZXJUb1RpdGxlU2x1ZyhrZXkpLCBoZWFkZXJzW2tleV0gKTtcbiAgfVxufVxuXG52YXIgZGVmYXVsdFNldHRpbmdzID0ge307XG5cbmh0dHAuY29uZmlnID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gIF8ubWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHJldHVybiBodHRwO1xufTtcblxuZnVuY3Rpb24gaHR0cCAodXJsLCBjb25maWcpIHtcblxuICBpZiggY29uZmlnID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgJiYgdXJsICE9PSBudWxsICkge1xuICAgIGNvbmZpZyA9IHVybDtcbiAgICB1cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25maWcudXJsID0gdXJsO1xuICB9XG5cbiAgY29uZmlnID0gXy5tZXJnZShfLmNvcHkoZGVmYXVsdFNldHRpbmdzKSxfLmNvcHkoY29uZmlnKSk7XG4gIGNvbmZpZyA9IHJlc29sdmVGdW5jdGlvbnMoIGNvbmZpZywgW2NvbmZpZ10sIG51bGwgKTtcbiAgY29uZmlnLm1ldGhvZCA9ICggY29uZmlnLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcblxuICBpZiggdHlwZW9mIGNvbmZpZy51cmwgIT09ICdzdHJpbmcnICkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXJsIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgcmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIHZhciByZXF1ZXN0ID0gbnVsbDtcblxuICAgIHRyeSB7IC8vIEZpcmVmb3gsIE9wZXJhIDguMCssIFNhZmFyaVxuICAgICAgICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBjYXRjaCAoZSkgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICB0cnkgeyByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBjYXRjaCAoZXIpIHsgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB9XG4gICAgaWYoIHJlcXVlc3QgPT09IG51bGwgKSB7IHRocm93ICdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSFRUUCBSZXF1ZXN0JzsgfVxuXG4gICAgaWYoIGNvbmZpZy5wYXJhbXMgKSB7XG4gICAgICB1cmwgKz0gKCAvXFw/Ly50ZXN0KHVybCkgPyAnJicgOiAnPycgKSArIHNlcmlhbGl6ZVBhcmFtcyggY29uZmlnLnBhcmFtcyApO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3BlbiggY29uZmlnLm1ldGhvZCwgdXJsICk7XG5cbiAgICBpZiggY29uZmlnLndpdGhDcmVkZW50aWFscyApIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhZGRIZWFkZXJzVG9SZXF1ZXN0KHJlcXVlc3QsIGNvbmZpZy5oZWFkZXJzIHx8IHt9ICk7XG5cbiAgICByZXF1ZXN0LmNvbmZpZyA9IGNvbmZpZztcbiAgICBjb25maWcuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKCByZXF1ZXN0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgcmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgZGF0YTogcGFyc2VDb250ZW50VHlwZShyZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSwgcmVxdWVzdC5yZXNwb25zZVRleHQsIHJlcXVlc3QucmVzcG9uc2VYTUwpLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc0dldHRlcihyZXF1ZXN0KSxcbiAgICAgICAgICB4aHI6IHJlcXVlc3RcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCApIHtcbiAgICAgICAgICByZXNvbHZlKCByZXNwb25zZSApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCggcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuXG4gICAgICBpZiggY29uZmlnLmRhdGEgJiYgY29uZmlnLmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vanNvbicgJiYgdHlwZW9mIGNvbmZpZy5kYXRhICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgY29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25maWcuZGF0YSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIGNvbmZpZy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEgKSB7XG4gICAgICBjb25maWcuY29udGVudFR5cGUgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgY29uZmlnLmRhdGEgPT09ICdvYmplY3QnICYmIGNvbmZpZy5kYXRhICE9PSBudWxsICkge1xuICAgICAgY29uZmlnLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgaWYoIGNvbmZpZy5kYXRhICkge1xuICAgICAgICBjb25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuICAgICAgLy8gYWRkSGVhZGVyc1RvUmVxdWVzdChyZXF1ZXN0LCB7IGNvbnRlbnRUeXBlOiBjb25maWcuY29udGVudFR5cGUgfSk7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoICdDb250ZW50LVR5cGUnLCBjb25maWcuY29udGVudFR5cGUgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnNlbmQoIGNvbmZpZy5kYXRhICk7XG5cbiAgfSk7XG59XG5cbmh0dHAuc2VyaWFsaXplID0gc2VyaWFsaXplUGFyYW1zO1xuXG5odHRwLm5vQ2FjaGUgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgdXJsICs9ICggL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nICkgKyAndD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHJldHVybiBodHRwKHVybCwgY29uZmlnKTtcbn07XG5cbmh0dHAucGxhaW5SZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIGNvbmZpZzogcmVzcG9uc2UuY29uZmlnLFxuICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycygpXG4gIH07XG59O1xuXG5bJ2dldCcsICdkZWxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgaHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGh0dHAodXJsLCBfLmV4dGVuZChfLmNvcHkoY29uZmlnIHx8IHt9KSwge1xuICAgICAgbWV0aG9kOiBtZXRob2RcbiAgICB9KSk7XG4gIH07XG59KTtcblxuWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBodHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gaHR0cCh1cmwsIF8uZXh0ZW5kKF8uY29weShjb25maWcgfHwge30pLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGRhdGE6IGRhdGEgfHwge31cbiAgICB9KSk7XG4gIH07XG59KTtcblxuLy8gYmFzZVBhdGhcblxuZnVuY3Rpb24gYmFzZVBhdGggKGJwKSB7XG4gIGlmKCAvXFwvJC8udGVzdChicCkgKSB7XG4gICAgYnAgPSBicC5yZXBsYWNlKC9cXC8kLywnJyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgaWYoICFwICkge1xuICAgICAgcmV0dXJuIGJwO1xuICAgIH1cbiAgICByZXR1cm4gYnAgKyAoIC9eXFwvLy50ZXN0KHApID8gJycgOiAnLycgKSArIHA7XG4gIH07XG59XG5cbmh0dHAuYmFzZSA9IGZ1bmN0aW9uICh1cmwsIGJhc2VDb25maWcpIHtcbiAgdmFyIGJwID0gYmFzZVBhdGgodXJsKSxcbiAgICAgIGJhc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZWQuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gIGJhc2VDb25maWcgPSBiYXNlQ29uZmlnIHx8IHt9O1xuXG4gIFsnZ2V0JywgJ2RlbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGJhc2VkW21ldGhvZF0gPSBmdW5jdGlvbiAocCwgX2NvbmZpZyApIHtcbiAgICAgIHJldHVybiBodHRwKCBicChwKSwgXy5tZXJnZShfLmNvcHkoYmFzZUNvbmZpZyksIF9jb25maWcsIHsgbWV0aG9kOiBtZXRob2QgfSkpO1xuICAgIH07XG4gIH0pO1xuXG4gIFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBiYXNlZFttZXRob2RdID0gZnVuY3Rpb24gKHAsIGRhdGEsIF9jb25maWcgKSB7XG4gICAgICByZXR1cm4gaHR0cCggYnAocCksIF8ubWVyZ2UoXy5jb3B5KGJhc2VDb25maWcpLCBfY29uZmlnLCB7IG1ldGhvZDogbWV0aG9kLCBkYXRhOiBkYXRhIH0pICk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJhc2VkO1xufTtcblxuaHR0cC5yZXNwb25zZURhdGEgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0dHA7XG4iLCJcbnZhciBhcnJheVNoaWZ0ID0gW10uc2hpZnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kICgpIHtcbiAgdmFyIGRlc3QgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAga2V5O1xuXG4gIHdoaWxlKCBzcmMgKSB7XG4gICAgZm9yKCBrZXkgaW4gc3JjKSB7XG4gICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICB9XG4gICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn07XG4iLCJcbnZhciBSRV8kJCA9IC9eXFwkXFwkLyxcbiAgICBhcnJheVNoaWZ0ID0gW10uc2hpZnQsXG4gICAgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBfbWVyZ2UgKCkge1xuICAgIHZhciBkZXN0ID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBrZXk7XG5cbiAgICB3aGlsZSggc3JjICkge1xuXG4gICAgICBpZiggdHlwZW9mIGRlc3QgIT09IHR5cGVvZiBzcmMgKSB7XG4gICAgICAgICAgZGVzdCA9IHR5cGUuaXNBcnJheShzcmMpID8gW10gOiAoIHR5cGUuaXNPYmplY3Qoc3JjKSA/IHt9IDogc3JjICk7XG4gICAgICB9XG5cbiAgICAgIGlmKCB0eXBlLmlzT2JqZWN0KHNyYykgKSB7XG5cbiAgICAgICAgZm9yKCBrZXkgaW4gc3JjICkge1xuICAgICAgICAgIGlmKCBzcmNba2V5XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc0FycmF5KGRlc3Rba2V5XSkgKSB7XG4gICAgICAgICAgICBbXS5wdXNoLmFwcGx5KGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChkZXN0W2tleV0pICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gX21lcmdlKGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xufVxuXG5mdW5jdGlvbiBtYXBPYmplY3QgKG8sIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZShvW2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2NvcHkgKHNyYykge1xuICBpZiggdHlwZS5pc0FycmF5KHNyYykgKSB7XG4gICAgcmV0dXJuIHNyYy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgaWYoIHR5cGUuaXNPYmplY3Qoc3JjKSApIHtcbiAgICByZXR1cm4gbWFwT2JqZWN0KHNyYywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzcmM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBleHRlbmQ6IHJlcXVpcmUoJy4vX2V4dGVuZCcpLFxuICBtZXJnZTogX21lcmdlLFxuICBjb3B5OiBfY29weVxufTtcbiIsIlxudmFyIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuZnVuY3Rpb24gX2tleSAobywgX2tleSwgdmFsdWUpe1xuICAgIGlmKCAhdHlwZS5pc09iamVjdChvKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG4gICAgdmFyIGtleXMgPSBfa2V5LnNwbGl0KCcuJyksXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcblxuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgd2hpbGUgKGtleSkge1xuICAgICAgICBpZiggdHlwZS5pc09iamVjdChvKSAmJiBrZXkgaW4gbyApIHtcbiAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHdoaWxlIChrZXkpIHtcbiAgICAgICAgaWYoIG8gaW5zdGFuY2VvZiBPYmplY3QgKSB7XG4gICAgICAgICAgaWYgKCBrZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgaWYoICEoa2V5IGluIG8pICkge1xuICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGtleTogX2tleSxcbiAga2V5czogT2JqZWN0LmtleXNcbn07XG4iLCJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyksXG4gICAgYXJyU29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lLFxuICAgIGFyckV2ZXJ5ID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LFxuICAgIGFyckZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcbiAgICBhcnJNYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gX2VhY2hJbkxpc3QoIGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnICkge1xuICByZXR1cm4gYXJyRm9yRWFjaC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbn1cblxuZnVuY3Rpb24gX2VhY2hJbk9iamVjdCggbywgaXRlcmF0ZWUsIHRoaXNBcmcgKSB7XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgW29ba2V5XSwga2V5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21hdGNoQWxsIChvLCBmaWx0ZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBmaWx0ZXJzICkge1xuICAgIGlmKCBvW2tleV0gIT09IGZpbHRlcnNba2V5XSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIF9tYXRjaEFueSAobywgZmlsdGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gZmlsdGVycyApIHtcbiAgICBpZiggb1trZXldID09PSBmaWx0ZXJzW2tleV0gKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfaXRlcmF0ZWVGbiAoaXRlcmF0ZWUpIHtcbiAgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGl0ZXJhdGVlO1xuICB9XG5cbiAgaWYoIHR5cGUuaXNPYmplY3QoaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9tYXRjaEFsbChpdGVtLCBpdGVyYXRlZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtID09PSBpdGVyYXRlZTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZWFjaCAobywgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoIG8gJiYgby5sZW5ndGggKSB7XG4gICAgYXJyRm9yRWFjaC5jYWxsKG8sIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KG8pICkge1xuICAgIF9lYWNoSW5PYmplY3QobywgaXRlcmF0ZWUsIHRoaXNBcmcgfHwgdGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZiAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoICF0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBhcnJJbmRleE9mLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0Lmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSwgaSkgKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBfaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIG1hcCA9IHt9O1xuXG5cdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIG1hcFtpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0sIGkpXSA9IGxpc3RbaV07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuZnVuY3Rpb24gaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0aWYoIHR5cGUuaXNTdHJpbmcoaXRlcmF0ZWUpICkge1xuXHRcdHJldHVybiBfaW5kZXhCeShsaXN0LCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVtpdGVyYXRlZV07IH0sIHRoaXNBcmcpO1xuXHR9IGVsc2UgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG5cdFx0cmV0dXJuIF9pbmRleEJ5KGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcblx0fVxuXHRyZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHNvbWUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJTb21lLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBldmVyeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyckV2ZXJ5LmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoICFpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwIChsaXN0LCBfaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGl0ZXJhdGVlID0gdHlwZS5pc1N0cmluZyhfaXRlcmF0ZWUpID8gZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bX2l0ZXJhdGVlXTsgfSA6IF9pdGVyYXRlZTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hcDJMaXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXSwgaSA9IDA7XG4gIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICByZXN1bHRbaSsrXSA9IGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG4gICAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0aWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0fVxuXHRcdH1cbn1cblxuZnVuY3Rpb24gZmlyc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICB2YXIgaSA9IGFyckluZGV4T2YuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsYXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMSA7IGkgPj0gMCA7IGktLSApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICAgIHZhciBuZXdMaXN0ID0gW107XG5cblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgX21hdGNoQWxsOiBfbWF0Y2hBbGwsXG4gIF9tYXRjaEFueTogX21hdGNoQW55LFxuICBmaW5kOiBmaXJzdCxcbiAgZmlyc3Q6IGZpcnN0LFxuICBsYXN0OiBsYXN0LFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZWFjaDogZWFjaCxcbiAgc29tZTogc29tZSxcbiAgZXZlcnk6IGV2ZXJ5LFxuICBtYXA6IG1hcCxcbiAgcGx1Y2s6IG1hcCxcbiAgbWFwMkxpc3Q6IG1hcDJMaXN0LFxuICBpbmRleE9mOiBpbmRleE9mLFxuICBpbmRleEJ5OiBpbmRleEJ5LFxuICByZW1vdmU6IHJlbW92ZSxcbiAgaWY6IGZ1bmN0aW9uIChyZXN1bHQsIGZuKSB7XG4gICAgaWYoIHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICByZXR1cm4gZm4ocmVzdWx0KTtcbiAgICB9XG4gIH1cbn07XG4iLCJcbnZhciBSRV9kb3RzQmFjayA9IC9bXlxcL10rXFwvXFwuXFwuXFwvL2csXG5cdGNsZWFyU3RyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH07XG5cbmZ1bmN0aW9uIF9qb2luUGF0aCAoKSB7XG4gICAgdmFyIHBhdGggPSAoYXJndW1lbnRzWzBdIHx8ICcnKS5yZXBsYWNlKC9cXC8kLywgJycpLFxuICAgIFx0YmFja0RvdHM7XG5cbiAgICBmb3IoIHZhciBpID0gMSwgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxIDsgaSA8IGxhc3QgOyBpKysgKSB7XG4gICAgICAgIHBhdGggKz0gJy8nICsgYXJndW1lbnRzW2ldLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJyk7XG4gICAgfVxuICAgIGlmKCBsYXN0ICkge1xuICAgICAgICBwYXRoICs9IGFyZ3VtZW50c1tsYXN0XSA/ICggJy8nICsgYXJndW1lbnRzW2xhc3RdLnJlcGxhY2UoL15cXC8vLCAnJykgKSA6ICcnO1xuICAgIH1cblxuICAgIHdoaWxlKCBSRV9kb3RzQmFjay50ZXN0KHBhdGgpICkge1xuICAgIFx0cGF0aCA9IHBhdGgucmVwbGFjZShSRV9kb3RzQmFjaywgY2xlYXJTdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgam9pblBhdGg6IF9qb2luUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2lzVHlwZSAodHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvID09PSB0eXBlKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfaW5zdGFuY2VPZiAoX2NvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoIG8gaW5zdGFuY2VvZiBfY29uc3RydWN0b3IgKTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNUeXBlOiBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaXNUeXBlKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2lzVHlwZSh0eXBlKSh2YWx1ZSk7XG4gIH0sXG4gIGluc3RhbmNlT2Y6IGZ1bmN0aW9uIChQcm90bywgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90byk7XG4gICAgfVxuICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90bykodmFsdWUpO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGw7XG4gIH0sXG5cdGlzRnVuY3Rpb246IF9pc1R5cGUoJ2Z1bmN0aW9uJyksXG5cdGlzU3RyaW5nOiBfaXNUeXBlKCdzdHJpbmcnKSxcblx0aXNOdW1iZXI6IF9pc1R5cGUoJ251bWJlcicpLFxuXHRpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IF9pbnN0YW5jZU9mKEFycmF5KSxcblx0aXNEYXRlOiBfaW5zdGFuY2VPZihEYXRlKSxcblx0aXNSZWdFeHA6IF9pbnN0YW5jZU9mKFJlZ0V4cCksXG5cdGlzRWxlbWVudDogZnVuY3Rpb24obykge1xuICAgIHJldHVybiBvICYmIG8ubm9kZVR5cGUgPT09IDE7XG4gIH0sXG4gIGlzVW5kZWZpbmVkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSkge1xuXG5cdGlmKCAhUHJvbWlzZS5kZWZlciApIHtcblx0XHRQcm9taXNlLmRlZmVyID0gZnVuY3Rpb24gKCkge1xuXHRcdCAgdmFyIGRlZmVycmVkID0ge307XG5cdFx0ICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHQgICAgZGVmZXJyZWQucmVqZWN0ID0gcmVqZWN0O1xuXHRcdCAgfSk7XG5cdFx0ICByZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGVhY2ggKGl0ZXJhYmxlLCBoYW5kbGVyKSB7XG5cdFx0Zm9yKCB2YXIgaSA9IDAsIG4gPSBpdGVyYWJsZS5sZW5ndGg7IGkgPCBuIDsgaSsrICkge1xuXHRcdFx0aGFuZGxlcihpdGVyYWJsZVtpXSwgaSk7XG5cdFx0fVxuXHR9XG5cblx0aWYoICFQcm9taXNlLmFsbCApIHtcblx0XHRQcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuXHRcdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgdmFyIHBlbmRpbmcgPSBpdGVyYWJsZS5sZW5ndGgsXG5cdFx0ICAgICAgICByZXN1bHRzID0gW107XG5cdFx0ICAgIGVhY2goaXRlcmFibGUsIGZ1bmN0aW9uIChfcHJvbWlzZSwgaSkge1xuXG5cdFx0ICAgICAgKCBfcHJvbWlzZS50aGVuID8gX3Byb21pc2UgOiBQcm9taXNlLnJlc29sdmUoX3Byb21pc2UpICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICAgICAgICByZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdCAgICAgICAgaWYoIC0tcGVuZGluZyA9PT0gMCApIHtcblx0XHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggcGVuZGluZyAhPT0gLTEgKSB7XG5cdFx0ICAgICAgICAgIHBlbmRpbmcgPT09IC0xO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9O1xuXHR9XG5cblx0aWYoICFQcm9taXNlLnJhY2UgKSB7XG5cdFx0UHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG5cdFx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXG5cdFx0ICAgIGVhY2goaXRlcmFibGUsIGZ1bmN0aW9uIChfcHJvbWlzZSwgaSkge1xuXHRcdCAgICAgIGlmKCBkb25lICkge1xuXHRcdCAgICAgICAgcmV0dXJuO1xuXHRcdCAgICAgIH1cblx0XHQgICAgICAoIF9wcm9taXNlLnRoZW4gPyBfcHJvbWlzZSA6IFByb21pc2UucmVzb2x2ZShfcHJvbWlzZSkgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgICAgICAgIGlmKCAhZG9uZSApIHtcblx0XHQgICAgICAgICAgZG9uZSA9IHRydWU7XG5cdFx0ICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggIWRvbmUgKSB7XG5cdFx0ICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9O1xuXHR9XG5cblx0aWYoICFQcm9taXNlLnJlc29sdmUgKSB7XG5cdFx0UHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgcmVzb2x2ZShyZXN1bHQpOyB9KTtcblx0XHR9O1xuXHR9XG5cblx0aWYoICFQcm9taXNlLnJlamVjdCApIHtcblx0XHRQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHQgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJlamVjdChyZWFzb24pOyB9KTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIFByb21pc2U7XG59O1xuIiwiXG5mdW5jdGlvbiBzdGVwUmVzdWx0IChzdGVwLCB2YWx1ZSwgdHlwZSkge1xuICBpZiggdmFsdWUgJiYgdmFsdWUudGhlbiApIHtcbiAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3RlcC5kZWZlcnJlZFt0eXBlXSh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKHByb21pc2UpIHtcbiAgaWYoIHByb21pc2UuJCRzdWNjZWVkZWQgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGVuID0gcHJvbWlzZS4kJHF1ZXVlLmxlbmd0aCxcbiAgICAgIHN0ZXAgPSBwcm9taXNlLiQkcXVldWUuc2hpZnQoKSxcbiAgICAgIHR5cGUgPSBwcm9taXNlLiQkc3VjY2VlZGVkID8gJ3Jlc29sdmUnIDogJ3JlamVjdCcsXG4gICAgICB1bmNvdWdoID0gIXByb21pc2UuJCRzdWNjZWVkZWQgJiYgcHJvbWlzZS4kJHVuY291Z2h0Kys7XG5cbiAgd2hpbGUoIHN0ZXAgKSB7XG5cbiAgICBpZiggc3RlcFt0eXBlXSApIHtcbiAgICAgIHVuY291Z2ggPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCBzdGVwW3R5cGVdKHByb21pc2UuJCR2YWx1ZSksICdyZXNvbHZlJyk7XG4gICAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCByZWFzb24sICdyZWplY3QnKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwUmVzdWx0KHN0ZXAsIHByb21pc2UuJCR2YWx1ZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgc3RlcCA9IHByb21pc2UuJCRxdWV1ZS5zaGlmdCgpO1xuICB9XG5cbiAgaWYoICFwcm9taXNlLiQkc3VjY2VlZGVkICYmIHVuY291Z2ggKSB7XG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYoIHByb21pc2UuJCR1bmNvdWdoID09PSB1bmNvdWdoICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSknKTtcbiAgICB9XG4gICAgLy8gfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZSAoZXhlY3V0b3IpIHtcbiAgaWYoICEoIGV4ZWN1dG9yIGluc3RhbmNlb2YgRnVuY3Rpb24gKSApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyIHVuZGVmaW5lZCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIHAgPSB0aGlzO1xuICB0aGlzLiQkcXVldWUgPSBbXTtcbiAgdGhpcy4kJHVuY291Z2ggPSAwO1xuXG4gIHRyeSB7XG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICBwLiQkdmFsdWUgPSByZXN1bHQ7XG4gICAgICBwcm9jZXNzUXVldWUocCk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgcC4kJHZhbHVlID0gcmVhc29uO1xuICAgICAgcHJvY2Vzc1F1ZXVlKHApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwLiQkc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgcC4kJHZhbHVlID0gZXJyO1xuICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uc3VjY2VlZGVkLCBvblJlamVjdGVkKSB7XG4gIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBfcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuJCRxdWV1ZS5wdXNoKHsgcmVzb2x2ZTogb25zdWNjZWVkZWQsIHJlamVjdDogb25SZWplY3RlZCwgZGVmZXJyZWQ6IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSB9KTtcbiAgICAgIH0pO1xuXG4gIHByb2Nlc3NRdWV1ZSh0aGlzKTtcblxuICByZXR1cm4gX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbnJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoUHJvbWlzZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3FpemVyJykoIGdsb2JhbC5Qcm9taXNlID8gcmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShnbG9iYWwuUHJvbWlzZSkgOiByZXF1aXJlKCcuL3Byb21pc2UtcG9seWZpbGwnKSApO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlKSB7XG5cbiAgZnVuY3Rpb24gcSAoZXhlY3V0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpO1xuICB9XG5cbiAgWydkZWZlcicsICdyZXNvbHZlJywgJ3JlamVjdCcsICdhbGwnLCAncmFjZSddLmZvckVhY2goZnVuY3Rpb24gKGZOYW1lKSB7XG4gICAgcVtmTmFtZV0gPSBQcm9taXNlW2ZOYW1lXTtcbiAgfSk7XG5cbiAgcS53aGVuID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuICggcCAmJiBwLnRoZW4gKSA/IHAgOiBQcm9taXNlLnJlc29sdmUocCk7IH07XG4gIHEudXNlUG9seWZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gIFx0UHJvbWlzZSA9IHJlcXVpcmUoJy4vcHJvbWlzZS1wb2x5ZmlsbCcpO1xuICAgIFsnZGVmZXInLCAncmVzb2x2ZScsICdyZWplY3QnLCAnYWxsJywgJ3JhY2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChmTmFtZSkge1xuICAgICAgcVtmTmFtZV0gPSBQcm9taXNlW2ZOYW1lXTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcTtcblxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9xaXplcicpKCByZXF1aXJlKCcuL2xpYi9wcm9taXNlLXBvbHlmaWxsJykgKTtcbiIsIlxuLy8gcmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9jdXJyZW50LXNjcmlwdCcpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9kYXRlJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2RvbS1jbG9zZXN0Jyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2V2ZW50LWxpc3RlbmVyJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoZXMtc2VsZWN0b3InKTtcbiIsIlxuaWYgKCFEYXRlLm5vdykge1xuICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG59IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuXG4gICAgd2hpbGUoIGVsICkge1xuICAgICAgaWYoIGVsLm1hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH07XG59IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gIGlmKCBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hFdmVudCApIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hFdmVudCggJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICB9O1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLmRldGFjaEV2ZW50KCAnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgJ0Jyb3dzZXIgbm90IGNvbXBhdGlibGUgd2l0aCBlbGVtZW50IGV2ZW50cyc7XG4gIH1cbn0iLCIoZnVuY3Rpb24gKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHJvb3QubWF0Y2hNZWRpYSA9IHJvb3QubWF0Y2hNZWRpYSB8fCByb290LndlYmtpdE1hdGNoTWVkaWEgfHwgcm9vdC5tb3pNYXRjaE1lZGlhIHx8IHJvb3QubXNNYXRjaE1lZGlhO1xufSkodGhpcyk7IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yID0gKFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvclxuICApO1xufVxuXG4iLCJcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMnKTtcbi8vIGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbi8vIERhdGUubm93KClcbi8vIEhUTUxFbGVtZW50LmNsb3Nlc3QoKVxuLy8gSFRNTEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxuLy8gSFRNTEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lclxuLy8gd2luZG93Lm1hdGNoTWVkaWFcbi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvclxuXG5yZXF1aXJlKCdjbGFzc2xpc3QuanMnKTsgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0XG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKTtcblxuZnVuY3Rpb24gXyAoc2VsZWN0b3IsIHNvdXJjZSkge1xuICByZXR1cm4gc291cmNlICYmIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID9cblx0XHRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHNvdXJjZSkgOlxuXHRcdChzb3VyY2UgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5fLm5vb3AgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG5leHRlbmQuZXh0ZW5kKF8sIGV4dGVuZCk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL3R5cGUnKSxcblx0cmVxdWlyZSgnbml0cm8tdG9vbHMva2V5JyksXG5cdHJlcXVpcmUoJ25pdHJvLXRvb2xzL3BhdGgnKVxuKTtcblxuXy5leHRlbmQoXywge1xuXHRhbmltYXRlOiByZXF1aXJlKCcuL2RlZmVycmVkL2FuaW1hdGUnKSxcblx0d2FpdDogcmVxdWlyZSgnLi9kZWZlcnJlZC93YWl0Jylcbn0pO1xuXG5fLmV4dGVuZChfLCB7XG5cdHJlYWR5OiByZXF1aXJlKCcuL2ZuL3JlYWR5JyksXG5cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZuL3RlbXBsYXRlJyksXG5cdGRlYm91bmNlOiByZXF1aXJlKCcuL2ZuL2RlYm91bmNlJylcbn0pO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCcuL3V0aWxzL2V2ZW50cycpLFxuXHQvLyBfLm9uKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpXG5cdC8vIF8ub2ZmKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpXG5cdC8vIF8udHJpZ2dlckV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSlcblxuICByZXF1aXJlKCcuL3V0aWxzL2RvbScpXG4gIC8vIF8uY3JlYXRlKHRhZ05hbWUsIGF0dHJzKVxuXHQvLyBfLmF0dHIoZWwsIG5hbWUsIHZhbHVlKVxuICAvLyBfLnRtcENsYXNzKGVsLCBjbGFzc05hbWUsIGR1cmF0aW9uLCBjYilcbik7XG5cbl8uZXh0ZW5kKF8sIHtcblx0bm9ybWFsaXplOiByZXF1aXJlKCcuL3V0aWxzL25vcm1hbGl6ZScpLFxuXHQvLyBfLnRvdWNoRGV2aWNlID09PSB0cnVlIHwgZmFsc2Vcblx0Ly8gXy5pc01hYyA9PT0gdHJ1ZSB8IGZhbHNlXG5cdC8vIF8uaXNBbmRyb2lkID09PSB0cnVlIHwgZmFsc2VcblxuXHRzY3JvbGw6IHJlcXVpcmUoJy4vdXRpbHMvc2Nyb2xsL2J1bmRsZScpIC8vIHNjcm9sbCBpcyBub3QgYXZhaWxhYmxlIHVudGlsIGRvY3VtZW50IGlzIHJlYWR5XG5cdC8vIF8uc2Nyb2xsLm9uKCBoYW5kbGVyLCB1c2VDYXB0dXJlIClcblx0Ly8gXy5zY3JvbGwub2ZmKCBoYW5kbGVyLCB1c2VDYXB0dXJlIClcblx0Ly8gXy5zY3JvbGwudG9wKClcblx0Ly8gXy5zY3JvbGwuZ290byh2YWx1ZSlcblx0Ly8gXy5zY3JvbGwuYW5pbWF0ZVRvKHZhbHVlIHwgSFRNTEVsZW1lbnQsIGNhbGxiYWNrLCBkdXJhdGlvbik6IFByb21pc2Vcblx0Ly8gXyxzY3JvbGwuaW5BbmltYXRpb24gPT09IHRydWUgfCBmYWxzZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiIsIlxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIHRpbWluZ0Z1bmN0aW9ucyA9IHt9LFxuICAgIG5vb3AgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBnZXRUaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICh0aW1pbmdGdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmKCAhdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gKSB7XG4gICAgICAgIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdsaW5lYXInICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24gKCB2YWx1ZSApIHsgcmV0dXJuIHZhbHVlOyB9O1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC4xNywuNjcsLjgzLC42Nyk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbicgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsMSwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoMCwwLC41OCwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLWluLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsLjU4LDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV07XG4gICAgfSxcbiAgICBkZWZlciA9IGZ1bmN0aW9uICgpIHtcblx0XHQgIHZhciBkZWZlcnJlZCA9IHt9O1xuXHRcdCAgZGVmZXJyZWQucHJvbWlzZSA9ICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0XHQgIH0pO1xuXHRcdCAgcmV0dXJuIGRlZmVycmVkO1xuXHRcdH07O1xuXG5mdW5jdGlvbiBhbmltYXRlIChwcm9ncmVzc0ZuLCBkdXJhdGlvbiwgYXRFbmQsIHRpbWluZ0Z1bmN0aW9uTmFtZSkge1xuICBpZiAoIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgaWYgKCB0eXBlb2YgYXRFbmQgPT09ICdudW1iZXInICkge1xuICAgICAgYXV4ID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IGF0RW5kO1xuICAgICAgYXRFbmQgPSBhdXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0RW5kID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IDQwMDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIGR1cmF0aW9uID09PSB1bmRlZmluZWQgKSB7XG4gICAgZHVyYXRpb24gPSA0MDA7XG4gIH1cblxuICB0aW1pbmdGdW5jdGlvbk5hbWUgPSB0aW1pbmdGdW5jdGlvbk5hbWUgfHwgKCB0eXBlb2YgYXRFbmQgPT09ICdzdHJpbmcnID8gYXRFbmQgOiAoIHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3N0cmluZycgPyBkdXJhdGlvbiA6ICdlYXNlJyApICk7XG5cbiAgcHJvZ3Jlc3NGbihkdXJhdGlvbiA9PT0gMCA/IDEgOiAwKTtcblxuICB2YXIgc3RvcHBlZCA9IGZhbHNlLFxuICAgICAgdGltaW5nRnVuY3Rpb24gPSBnZXRUaW1pbmdGdW5jdGlvbih0aW1pbmdGdW5jdGlvbk5hbWUpLFxuICAgICAgZGVmZXJyZWQgPSBkZWZlcigpO1xuXG4gIGlmKCBkdXJhdGlvbiA+IDAgKSB7XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKSxcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiggc3RvcHBlZCApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiggZWxhcHNlZCA+PSBkdXJhdGlvbiApIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHJvZ3Jlc3NGbigxKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIChhdEVuZCB8fCBub29wKSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzc0ZuKCB0aW1pbmdGdW5jdGlvbihlbGFwc2VkL2R1cmF0aW9uKSApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICB9XG5cbiAgZGVmZXJyZWQucHJvbWlzZS5zdG9wID0gZnVuY3Rpb24gKHJlamVjdCkge1xuICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgIGlmKCByZWplY3QgKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmFuaW1hdGUudGltZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbjtcbiAgaWYoIGR1cmF0aW9uICkge1xuICAgIGR1cmF0aW9uLnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdGltZSArPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgIH0pO1xuICB9XG4gIGlmKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRGVsYXkgKSB7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkRlbGF5LnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdGltZSArPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgIH0pO1xuICB9XG4gIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgaWYoIGR1cmF0aW9uICkge1xuICAgIGR1cmF0aW9uLnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdmFyIHQgPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgICAgaWYoIHQgPiB0aW1lICkge1xuICAgICAgICB0aW1lID0gdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZygnYW5pbWF0aW9uVGltZScsIGVsLCB0aW1lKTtcbiAgcmV0dXJuIHRpbWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGU7XG4iLCJcbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcblx0d2FpdCA9IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2spIHtcblx0XHRpZiggZGVsYXkgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcblx0XHRcdGRlbGF5ID0gW2NhbGxiYWNrLCBjYWxsYmFjayA9IGRlbGF5XVswXTtcblx0XHR9XG5cdFx0aWYoIGNhbGxiYWNrICYmICEoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIEZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgZGVsYXkgIT09ICdudW1iZXInICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkZWxheSBzaG91bGQgYmUgYSBOdW1iZXInKTtcblx0XHR9XG5cdFx0cmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSk7XG5cdH07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FpdDtcbiIsIlxuZnVuY3Rpb24gZGVib3VuY2UgKGZuLCB0aW1lc2xvdCkge1xuICB2YXIgdGltZXIgPSBudWxsLFxuICAgICAgdGltZXNsb3QgPSB0aW1lc2xvdCB8fCA4MDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiggdGltZXIgKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgdGltZXNsb3QpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlOyIsInZhciByZWFkeUxpc3RlbmVycyA9IFtdLFxuICAgIGluaXRSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWFkeUxpc3RlbmVycztcbiAgICAgIHJlYWR5TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGxpc3RlbmVycywgZnVuY3Rpb24gKGNiKSB7IGNiKCk7IH0pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZWFkeSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRSZWFkeSk7XG4gICAgfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZWFkeSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRSZWFkeSk7XG5cbmZ1bmN0aW9uIHJlYWR5IChjYWxsYmFjaykge1xuICBpZiggY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBpZiggcmVhZHlMaXN0ZW5lcnMgKSB7XG4gICAgICByZWFkeUxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWFkeTtcbiIsIlxuZnVuY3Rpb24gdGVtcGxhdGUgKG5hbWUsIGRhdGEpe1xuICByZXR1cm4gdGVtcGxhdGUuY2FjaGVbbmFtZV0oZGF0YSB8fCB7fSk7XG59XG5cbnRlbXBsYXRlLmNhY2hlID0ge307XG5cbnRlbXBsYXRlLmNvbXBpbGUgPSBmdW5jdGlvbiAodG1wbCkge1xuICAvLyBKb2huIFJlc2lnIG1pY3JvLXRlbXBsYXRlXG4gIHJldHVybiBuZXcgRnVuY3Rpb24oJ29iaicsIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICd2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTsnICtcblxuICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAnd2l0aChvYmope3AucHVzaChcXCcnICtcblxuICAgIC8vIENvbnZlcnQgdGhlIHRlbXBsYXRlIGludG8gcHVyZSBKYXZhU2NyaXB0XG4gICAgdG1wbC50cmltKClcbiAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCAnICcpXG4gICAgICAuc3BsaXQoJzwlJykuam9pbignXFx0JylcbiAgICAgIC5yZXBsYWNlKC8oKF58JT4pW15cXHRdKiknL2csICckMVxccicpXG4gICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgJ1xcJywkMSxcXCcnKVxuICAgICAgLnNwbGl0KCdcXHQnKS5qb2luKCdcXCcpOycpXG4gICAgICAuc3BsaXQoJyU+Jykuam9pbigncC5wdXNoKFxcJycpXG4gICAgICAuc3BsaXQoJ1xccicpLmpvaW4oJ1xcXFxcXCcnKSArICdcXCcpO31yZXR1cm4gcC5qb2luKFxcJ1xcJyk7Jyk7XG59O1xuXG50ZW1wbGF0ZS5wdXQgPSBmdW5jdGlvbiAobmFtZSwgdG1wbCkge1xuICB0ZW1wbGF0ZS5jYWNoZVtuYW1lXSA9IHRlbXBsYXRlLmNvbXBpbGUodG1wbCk7XG59O1xuXG50ZW1wbGF0ZS5sb29rdXAgPSBmdW5jdGlvbiAoKSB7XG4gIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL3gtdGVtcGxhdGVcIl1bZGF0YS10ZW1wbGF0ZV0nKSwgZnVuY3Rpb24gKHRtcGwpIHtcbiAgICB0ZW1wbGF0ZS5wdXQodG1wbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSwgdG1wbC50ZXh0KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIlxudmFyIF9kb20gPSB7XG4gIGN1cnJlbnRTY3JpcHQ6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIHJldHVybiBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gIH0pKCksXG4gIGNyZWF0ZTogZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGlmKCBhdHRycyApIHtcbiAgICAgIGlmKCBhdHRycy5odG1sICkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBhdHRycy5odG1sO1xuICAgICAgfVxuICAgICAgZm9yKCB2YXIgYXR0ciBpbiBhdHRycyApIHtcbiAgICAgICAgaWYoIGF0dHIgIT09ICdodG1sJyApIHtcbiAgICAgICAgICBlbFthdHRyXSA9IGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSxcbiAgYXR0cjogZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmKCAhKGVsIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZWxbMF0gaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuICAgICAgZWwgPSBlbFswXTtcbiAgICB9XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9LFxuICB0bXBDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUsIGR1cmF0aW9uLCBjYikge1xuICAgIHZhciBpc0NvbGxlY3Rpb24gPSAhKGVsIGluc3RhbmNlb2YgRWxlbWVudCApICYmIGVsLmxlbmd0aDtcblxuICAgIGlmKCBpc0NvbGxlY3Rpb24gKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgX2VsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsLCBmdW5jdGlvbiAoX2VsKSB7XG4gICAgICAgICAgX2VsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiggY2IgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gZHVyYXRpb24oKSA6IGR1cmF0aW9uICk7XG4gIH0sXG4gIGZvcm1QYXJhbXM6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgaWYoICEoZm9ybSBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIGZvcm0ubGVuZ3RoICkge1xuICAgICAgZm9ybSA9IGZvcm1bMF07XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZm9ybS5lbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiggZWwubmFtZSAmJiAhZWwuZGlzYWJsZWQgKSB7XG4gICAgICAgIGlmKCBlbC50eXBlID09PSAncmFkaW8nICkge1xuICAgICAgICAgIGlmKCBlbC5jaGVja2VkICkge1xuICAgICAgICAgICAgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfZG9tO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb246IGZ1bmN0aW9uIChlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG4gICAgaWYoIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgdHJpZ2dlckV2ZW50OiBkb2N1bWVudC5jcmVhdGVFdmVudCA/IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7XG4gICAgZXZlbnQuZGF0YSA9IGRhdGE7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBlbGVtZW50LmZpcmVFdmVudChcIm9uXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn07XG4iLCJcbnZhciBub3JtYWxpemUgPSB7XG4gIGlzVG91Y2hEZXZpY2U6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgaXNNYWM6IC9eTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSksXG4gIGlzQW5kcm9pZDogL15BbmRyb2lkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSlcbn07XG5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBub3JtYWxpemUuaXNUb3VjaERldmljZSA/ICd0b3VjaCcgOiAnbm8tdG91Y2gnICk7XG5pZiggbm9ybWFsaXplLmlzTWFjICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtbWFjJyk7XG59XG5pZiggbm9ybWFsaXplLmlzQW5kcm9pZCApIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFuZHJvaWQnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemU7XG4iLCJcbmZ1bmN0aW9uIGdldFNjcm9sbFJvb3QgKCkge1xuICAgIGlmKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgY2FjaGVUb3AgPSAoKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgIT09IFwidW5kZWZpbmVkXCIpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogbnVsbCkgfHwgYm9keS5zY3JvbGxUb3AgfHwgaHRtbC5zY3JvbGxUb3AsIC8vIGNhY2hlIHRoZSB3aW5kb3cncyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICByb290O1xuXG4gICAgaHRtbC5zY3JvbGxUb3AgPSBib2R5LnNjcm9sbFRvcCA9IGNhY2hlVG9wICsgKGNhY2hlVG9wID4gMCkgPyAtMSA6IDE7XG4gICAgLy8gZmluZCByb290IGJ5IGNoZWNraW5nIHdoaWNoIHNjcm9sbFRvcCBoYXMgYSB2YWx1ZSBsYXJnZXIgdGhhbiB0aGUgY2FjaGUuXG4gICAgcm9vdCA9IChodG1sLnNjcm9sbFRvcCAhPT0gY2FjaGVUb3ApID8gaHRtbCA6IGJvZHk7XG5cbiAgICByb290LnNjcm9sbFRvcCA9IGNhY2hlVG9wOyAvLyByZXN0b3JlIHRoZSB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24gdG8gY2FjaGVkIHZhbHVlXG5cbiAgICByZXR1cm4gcm9vdDsgLy8gcmV0dXJuIHRoZSBzY3JvbGxpbmcgcm9vdCBlbGVtZW50XG59XG5cbnZhciByZWFkeSA9IHJlcXVpcmUoJy4uL2ZuL3JlYWR5JyksXG5cdHNjcm9sbFJvb3QgPSB7IHNjcm9sbFRvcDogMCB9XG4gICAgc2Nyb2xsID0ge1xuICAgICAgcm9vdDogc2Nyb2xsUm9vdCxcbiAgICAgIG9uOiBmdW5jdGlvbiAoIGhhbmRsZXIsIHVzZUNhcHR1cmUgKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgICAgIH0sXG4gICAgICBvZmY6IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wO1xuICAgICAgfSxcbiAgICAgIGdvdG86IGZ1bmN0aW9uICggdmFsdWUgKSB7XG4gICAgICAgIHNjcm9sbC5yb290LnNjcm9sbFRvcCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgc2Nyb2xsUm9vdCA9IGdldFNjcm9sbFJvb3QoKTtcbiAgc2Nyb2xsLnJvb3QgPSBzY3JvbGxSb290O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgYW5pbWF0ZSA9IHJlcXVpcmUoJy4uLy4uL2RlZmVycmVkL2FuaW1hdGUnKSxcblx0XHQkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcblx0XHRub29wID0gZnVuY3Rpb24oKSB7fSxcblx0XHRzY3JvbGxBbmltYXRpb24gPSBhbmltYXRlKG5vb3AsIDApLFxuXHRcdGF1eDtcblxuXHRzY3JvbGwuYW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0c2Nyb2xsLmFuaW1hdGVUbyA9IGZ1bmN0aW9uICh2YWx1ZSwgY2IsIGR1cmF0aW9uICkge1xuXHRcdGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdCAgcmV0dXJuICRxLnJlamVjdCgpO1xuXHRcdH1cblx0XHRpZiggdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuXHRcdCAgdmFsdWUgPSB2YWx1ZS5vZmZzZXRUb3A7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBjYiA9PT0gJ251bWJlcicgKSB7XG5cdFx0ICBhdXggPSBjYjtcblx0XHQgIGR1cmF0aW9uID0gY2I7XG5cdFx0ICBjYiA9IGF1eDtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsRnJvbSA9IHNjcm9sbC50b3AoKSxcblx0XHQgICAgc2Nyb2xsRGVsdGEgPSB2YWx1ZSAtIHNjcm9sbEZyb207XG5cblx0XHRzY3JvbGxBbmltYXRpb24uc3RvcCgpO1xuXHRcdHNjcm9sbC5pbkFuaW1hdGlvbiA9IHRydWU7XG5cdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgIHNjcm9sbC5nb3RvKCBzY3JvbGxGcm9tICsgc2Nyb2xsRGVsdGEqcHJvZ3Jlc3MgKTtcblx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBzY3JvbGwuaW5BbmltYXRpb24gPSBmYWxzZTtcblx0XHQgIChjYiB8fCBfLm5vb3ApKCk7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzUwLCAnZWFzZS1vdXQnKTtcblxuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0cmV0dXJuIHNjcm9sbDtcbn07XG4iLCJcbnZhciBzY3JvbGwgPSByZXF1aXJlKCcuLi9zY3JvbGwnKTtcblxucmVxdWlyZSgnLi90b3AtY2xhc3MnKShzY3JvbGwpO1xucmVxdWlyZSgnLi9hbmltYXRlJykoc2Nyb2xsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtdG9wJywgIXNjcm9sbC50b3AoKSApO1xuXHQgICAgfTtcblxuXHRzY3JvbGwub24ob25TY3JvbGwpO1xuXG5cdHJlcXVpcmUoJy4uLy4uL2ZuL3JlYWR5Jykob25TY3JvbGwpO1xuXG59O1xuIiwiXG5yZXF1aXJlKCcuL3NhbmRib3gnKShmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBpZiggZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IC9FZGdlXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICAvLyAgIHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKS51c2VQb2x5ZmlsbCgpO1xuICAvLyB9XG5cbiAgdmFyIGFwbGF6YW1lID0gcmVxdWlyZSgnLi9jb3JlL2NvcmUnKTtcblxuICBhcGxhemFtZS5jaGVja291dCA9IHJlcXVpcmUoJy4vYXBwcy9jaGVja291dCcpO1xuICBhcGxhemFtZS5idXR0b24gPSByZXF1aXJlKCcuL2FwcHMvYnV0dG9uJyk7XG4gIGFwbGF6YW1lLnNpbXVsYXRvciA9IHJlcXVpcmUoJy4vYXBwcy9zaW11bGF0b3InKTtcbiAgYXBsYXphbWUubW9kYWwgPSByZXF1aXJlKCcuL2FwcHMvbW9kYWwnKTtcblxuICBnbG9iYWwuYXBsYXphbWUgPSBhcGxhemFtZTtcblxuICBhcGxhemFtZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcGk6IHJlcXVpcmUoJy4vY29yZS9hcGknKSxcbiAgICAgIGxvZzogcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LFxuICAgICAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbiAgICB9O1xuICB9O1xuXG4gIGFwbGF6YW1lLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXF1aXJlKCcuL3Rvb2xzL2xvZycpLmhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgY29uc29sZS5sb2cobC50aW1lKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGwuYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVxdWlyZSgnLi9hcHBzL2h0dHAtc2VydmljZScpO1xuXG4gIHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLWFwbGF6YW1lJykoZ2xvYmFsLmFwbGF6YW1lKTtcbiAgYXBsYXphbWUuXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1dHRvbnNMb29rdXAgPSByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1idXR0b24nKShnbG9iYWwuYXBsYXphbWUpLFxuICAgICAgICB3aWRnZXRzTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtc2ltdWxhdG9yJykoZ2xvYmFsLmFwbGF6YW1lKSxcbiAgICAgICAgY2IgPSByZXF1aXJlKCcuL2NvcmUvYXBpJykuY2FsbGJhY2s7XG5cbiAgICBpZiggY2IgKSB7XG4gICAgICBpZiggIHR5cGVvZiBnbG9iYWxbY2JdICE9PSAnZnVuY3Rpb24nICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIGdsb2JhbCBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgZ2xvYmFsW2NiXShhcGxhemFtZSk7XG4gICAgICBidXR0b25zTG9va3VwKCk7XG4gICAgICB3aWRnZXRzTG9va3VwKCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIC8vIGdsb2JhbC4kcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcbiAgLy8gZ2xvYmFsLiRodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyk7XG5cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpSHR0cCA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpLWh0dHAnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gZ2V0Q2FydFByaWNlICgpIHtcbiAgcmV0dXJuIF8ucGFyc2VQcmljZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsX3ByaWNlJykudGV4dENvbnRlbnQgKTtcbn1cblxuZnVuY3Rpb24gYnV0dG9uIChvcHRpb25zKSB7XG5cbiAgaWYoICFvcHRpb25zICkge1xuICAgIHRocm93IG5ldyBFcnJvcignYXBsYXphbWUuYnV0dG9uIHJlcXVpcmVzIHBhcmFtZXRlcnMnKTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5pZCAmJiAhb3B0aW9ucy5idXR0b24gJiYgIW9wdGlvbnMuc2VsZWN0b3IgKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2J1dHRvbiBjYW4gbm90IGJlIGlkZW50aWZpZWQgKCBwbGVhc2UgdXNlIC0gaWQ6IFxcJ2J1dHRvbi1pZFxcJyAtIG9yIC0gYnV0dG9uOiBcXCcjYnV0dG9uLWlkXFwnIC0gb3IgLSBzZWxlY3RvcjogXFwnI2J1dHRvbi1pZFxcJyAocmVjb21lbmRlZCkgLSApJyk7XG4gIH1cblxuICBpZiggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsX3ByaWNlJykgKSB7XG4gICAgb3B0aW9ucy5hbW91bnQgPSBnZXRDYXJ0UHJpY2UoKSB8fCBvcHRpb25zLmFtb3VudDtcblxuICAgIGlmKCAhYnV0dG9uLndhdGNoaW5nICkge1xuICAgICAgYnV0dG9uLndhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIG9wdGlvbnMubGFzdFByaWNlID0gb3B0aW9ucy5hbW91bnQ7XG5cbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFtb3VudCA9IGdldENhcnRQcmljZSgpO1xuICAgICAgICBpZiggYW1vdW50ICYmIGFtb3VudCAhPT0gb3B0aW9ucy5sYXN0UHJpY2UgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgICAgb3B0aW9ucy5sYXN0UHJpY2UgPSBvcHRpb25zLmFtb3VudDtcbiAgICAgICAgICBvcHRpb25zLmZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICBidXR0b24ob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7XG4gICAgfVxuICB9XG5cbiAgaWYoICFvcHRpb25zLmFtb3VudCApe1xuICAgIHRocm93IG5ldyBFcnJvcignYnV0dG9uIGFtb3VudCBtaXNzaW5nJyk7XG4gIH1cblxuICB2YXIgZWxlbWVudHMsIGVsQnV0dG9uO1xuXG4gIGlmKCBvcHRpb25zLmJ1dHRvbiApIHtcbiAgICBlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b24pO1xuICB9IGVsc2UgaWYoIG9wdGlvbnMuaWQgKSB7XG4gICAgZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAoIC9eIy8udGVzdChvcHRpb25zLmlkKSA/ICcnIDogJyMnICkgKyBvcHRpb25zLmlkICk7XG4gIH1cblxuICBlbGVtZW50cyA9IGVsQnV0dG9uID8gW2VsQnV0dG9uXSA6IFtdO1xuXG4gIGlmKCBvcHRpb25zLnNlbGVjdG9yICkge1xuICAgIFtdLnB1c2guYXBwbHkoIGVsZW1lbnRzLCBfLmNzc1F1ZXJ5KG9wdGlvbnMuc2VsZWN0b3IpICk7XG4gIH1cblxuICBpZiggb3B0aW9ucy5kZXNjcmlwdGlvbiApIHtcbiAgICBbXS5wdXNoLmFwcGx5KCBlbGVtZW50cywgXy5jc3NRdWVyeShvcHRpb25zLmRlc2NyaXB0aW9uKSApO1xuICB9XG5cbiAgZWxCdXR0b24gPSBlbEJ1dHRvbiB8fCBlbGVtZW50c1swXTtcblxuICBpZiggIW9wdGlvbnMuJCRydW5uaW5nICYmIG9wdGlvbnMuc2VsZWN0b3IgKSB7XG4gICAgb3B0aW9ucy4kJHJ1bm5pbmcgPSB0cnVlO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLmZvcmNlVXBkYXRlICYmICggIWVsZW1lbnRzLmxlbmd0aCB8fCBfLmVsZW1lbnREYXRhKGVsQnV0dG9uLCAnYnV0dG9uSW5pdGlhbGl6ZWQnKSApICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMuZm9yY2VVcGRhdGUgPSBmYWxzZTtcblxuICBpZiggZWxCdXR0b24gJiYgb3B0aW9ucy5wYXJlbnQgKSB7XG4gICAgdmFyIHBhcmVudCA9IGVsQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSggcGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICAgIGlmKCBwYXJlbnQubWF0Y2hlc1NlbGVjdG9yKG9wdGlvbnMucGFyZW50KSApIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYoIGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyApIHtcbiAgICAgIGVsLl9fZGlzcGxheSA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsLl9faW5wdXQgPSAoIGVsLm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsLm5vZGVOYW1lID09PSAnQlVUVE9OJyApID8gZWwgOiBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCwgYnV0dG9uJyk7XG5cbiAgICBpZiggZWwuX19pbnB1dCApIHtcbiAgICAgIGVsLl9faW5wdXQuX19kaXNhYmxlZCA9IGVsLl9faW5wdXQuX19kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gZWwuX19pbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgOiBlbC5fX2lucHV0Ll9fZGlzYWJsZWQ7XG4gICAgICBlbC5fX2lucHV0Ll9fY2hlY2tlZCA9IGVsLl9faW5wdXQuX19jaGVja2VkID09PSB1bmRlZmluZWQgPyBlbC5fX2lucHV0LmNoZWNrZWQgOiBlbC5fX2lucHV0Ll9fY2hlY2tlZDtcbiAgICAgIGlmKCBlbC5fX2lucHV0Ll9fY2hlY2tlZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICBlbC5fX2lucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKCAhZWwuX19pbnB1dC5fX2Rpc2FibGVkICkge1xuICAgICAgICBlbC5fX2lucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBfLmVsZW1lbnREYXRhKGVsLCAnYnV0dG9uSW5pdGlhbGl6ZWQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbi5jaGVjayhvcHRpb25zLCBmdW5jdGlvbiAoYWxsb3dlZCkge1xuICAgIGlmKCBhbGxvd2VkICkge1xuICAgICAgdmFyIGVsbXMgPSBlbGVtZW50cy5zbGljZSgpO1xuICAgICAgZWxtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19kaXNwbGF5O1xuICAgICAgICBpZiAoIGVsLl9faW5wdXQgKSB7XG4gICAgICAgICAgaWYoICFlbC5fX2lucHV0Ll9fZGlzYWJsZWQgJiYgZWwuX19pbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgKSB7XG4gICAgICAgICAgICBlbC5fX2lucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoIGVsLl9faW5wdXQuX19jaGVja2VkICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBlbC5fX2lucHV0LmNoZWNrZWQgPSBlbC5fX2lucHV0Ll9fY2hlY2tlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuYnV0dG9uLmNoZWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmKCBfLmlzU3RyaW5nKG9wdGlvbnMpIHx8IF8uaXNOdW1iZXIob3B0aW9ucykgKSB7XG4gICAgb3B0aW9ucyA9IHsgYW1vdW50OiBOdW1iZXIob3B0aW9ucykgfTtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSB7XG4gICAgYW1vdW50OiBvcHRpb25zLmFtb3VudCxcbiAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSB8fCAnRVVSJ1xuICB9O1xuXG4gIGlmKCBvcHRpb25zLmNvdW50cnkgKSB7XG4gICAgcGFyYW1zLmNvdW50cnkgPSBvcHRpb25zLmNvdW50cnk7XG4gIH1cblxuICB2YXIgY2hlY2tQcm9taXNlID0gYXBpSHR0cC5nZXQoJ2NoZWNrb3V0L2J1dHRvbicsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgaWYoIF8uaXNGdW5jdGlvbihjYWxsYmFjaykgKSB7XG4gICAgY2hlY2tQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEuYWxsb3dlZCwgcmVzcG9uc2UpOyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHsgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tQcm9taXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKSxcbiAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKTtcblxuZnVuY3Rpb24gY2hlY2tvdXQgKG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGJhc2VDaGVja291dCA9ICggb3B0aW9ucy5ob3N0ID09PSAnbG9jYXRpb24nID8gKCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy8nICkgOiBvcHRpb25zLmhvc3QgKSB8fCAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljL2NoZWNrb3V0Lyc7XG5cbiAgaWYoICEvXFwvJC8udGVzdChiYXNlQ2hlY2tvdXQpICkge1xuICAgIGJhc2VDaGVja291dCArPSAnLyc7XG4gIH1cblxuICB2YXIgb24gPSB7fSxcbiAgICAgIGlmcmFtZVNyYyA9IGJhc2VDaGVja291dCArICdpZnJhbWUuaHRtbD8nICsgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBlcnJvckxvYWRpbmcgPSBmYWxzZSxcbiAgICAgIHRtcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGNzc092ZXJsYXkgPSBjc3NIYWNrKCdvdmVybGF5JyksXG4gICAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgICAgY3NzTG9nbyA9IGNzc0hhY2soJ2xvZ28nKSxcbiAgICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3MgKSB7XG4gICAgb24uc3VjY2VzcyA9IG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcztcbiAgfVxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yICkge1xuICAgIG9uLmVycm9yID0gb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3I7XG4gIH1cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzICkge1xuICAgIG9uLmRpc21pc3MgPSBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcztcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3M7XG4gIH1cblxuICB0bXBPdmVybGF5LmNsYXNzTmFtZSA9ICdhcGxhemFtZS1vdmVybGF5IGFwbGF6YW1lLW92ZXJsYXktc2hvdyc7XG5cbiAgY3NzT3ZlcmxheS5oYWNrKHRydWUpO1xuICBjc3NMb2dvLmhhY2sodHJ1ZSk7XG4gIGNzc0JsdXIuaGFjayh0cnVlKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWVycm9yTG9hZGluZyApIHtcbiAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIHRtcE92ZXJsYXkuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJhcGxhemFtZS1sb2dvLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwibG9nby1hcGxhemFtZVwiIHN0eWxlPVwid2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4O1wiPicgK1xuICByZXF1aXJlKCcuL2xvYWRpbmctc3ZnJykgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0XCI+Q2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnby4uLjwvZGl2PjwvZGl2Pic7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICB2YXIgbG9hZGluZ1RleHQgPSB0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCcpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhZXJyb3JMb2FkaW5nICkge1xuICAgICAgdG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLmNsYXNzTmFtZSArPSAnIGFuaW1hdGUnO1xuICAgIH1cbiAgfSwgMjAwKTtcblxuICBvcHRpb25zLmFwaSA9IF8uY29weShhcGkpO1xuXG4gIHJldHVybiBodHRwKCBpZnJhbWVTcmMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIGlmcmFtZUh0bWwgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoLzxoZWFkXFw+LywgJzxoZWFkPjxiYXNlIGhyZWY9XCInICsgYmFzZUNoZWNrb3V0ICsgJ1wiIC8+JyksXG4gICAgICAgICAgaWZyYW1lID0gXy5nZXRJRnJhbWUoe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBodHRwQ2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2h0dHAtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnaHR0cC1lcnJvcicsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBpZnJhbWUuc3JjID0gaWZyYW1lU3JjO1xuXG4gICAgICBpZiggIW9wdGlvbnMubWVyY2hhbnQgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBtZXJjaGFudCBwYXJhbWV0ZXJzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCAnc2FuZGJveCcgaW4gb3B0aW9ucy5tZXJjaGFudCApIHtcbiAgICAgICAgYXBpLnNhbmRib3ggPSBvcHRpb25zLm1lcmNoYW50LnNhbmRib3g7XG4gICAgICB9XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSApIHtcbiAgICAgICAgaWYoIGFwaS5wdWJsaWNLZXkgKSB7XG4gICAgICAgICAgb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSA9IGFwaS5wdWJsaWNLZXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHB1YmxpYyBrZXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcHRpb25zLm9yaWdpbiA9IHtcbiAgICAgICAgaHJlZjogbG9jYXRpb24uaHJlZixcbiAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgcHJvdG9jb2w6IGxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpblxuICAgICAgfTtcblxuICAgICAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgICAgICAgc3dpdGNoKCBtZXNzYWdlLmV2ZW50ICkge1xuICAgICAgICAgIGNhc2UgJ21lcmNoYW50JzpcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgY2hlY2tvdXQ6IG9wdGlvbnNcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzaG93LWlmcmFtZSc6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGlmcmFtZSwgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNzc01vZGFsLmhhY2sodHJ1ZSk7XG4gICAgICAgICAgICBjc3NPdmVybGF5LmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBPdmVybGF5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmctdGV4dCc6XG4gICAgICAgICAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Ryb3AtYmx1cic6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjc3NCbHVyLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm0nOlxuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgXy5sb2coJ2FwbGF6YW1lLmNoZWNrb3V0OmNvbmZpcm0nLCBtZXNzYWdlKTtcblxuICAgICAgICAgICAgaHR0cENoZWNrb3V0KCBvcHRpb25zLm1lcmNoYW50LmNvbmZpcm1hdGlvbl91cmwsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBfLmV4dGVuZChtZXNzYWdlLnBhcmFtcyB8fCB7fSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBtZXNzYWdlLmRhdGEuY2hlY2tvdXRfdG9rZW4sXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRfdG9rZW46IG1lc3NhZ2UuZGF0YS5jaGVja291dF90b2tlblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjb25maXJtYXRpb24nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maXJtYXRpb25fdXJsXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICBpZiggaWZyYW1lICkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgIGNzc01vZGFsLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBpZnJhbWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgIF8ub25NZXNzYWdlLm9mZignY2hlY2tvdXQnLCBvbk1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHN3aXRjaCggbWVzc2FnZS5yZXN1bHQgKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggIW9wdGlvbnMubWVyY2hhbnQuc3VjY2Vzc191cmwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3VjY2Vzc191cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LnN1Y2Nlc3NfdXJsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmVycm9yID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5lcnJvcigpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5jYW5jZWxfdXJsICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbF91cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LmNhbmNlbF91cmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzbWlzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmRpc21pc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5jaGVja291dF91cmwgfHwgJy8nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgXy5vbk1lc3NhZ2UoJ2NoZWNrb3V0Jywgb25NZXNzYWdlKTtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBjb25uZWN0IHRvICcgKyBiYXNlQ2hlY2tvdXQpO1xuICAgICAgZXJyb3JMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWUgJyArIHJlYXNvbik7XG5cbiAgICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLCAnYW5pbWF0ZScpO1xuICAgICAgbG9hZGluZ1RleHQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ0ZXh0LWVycm9yXCI+RXJyb3IgY2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnbzwvZGl2Pjxici8+PGRpdj48YSBocmVmPVwibWFpbHRvOnNvcG9ydGVAYXBsYXphbWUuY29tP3N1YmplY3Q9JyArIGVuY29kZVVSSSgnQ2hlY2tvdXQgZXJyb3I6ICcgKyByZWFzb24pICsgJ1wiPnNvcG9ydGVAYXBsYXphbWUuY29tPC9hPjwvZGl2Pic7XG4gICAgICBsb2FkaW5nVGV4dC5zdHlsZS5saW5lSGVpZ2h0ID0gJzEuNSc7XG5cbiAgICAgIChvcHRpb25zLm9uRXJyb3IgfHwgXy5ub29wKShyZWFzb24pO1xuICAgIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShyZXN1bHQsIG1lc3NhZ2UsIG1lc3NhZ2VTcmMsIHN0YXJ0ZWQpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB2YXIgcmVzcG9uc2VwID0gaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICByZXNwb25zZXAuY29uZmlnID0gbWVzc2FnZTtcblxuICAgIG1lc3NhZ2VTcmMucG9zdE1lc3NhZ2Uoe1xuICAgICAgYXBsYXphbWU6ICdodHRwJyxcbiAgICAgIGV2ZW50OiAncmVzcG9uc2UnLFxuICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VwXG4gICAgfSwgJyonKTtcbiAgfTtcbn1cblxuXy5vbk1lc3NhZ2UoJ2h0dHAnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuICBodHRwKCBtZXNzYWdlLnVybCwgbWVzc2FnZSApXG4gICAgLnRoZW4oXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ3N1Y2Nlc3MnLCBtZXNzYWdlLCBlLnNvdXJjZSwgc3RhcnRlZCksXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ2Vycm9yJywgbWVzc2FnZSwgZS5zb3VyY2UsIHN0YXJ0ZWQpXG4gICAgKTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyByZWFkeTogdHJ1ZSB9O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9ICc8c3ZnIGNsYXNzPVwibGluZS1zaG9ydFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8cGF0aCAgZD1cIk0zNi43ODgsODEuMDA4LDUwLDUwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjZcIiBmaWxsPVwibm9uZVwiLz4nICtcbic8L3N2Zz4nICtcbic8c3ZnIGNsYXNzPVwic21pbGVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPGcgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGw9XCJub25lXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzgwMzY2MzMsMCwwLDAuNzgwMzY2MzMsMTAuNTI2NTEyLDE4LjAwMzk5OClcIj4nICtcbic8cGF0aCBjbGFzcz1cInNtaWxlLW91dGxpbmVcIiBzdHJva2Utd2lkdGg9XCIxMlwiIGQ9XCJNNzUuMjQyLDU3LjUxYy01LjQzNSw3LjgzOS0xNC40OTgsMTIuOTcyLTI0Ljc2MSwxMi45NzItMTAuMjYyLDAtMTkuMzI1LTUuMTMyLTI0Ljc1OC0xMi45NzJcIi8+JyArXG4nPHBhdGggY2xhc3M9XCJzbWlsZS1saW5lXCIgc3Ryb2tlLXdpZHRoPVwiNy41XCIgZD1cIk03NS4yNDIsNTcuNTFjLTUuNDM1LDcuODM5LTE0LjQ5OCwxMi45NzItMjQuNzYxLDEyLjk3Mi0xMC4yNjIsMC0xOS4zMjUtNS4xMzItMjQuNzU4LTEyLjk3MlwiLz4nICtcbic8L2c+JyArXG4nPC9zdmc+JyArXG4nPHN2ZyBjbGFzcz1cImxpbmUtbGFyZ2VcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPHBhdGggc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTUwLDUwLDY2LjY4Nyw5Mi4yNjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCI0XCIgc3Ryb2tlLWRhc2hhcnJheT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZmlsbD1cIm5vbmVcIi8+JyArXG4nPC9zdmc+JztcbiIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cud2Via2l0TWF0Y2hNZWRpYSB8fCB3aW5kb3cubW96TWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKSxcbiAgICBhcGxhemFtZVZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKSxcbiAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoIG1heC13aWR0aDogNzY3cHggKScpLFxuICAgIGxhc3RTY3JvbGxUb3A7XG5cbnZhciB0bXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgY3NzT3ZlcmxheSA9IGNzc0hhY2soJ292ZXJsYXknKSxcbiAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuZnVuY3Rpb24gbW9kYWwgKGNvbnRlbnQsIG9wdGlvbnMpIHtcblxuICBpZiggbW9kYWwuaWZyYW1lICkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNzc092ZXJsYXkuaGFjayh0cnVlKTtcbiAgY3NzQmx1ci5oYWNrKHRydWUpO1xuICBjc3NNb2RhbC5oYWNrKHRydWUpO1xuXG4gIHRtcE92ZXJsYXkuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW92ZXJsYXkgYXBsYXphbWUtb3ZlcmxheS1zaG93JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gIH0sIDApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LXNob3cnKTtcbiAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcblxuICBtb2RhbC5pZnJhbWUgPSBfLmdldElGcmFtZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0pO1xuXG4gIG1vZGFsLmlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuICAvLyBtb2RhbC5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbW9kYWwuaWZyYW1lLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgbW9kYWwuaWZyYW1lLnNyYyA9IGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9tb2RhbC9tb2RhbC5odG1sP3Y9JyArIGVuY29kZVVSSShhcGxhemFtZVZlcnNpb24pO1xufVxuXG5fLm9uTWVzc2FnZSgnbW9kYWwnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHN3aXRjaCggbWVzc2FnZS5ldmVudCApIHtcbiAgICBjYXNlICdvcGVuJzpcbiAgICAgIG1vZGFsLnJlZmVycmVyID0gZS5zb3VyY2U7XG4gICAgICBtb2RhbC5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIG1vZGFsKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvcGVuaW5nJzpcbiAgICAgIG1vZGFsLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29wZW5lZCc6XG4gICAgICBsYXN0U2Nyb2xsVG9wID0gXy5zY3JvbGxUb3AoKTtcbiAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgIGV2ZW50OiAnY29udGVudCcsXG4gICAgICAgIGNvbnRlbnQ6IG1vZGFsLmlmcmFtZS5jb250ZW50XG4gICAgICB9LCAnKicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzb2x2ZWQnOlxuICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgZXZlbnQ6ICdyZXNvbHZlZCcsXG4gICAgICAgIG5hbWU6IG1vZGFsLm1lc3NhZ2UubmFtZSxcbiAgICAgICAgdmFsdWU6IG1lc3NhZ2UudmFsdWVcbiAgICAgIH0sICcqJyk7XG4gICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zaW5nJzpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtb2RhbC5pZnJhbWUub3ZlcmZsb3c7XG4gICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgIF8uYWRkQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktaGlkZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNzc0JsdXIuaGFjayhmYWxzZSk7XG4gICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjc3NNb2RhbC5oYWNrKGZhbHNlKTtcbiAgICAgIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogMTAwICk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtcE92ZXJsYXkpO1xuICAgICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1oaWRlJyk7XG4gICAgICBfLnNjcm9sbFRvcChsYXN0U2Nyb2xsVG9wKTtcbiAgICAgIGlmKCBtb2RhbC5pZnJhbWUgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcblxuICAgICAgICBpZiggbW9kYWwucmVmZXJyZXIgKSB7XG4gICAgICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgICBldmVudDogJ2Rpc21pc3MnLFxuICAgICAgICAgICAgbmFtZTogbW9kYWwubWVzc2FnZS5uYW1lXG4gICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggbW9kYWwubWVzc2FnZSApIHtcbiAgICAgICAgICBkZWxldGUgbW9kYWwubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbW9kYWwuaWZyYW1lO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGlIdHRwID0gcmVxdWlyZSgnLi4vY29yZS9hcGktaHR0cCcpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIGNhY2hlID0gW10sXG4gICAgcmVxdWVzdHNDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBzaW11bGF0b3IgKGFtb3VudCwgX29wdGlvbnMsIGNhbGxiYWNrLCBvbkVycm9yKSB7XG5cbiAgaWYoIF8uaXNGdW5jdGlvbihfb3B0aW9ucykgKSB7XG4gICAgb25FcnJvciA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gX29wdGlvbnM7XG4gICAgX29wdGlvbnMgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBfb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFtb3VudDogYW1vdW50XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYXNoID0gYW1vdW50ICsgJywnICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG5cbiAgaWYoIHJlcXVlc3RzQ2FjaGVbaGFzaF0gKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RzQ2FjaGVbaGFzaF0udGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAoY2FsbGJhY2sgfHwgXy5ub29wKSggcmVzdWx0LmNob2ljZXMsIHJlc3VsdC5vcHRpb25zICk7XG4gICAgfSk7XG4gIH1cblxuICBpZiggX29wdGlvbnMudmlldyApIHtcbiAgICBvcHRpb25zLnBhcmFtcy52aWV3ID0gX29wdGlvbnMudmlldztcbiAgfVxuICBpZiggX29wdGlvbnMucGF5ZGF5ICkge1xuICAgIG9wdGlvbnMucGFyYW1zLnBheWRheSA9IF9vcHRpb25zLnBheWRheTtcbiAgfVxuICBpZiggX29wdGlvbnMucHVibGljS2V5ICkge1xuICAgIG9wdGlvbnMucHVibGljS2V5ID0gX29wdGlvbnMucHVibGljS2V5O1xuICB9XG5cbiAgdmFyIGZvdW5kQ2FjaGVkID0gXy5maW5kKGNhY2hlLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmFtb3VudCA9PT0gYW1vdW50O1xuICB9KTtcblxuICByZXF1ZXN0c0NhY2hlW2hhc2hdID0gKCAhX29wdGlvbnMubm9DYWNoZSAmJiBmb3VuZENhY2hlZCA/ICRxLnJlc29sdmUoZm91bmRDYWNoZWQpIDogYXBpSHR0cC5nZXQoJ2luc3RhbG1lbnQtcGxhbi1zaW11bGF0b3InLCBvcHRpb25zICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICBjaG9pY2VzOiByZXNwb25zZS5kYXRhLmNob2ljZXNbMF0uaW5zdGFsbWVudHMsXG4gICAgICAgIG9wdGlvbnM6IHJlc3BvbnNlLmRhdGEub3B0aW9ucyxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXG4gICAgICB9O1xuICAgICAgY2FjaGUucHVzaChyZXN1bHQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAoY2FsbGJhY2sgfHwgXy5ub29wKSggcmVzdWx0LmNob2ljZXMsIHJlc3VsdC5vcHRpb25zICk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogUGVybWlzbyBkZW5lZ2FkbyB1c2FuZG8gbGEgY2xhdmUgcMO6YmxpY2E6ICcgKyByZXNwb25zZS5jb25maWcucHVibGljS2V5KTtcbiAgICAgICAgY29uc29sZS5pbmZvKCdSZXZpc2EgbGEgY29uZmlndXJhY2nDs24gZGUgQXBsYXphbWUsIHBhcmEgY3VhbHF1aWVyIGR1ZGEgcHVlZGVzIGVzY3JpYmlyIGEgaG9sYUBhcGxhemFtZS5jb20nKTtcbiAgICAgIH0gZWxzZSBpZiggXy5rZXkocmVzcG9uc2UsICdkYXRhLmVycm9yLmZpZWxkcy5hbW91bnQuMCcpICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogJyArIHJlc3BvbnNlLmRhdGEuZXJyb3IuZmllbGRzLmFtb3VudFswXSk7XG4gICAgICB9IGVsc2UgaWYoIF8ua2V5KHJlc3BvbnNlLCAnZGF0YS5lcnJvci5tZXNzYWdlJykgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiAnICsgcmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIChvbkVycm9yIHx8IF8ubm9vcCkocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXF1ZXN0c0NhY2hlW2hhc2hdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXVsYXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwelZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBhcGkgPSByZXF1aXJlKCcuL2FwaScpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKSxcbiAgICByZW5kZXJBY2NlcHQgPSBfLnRlbXBsYXRlLmNvbXBpbGUoJ2FwcGxpY2F0aW9uL3ZuZC5hcGxhemFtZTwlIGlmKHNhbmRib3gpeyAlPi5zYW5kYm94PCUgfSAlPi52PCU9IHZlcnNpb24gJT4ranNvbicpLFxuICAgIGFjY2VwdEhlYWRlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHZhciBfYXBpID0gXy5jb3B5KGFwaSk7XG4gICAgICBpZiggJ3ZlcnNpb24nIGluIGNvbmZpZyB8fCAnYXBpVmVyc2lvbicgaW4gY29uZmlnICkge1xuICAgICAgICBfYXBpLnZlcnNpb24gPSAndmVyc2lvbicgaW4gY29uZmlnID8gY29uZmlnLnZlcnNpb24gOiBjb25maWcuYXBpVmVyc2lvbjtcbiAgICAgIH1cbiAgICAgIGlmKCAnc2FuZGJveCcgaW4gY29uZmlnICkge1xuICAgICAgICBfYXBpLnNhbmRib3ggPSBjb25maWcuc2FuZGJveDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJBY2NlcHQoX2FwaSk7XG4gICAgfSxcbiAgICBhdXRob3JpemF0aW9uSGVhZGVyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgY29uZmlnLnB1YmxpY0tleSA9IGNvbmZpZy5wdWJsaWNLZXkgfHwgYXBpLnB1YmxpY0tleTtcbiAgICAgIHJldHVybiAnQmVhcmVyICcgKyBjb25maWcucHVibGljS2V5O1xuICAgIH07XG5cbnZhciBhcGlIdHRwID0ge307XG5cbl8uZWFjaChbJ2dldCcsICdkZWxldGUnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICBhcGlIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAocGF0aCwgb3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBfLmpvaW5QYXRoKGFwaS5ob3N0LCBwYXRoKTtcbiAgICByZXR1cm4gaHR0cFttZXRob2RdKHVybCwgXy5tZXJnZShvcHRpb25zLCB7IGhlYWRlcnM6IHtcbiAgICAgICAgeEFqc1ZlcnNpb246IGFwelZlcnNpb24sXG4gICAgICAgIGFjY2VwdDogYWNjZXB0SGVhZGVyLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyXG4gICAgICB9IH0pICk7XG4gIH07XG59KTtcblxuXy5lYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICBhcGlIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBfLmpvaW5QYXRoKGFwaS5ob3N0LCBwYXRoKTtcbiAgICByZXR1cm4gaHR0cFttZXRob2RdKHVybCwgZGF0YSwgXy5tZXJnZShvcHRpb25zLCB7IGhlYWRlcnM6IHtcbiAgICAgICAgeEFqc1ZlcnNpb246IGFwelZlcnNpb24sXG4gICAgICAgIGFjY2VwdDogYWNjZXB0SGVhZGVyLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyXG4gICAgICB9IH0pICk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcGlIdHRwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaG9zdDogJ2h0dHBzOi8vYXBpLmFwbGF6YW1lLmNvbS8nLFxuICAvLyBob3N0OiAnaHR0cHM6Ly9hcGkuYXBsYXphbWUuY29tLycsXG4gIHN0YXRpY1VybDogJ2h0dHBzOi8vYXBsYXphbWUuY29tL3N0YXRpYy8nLFxuICB2ZXJzaW9uOiAxLFxuICBjaGVja291dFZlcnNpb246IDEsXG4gIHNhbmRib3g6IGZhbHNlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXzogcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgaW5pdDogcmVxdWlyZSgnLi9pbml0JyksXG4gIGFwaUdldDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLmdldCxcbiAgYXBpUG9zdDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLnBvc3QsXG4gIGFwaURlbGV0ZTogcmVxdWlyZSgnLi9hcGktaHR0cCcpWydkZWxldGUnXSxcbiAgYXBpUHV0OiByZXF1aXJlKCcuL2FwaS1odHRwJykucHV0LFxuICB2ZXJzaW9uOiByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4vYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyk7XG5cbmZ1bmN0aW9uIGluaXQgKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLnZlcnNpb24gPT09ICdzdHJpbmcnICkge1xuICAgIHZhciBtYXRjaFZlcnNpb24gPSBvcHRpb25zLnZlcnNpb24ubWF0Y2goL152PyhcXGQpKFxcLihcXGQpKT8kLyk7XG5cbiAgICBpZiggIW1hdGNoVmVyc2lvbiApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVyc2lvbiBtaXNtYXRjaCwgc2hvdWxkIGJlIGxpa2UgXFwndjEuMlxcJycpO1xuICAgIH1cblxuICAgIG9wdGlvbnMudmVyc2lvbiA9IE51bWJlcihtYXRjaFZlcnNpb25bMV0pO1xuXG4gICAgaWYoIG1hdGNoVmVyc2lvblszXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgb3B0aW9ucy5jaGVja291dFZlcnNpb24gPSBOdW1iZXIobWF0Y2hWZXJzaW9uWzNdKTtcbiAgICB9XG4gIH1cblxuICBpZiggdHlwZW9mIG9wdGlvbnMuc2FuZGJveCA9PT0gJ3N0cmluZycgKSB7XG4gICAgb3B0aW9ucy5zYW5kYm94ID0gb3B0aW9ucy5zYW5kYm94ID09PSAndHJ1ZSc7XG4gIH1cblxuICBpZiggdHlwZW9mIG9wdGlvbnMuYW5hbHl0aWNzID09PSAnc3RyaW5nJyApIHtcbiAgICBvcHRpb25zLmFuYWx5dGljcyA9IG9wdGlvbnMuYW5hbHl0aWNzID09PSAndHJ1ZSc7XG4gIH1cblxuICBfLmV4dGVuZChhcGksIG9wdGlvbnMpO1xuXG4gIF8ubG9nKCdhcGxhemFtZS5pbml0JywgYXBpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuXG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgIHNjcmlwdCA9IF8uY3VycmVudFNjcmlwdCxcbiAgICAgIGRhdGFBcGxhemFtZSA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBsYXphbWUnKSxcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHQuc3JjICYmICgvXFw/Ly50ZXN0KHNjcmlwdC5zcmMpID8gXy5kZXNlcmlhbGl6ZShzY3JpcHQuc3JjLm1hdGNoKC8oLio/KVxcPyguKikvKVsyXSkgOiB7fSkgfHwge307XG5cbiAgaWYoIG9wdGlvbnMuc2FuZGJveCApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJyB8fCBvcHRpb25zLnNhbmRib3ggPT09ICcxJztcbiAgfVxuXG4gIGlmKCBkYXRhQXBsYXphbWUgKSB7XG5cbiAgICBpZiggL1xcOi8udGVzdChkYXRhQXBsYXphbWUpICkge1xuICAgICAgZGF0YUFwbGF6YW1lLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICB2YXIga2V5cyA9IHBhcnQubWF0Y2goL14oW15cXDpdKylcXDooLiopLyk7XG4gICAgICAgIG9wdGlvbnNba2V5c1sxXS50cmltKCldID0ga2V5c1syXS50cmltKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoICFvcHRpb25zLnB1YmxpY0tleSApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwdWJsaWNLZXkgbWlzc2luZyBpbiBkYXRhLWFwbGF6YW1lJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucHVibGljS2V5ID0gZGF0YUFwbGF6YW1lO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0JykgKSB7XG4gICAgICBvcHRpb25zLmhvc3QgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVyc2lvbicpICkge1xuICAgICAgb3B0aW9ucy52ZXJzaW9uID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJzaW9uJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpICkge1xuICAgICAgb3B0aW9ucy5zYW5kYm94ID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJykgKSB7XG4gICAgICBvcHRpb25zLmFuYWx5dGljcyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljLXVybCcpICkge1xuICAgICAgb3B0aW9ucy5zdGF0aWNVcmwgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRpYy11cmwnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpICkge1xuICAgICAgLy8gaWYoIHR5cGVvZiBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIC8vIH1cblxuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKTtcbiAgICAgIC8vIF8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXShhcGxhemFtZSk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cblxuICBhcGxhemFtZS5pbml0KG9wdGlvbnMpO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcblxuICBmdW5jdGlvbiBidXR0b25zTG9va3VwIChlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgaWYoICFlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBidG5zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hcGxhemFtZS1idXR0b25dJyk7XG5cbiAgICBpZiggYnRucy5sZW5ndGggKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnLmJ0bihzKScsIGJ0bnMpO1xuICAgICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICAgIF8uZWFjaChidG5zLCBmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcuYnRuJywgYXJndW1lbnRzLCBidG5zKTtcbiAgICAgICAgdmFyIGJ0bklkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hcGxhemFtZS1idXR0b24nKSxcbiAgICAgICAgICAgIGJ0blBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1hcGxhemFtZS1idXR0b24nICsgKCBidG5JZCA/ICgnPVxcXCInICsgYnRuSWQgKyAnXFxcIicpIDogJycgKSArICddLCBbZGF0YS1hcGxhemFtZS1idXR0b24taW5mbycgKyAoIGJ0bklkID8gKCc9XFxcIicgKyBidG5JZCArICdcXFwiJykgOiAnJyApICsgJ10nLFxuICAgICAgICAgICAgICBwYXJlbnQ6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JyksXG4gICAgICAgICAgICAgIHB1YmxpY0tleTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaWMta2V5JyksXG4gICAgICAgICAgICAgIGFtb3VudDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSxcbiAgICAgICAgICAgICAgY3VycmVuY3k6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVuY3knKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHNhbmRib3g6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpID8gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgPT09ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgY291bnRyeTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudHJ5JykgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHByb21pc2VzLnB1c2goIGFwbGF6YW1lLmJ1dHRvbihidG5QYXJhbXMpICk7XG4gICAgICB9KTtcblxuICAgICAgaWYoIHByb21pc2VzLmxlbmd0aCApIHtcbiAgICAgICAgcmV0dXJuICRxLmFsbChwcm9taXNlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHEucmVzb2x2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGJ1dHRvbnNMb29rdXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF8ubGl2ZURPTS5zdWJzY3JpYmUoYnV0dG9uc0xvb2t1cCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b25zTG9va3VwO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuXG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgICAgRXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzLXdyYXBwZXInKSxcbiAgICAgIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoIG1heC13aWR0aDogNzY3cHggKScpLFxuICAgICAgZWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4gIGZ1bmN0aW9uIGdldFF0eSAocXR5U2VsZWN0b3IpIHtcbiAgICBpZiggIV8uaXNTdHJpbmcocXR5U2VsZWN0b3IpICkge1xuICAgICAgY29uc29sZS53YXJuKCd3YXJuaW5nOiBkYXRhLXF0eSBzaG91bGQgYmUgYW4gc3RyaW5nLiBwZTogZm9ybSNhcnRpY2xlIC5maW5hbC1wcmljZSAnKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgcXR5RWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgcXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UgKyAnXFxuZGF0YS1xdHkgc2hvdWxkIGJlIGFuIHN0cmluZy4gcGU6IGZvcm0jYXJ0aWNsZSAuZmluYWwtcHJpY2UgJyk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzd2l0Y2goIHF0eUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC52YWx1ZSApO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bc2VsZWN0ZWRdJykudmFsdWUgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNtc1ByaWNlU2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSAuc3BlY2lhbC1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSAucmVndWxhci1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJyNwcm9kdWN0LWluZm8gLnNwZWNpYWwtcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICcjcHJvZHVjdC1pbmZvIC5yZWd1bGFyLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnZm9ybSNidXlfYmxvY2sgI291cl9wcmljZV9kaXNwbGF5JywgLy8gcHJlc3Rhc2hvcFxuICAgICcjbWFpbiBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL09mZmVyXCJdIC5wcmljZSAuYW1vdW50JyAvLyB3b29jb21tZXJjZVxuICBdLFxuICBjbXNRdHlTZWxlY3RvciA9IFtcbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIGlucHV0W25hbWU9XCJxdHlcIl0nLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jYnV5X2Jsb2NrIGlucHV0W25hbWU9XCJxdHlcIl0nLCAvLyBwcmVzdGFzaG9wXG4gICAgJ2Zvcm0jcHJvZHVjdC1vcHRpb25zLWZvcm0gYnV0dG9uW2RhdGEtaWQ9cXR5XScsIC8vIGN1c3RvbVxuICAgICcjbWFpbiBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIGZvcm0uY2FydCBpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nIC8vIHdvb2NvbW1lcmNlXG4gIF07XG5cbiAgZnVuY3Rpb24gbWF0Y2hTZWxlY3RvciAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICBmdW5jdGlvbiBhbW91bnRHZXR0ZXIgKHdpZGdldEVsZW1lbnQpIHtcbiAgICB2YXIgcHJpY2VTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXG4gICAgICAgIHF0eVNlbGVjdG9yID0gd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcXR5JyksXG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gZmFsc2U7XG5cbiAgICBpZiggcHJpY2VTZWxlY3RvciApIHtcbiAgICAgIC8vIHRyeXtcbiAgICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwcmljZVNlbGVjdG9yKTtcbiAgICAgIC8vIH0gY2F0Y2goZXJyKSB7XG4gICAgICAvLyAgIHByaWNlU2VsZWN0b3IgPSBudWxsO1xuICAgICAgLy8gICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgLy8gfVxuICAgICAgaWYoIHF0eVNlbGVjdG9yICkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdHlTZWxlY3Rvcik7XG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgcXR5U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJpY2VTZWxlY3RvciA9IF8uZmluZChjbXNQcmljZVNlbGVjdG9yLCBtYXRjaFNlbGVjdG9yKTtcblxuICAgICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAgIHF0eVNlbGVjdG9yID0gXy5maW5kKGNtc1F0eVNlbGVjdG9yLCBtYXRjaFNlbGVjdG9yKTtcbiAgICAgICAgYXV0b0Rpc2NvdmVyZWQgPSB0cnVlO1xuXG4gICAgICAgIF8ubG9nKCdhdXRvLWRpc2NvdmVyZWQgcHJpY2Ugc2VsZWN0b3InLCBwcmljZVNlbGVjdG9yLCBxdHlTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdldHRlciA9IHByaWNlU2VsZWN0b3IgPyBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcXR5ID0gcXR5U2VsZWN0b3IgPyBnZXRRdHkoIHF0eVNlbGVjdG9yICkgOiAxLCBwcmljZUVsZW1lbnQ7XG4gICAgICB0cnkge1xuICAgICAgICBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBwcmljZVNlbGVjdG9yICk7XG4gICAgICB9IGNhdGNoKGVycikge31cblxuICAgICAgdmFyIGFtb3VudCA9IHByaWNlRWxlbWVudCA/IHByaWNlRWxlbWVudC52YWx1ZSA6ICcwJztcblxuICAgICAgaWYoIHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICBpZiggIS9cXGQrWywuXVxcZCsvLnRlc3QocHJpY2VFbGVtZW50LnRleHRDb250ZW50KSAmJiBwcmljZUVsZW1lbnQuY2hpbGRyZW4gJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICBhbW91bnQgPSAnJztcblxuICAgICAgICAgIHZhciBwYXJ0ID0gcHJpY2VFbGVtZW50LmZpcnN0Q2hpbGQsIG1hdGNoZWQ7XG5cbiAgICAgICAgICB3aGlsZSggcGFydCApIHtcbiAgICAgICAgICAgIGlmKCAvWywuXS8udGVzdChhbW91bnQpICkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVkID0gKCBwYXJ0LnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IFRleHRdJyA/IHBhcnQuZGF0YSA6IHBhcnQudGV4dENvbnRlbnQgKS5tYXRjaCgvW1xcZCwuXSsvKTtcblxuICAgICAgICAgICAgaWYoIG1hdGNoZWQgKSB7XG4gICAgICAgICAgICAgIGFtb3VudCArPSAoYW1vdW50ICYmICEvXlssLl0vLnRlc3QobWF0Y2hlZFswXSkgPyAnLicgOiAnJykgKyBtYXRjaGVkWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJ0ID0gcGFydC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW1vdW50ID0gcHJpY2VFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfLnBhcnNlUHJpY2UoIGFtb3VudCApO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyByZXR1cm4gTnVtYmVyKCB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSApO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBnZXR0ZXIucHJpY2VTZWxlY3RvciA9IHByaWNlU2VsZWN0b3I7XG4gICAgZ2V0dGVyLnF0eVNlbGVjdG9yID0gcXR5U2VsZWN0b3I7XG4gICAgZ2V0dGVyLmF1dG9EaXNjb3ZlcmVkID0gYXV0b0Rpc2NvdmVyZWQ7XG5cbiAgICByZXR1cm4gZ2V0dGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gSWZyYW1lICh1cmwpIHtcbiAgICB2YXIgZWwgPSBfLmdldElGcmFtZSh7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzQwcHgnIH0pLFxuICAgICAgICBpZnJhbWUgPSB0aGlzO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmVsLnNyYyA9IHVybDtcblxuICAgIG5ldyBFdmVudHMgKHRoaXMpO1xuXG4gICAgdGhpcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2xvYWQnLCBudWxsLCB0aGlzKTtcbiAgICB9O1xuXG4gICAgXy5vbk1lc3NhZ2UoJ3NpbXVsYXRvcicsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbWVzc2FnZS5zaW11bGF0b3InLCBlLCBtZXNzYWdlKTtcbiAgICAgIGlmKCBlLnNvdXJjZSA9PT0gZWwuY29udGVudFdpbmRvdyApIHtcbiAgICAgICAgaWZyYW1lLnRyaWdnZXIoJ21lc3NhZ2U6JyArIG1lc3NhZ2UuZXZlbnQsIFttZXNzYWdlXSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdtZXNzYWdlOnJlc2l6ZScsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBtZXNzYWdlLmhlaWdodCArICdweCc7XG4gICAgfSk7XG4gIH1cblxuICBJZnJhbWUucHJvdG90eXBlLm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIF9kYXRhID0gXy5leHRlbmQoe1xuICAgICAgYXBsYXphbWU6ICdzaW11bGF0b3InLFxuICAgICAgZXZlbnQ6IGV2ZW50TmFtZSxcbiAgICAgIG1vYmlsZTogaXNNb2JpbGUubWF0Y2hlc1xuICAgIH0sIGRhdGEgfHwge30pO1xuICAgIGlmKCB0aGlzLmVsLmNvbnRlbnRXaW5kb3cgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaWZyYW1lIG1lc3NhZ2UnLCBldmVudE5hbWUsIF9kYXRhLCB0aGlzKTtcbiAgICAgIHRoaXMuZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShfZGF0YSwgJyonKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdpZnJhbWUgY29udGVudFdpbmRvdyBtaXNzaW5nJywgdGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG1heEluc3RhbG1lbnRzIChwcmV2LCBjaG9pY2UpIHtcbiAgICBpZiggcHJldiA9PT0gbnVsbCApIHtcbiAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaG9pY2UubnVtX2luc3RhbG1lbnRzID4gcHJldi5udW1faW5zdGFsbWVudHMgPyBjaG9pY2UgOiBwcmV2O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpZGdldCAobWV0YSkge1xuICAgIGlmKCAhbWV0YS5vcHRpb25zLndpZGdldCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXRXaWRnZXQuc2VyaWFsID0gZ2V0V2lkZ2V0LnNlcmlhbCA/IGdldFdpZGdldC5zZXJpYWwgKyAxIDogMTtcblxuICAgIHZhciB3aWRnZXQsXG4gICAgICAgIGlkID0gZ2V0V2lkZ2V0LnNlcmlhbDtcblxuICAgIGlmKCBtZXRhLm9wdGlvbnMud2lkZ2V0LnR5cGUgPT09ICdidXR0b24nICkge1xuICAgICAgd2lkZ2V0ID0gbmV3IElmcmFtZSggYXBpLnN0YXRpY1VybCArICd3aWRnZXRzL3NpbXVsYXRvci9zaW11bGF0b3IuaHRtbD8nICsgRGF0ZS5ub3coKSArICcmc2ltdWxhdG9yPScgKyBpZCApO1xuXG4gICAgICB3aWRnZXQub24oJ21lc3NhZ2U6cmVxdWlyZS5jaG9pY2VzIGNob2ljZXMudXBkYXRlJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYoIG1lc3NhZ2UgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAmJiBtZXNzYWdlLnNpbXVsYXRvcklkICE9PSBpZCApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZSwgbWV0YSwgbWVzc2FnZSk7XG4gICAgICAgIHdpZGdldC5tZXNzYWdlKCdjaG9pY2VzJywge1xuICAgICAgICAgIGFtb3VudDogbWV0YS5hbW91bnQsXG4gICAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgb3B0aW9uczogbWV0YS5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHdpZGdldC5vbignY2hvaWNlcy51cGRhdGluZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHdpZGdldC5tZXNzYWdlKCdsb2FkaW5nJyk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBfLnRlbXBsYXRlLnB1dCgnd2lkZ2V0LXJhdycsIHJlcXVpcmUoJy4uLy4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3JykgKTtcbiAgICAgIHdpZGdldCA9IHsgZWw6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIH07XG4gICAgICBuZXcgRXZlbnRzKHdpZGdldCk7XG5cbiAgICAgIHdpZGdldC5lbC5pbm5lckhUTUwgPSBfLnRlbXBsYXRlKCd3aWRnZXQtcmF3Jywge1xuICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICBhbW91bnQ6IG1ldGEuYW1vdW50LFxuICAgICAgICBjaG9pY2U6IG1ldGEuY2hvaWNlcy5yZWR1Y2UobWF4SW5zdGFsbWVudHMsIG51bGwpLFxuICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgIG9wdGlvbnM6IG1ldGEub3B0aW9uc1xuICAgICAgfSk7XG5cbiAgICAgIHdpZGdldC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgICBldmVudDogJ29wZW4nLFxuICAgICAgICAgIG5hbWU6ICdpbnN0YWxtZW50cycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2FyZDogXy50ZW1wbGF0ZS5jb21waWxlKCByZXF1aXJlKCcuLi8uLi8udG1wL3NpbXVsYXRvci90ZW1wbGF0ZXMvbW9kYWwtaW5zdGFsbWVudHMnKSApKHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRDaG9pY2U6IG1ldGEuY2hvaWNlcy5yZWR1Y2UobWF4SW5zdGFsbWVudHMsIG51bGwpLFxuICAgICAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgICAgIGdldEFtb3VudDogXy5nZXRBbW91bnQsXG4gICAgICAgICAgICAgIG1vbnRoczogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbSA+IDEgPyAnbWVzZXMnIDogJ21lcyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LCAnKicpO1xuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aWRnZXQuaWQgPSBpZDtcblxuICAgIHJldHVybiB3aWRnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVdpZGdldCAod2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCBzZWxlY3Rvcikge1xuICAgIGlmKCAhc2VsZWN0b3IgKSB7XG4gICAgICB3aWRnZXRXcmFwcGVyLmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBzZXVkb0xvY2F0b3I7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci50cmltKCkucmVwbGFjZSgvOihcXHcrPykkLywgZnVuY3Rpb24gKG1hdGNoZWQsIGxvY2F0b3IpIHtcbiAgICAgIHBzZXVkb0xvY2F0b3IgPSBsb2NhdG9yO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYoIGVsICkge1xuICAgICAgaWYoIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgIHN3aXRjaCggcHNldWRvTG9jYXRvciApIHtcbiAgICAgICAgICBjYXNlICdhZnRlcic6XG4gICAgICAgICAgICBpZiggZWwubmV4dEVsZW1lbnRTaWJsaW5nICkge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGVsLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiZWZvcmUnOlxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwc2V1ZG9Mb2NhdG9yICcgKyBwc2V1ZG9Mb2NhdG9yICsgJyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV2YWxXaWRnZXQgKHdpZGdldFdyYXBwZXIpIHtcbiAgICB2YXIgbWV0YSwgdXBkYXRlRGF0YSA9IGZhbHNlLCBkZXRlY3RlZEFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucyA9IHt9O1xuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gKSB7XG4gICAgICBtZXRhID0gd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXztcblxuICAgICAgZGV0ZWN0ZWRBbW91bnQgPSBtZXRhLmdldEFtb3VudCgpO1xuICAgICAgaWYoIGRldGVjdGVkQW1vdW50ICYmIG1ldGEuYW1vdW50ICE9PSBkZXRlY3RlZEFtb3VudCApIHtcbiAgICAgICAgdXBkYXRlRGF0YSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpZGdldFdyYXBwZXIsIG1ldGEuYW1vdW50LCBtZXRhLmdldEFtb3VudCgpICk7XG4gICAgICAgIG1ldGEuYW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YSA9IHsgZ2V0QW1vdW50OiBhbW91bnRHZXR0ZXIod2lkZ2V0V3JhcHBlcikgfTtcbiAgICAgIG1ldGEuYW1vdW50ID0gd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgPyBOdW1iZXIod2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykpIDogbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgaWYoIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgICBtZXRhLnF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnbmV3IHdhdGNoZXInKTtcbiAgICAgICAgbWV0YS53YXRjaFF0eSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiggIWRvY3VtZW50LmJvZHkuY29udGFpbnMod2lkZ2V0V3JhcHBlcikgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG1ldGEud2F0Y2hRdHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcXR5ID0gZ2V0UXR5KG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yKTtcbiAgICAgICAgICBpZiggcXR5ICE9PSBtZXRhLnF0eSApIHtcbiAgICAgICAgICAgIG1ldGEucXR5ID0gcXR5O1xuICAgICAgICAgICAgZXZhbFdpZGdldCh3aWRnZXRXcmFwcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSApIHtcbiAgICAgIHNpbXVsYXRvck9wdGlvbnMudmlldyA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKTtcbiAgICB9XG5cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgbWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IgKSB7XG4gICAgICBtZXRhLmFtb3VudCAqPSAoIGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMSApO1xuICAgIH1cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgdXBkYXRlRGF0YSApIHtcbiAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgICBtZXRhLndpZGdldC5tZXNzYWdlKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgICBhcGxhemFtZS5zaW11bGF0b3IoIG1ldGEuYW1vdW50LCBzaW11bGF0b3JPcHRpb25zLCBmdW5jdGlvbiAoX2Nob2ljZXMsIF9vcHRpb25zKSB7XG4gICAgICAgIF9vcHRpb25zLndpZGdldCA9IF9vcHRpb25zLndpZGdldCB8fCB7fTtcbiAgICAgICAgbWV0YS5jaG9pY2VzID0gX2Nob2ljZXM7XG4gICAgICAgIG1ldGEub3B0aW9ucyA9IF9vcHRpb25zO1xuICAgICAgICBtZXRhLndpZGdldCA9IG1ldGEud2lkZ2V0IHx8IGdldFdpZGdldChtZXRhKTtcblxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgIWRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHBsYWNlV2lkZ2V0KG1ldGEud2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhdGlvbicpIHx8IF9vcHRpb25zLndpZGdldC5sb2NhdGlvbiApO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YS53aWRnZXQudHJpZ2dlcignY2hvaWNlcy51cGRhdGUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIG1ldGEud2lkZ2V0Lm1lc3NhZ2UgKSB7XG4gICAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnYWJvcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhtZXRhLndpZGdldC5lbCkgKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IG1ldGEud2lkZ2V0LmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG1ldGEud2lkZ2V0LmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXyA9IG1ldGE7XG4gIH1cblxuICBmdW5jdGlvbiB3aWRnZXRzTG9va3VwIChlbGVtZW50KSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICBlYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXBsYXphbWUtc2ltdWxhdG9yXScpLCBldmFsV2lkZ2V0ICk7XG5cbiAgICByZXR1cm4gcHJvbWlzZXMubGVuZ3RoID8gJHEuYWxsKHByb21pc2VzKSA6ICRxLnJlc29sdmUoKTtcbiAgfVxuXG4gIHdpZGdldHNMb29rdXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBfLmxpdmVET00uc3Vic2NyaWJlKHdpZGdldHNMb29rdXApO1xuICB9KTtcblxuICByZXR1cm4gd2lkZ2V0c0xvb2t1cDtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2Vycm9yRGF0YShlcnIpIHtcbiAgKGNvbnNvbGUuaW5mbyB8fCBjb25zb2xlLmxvZykoJyVjW25vbiBibG9ja2luZyBlcnJvcl0gJWNhcGxhemFtZS5qc1xcblxcbicsICdmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMyNjdCQkQ7JywgJ2NvbG9yOiAjMjY3QkJEOycpO1xuXG4gIHZhciBmaWxlbmFtZSA9IGVyci5maWxlTmFtZSA/IGVyci5maWxlTmFtZS5sYXN0SW5kZXhPZignLycpIDogJzxub3QgZGVmaW5lZD4nO1xuICB2YXIgc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICB2YXIgc3RyID0gJyVjbmFtZTogJWMnICsgZXJyLm5hbWUgK1xuICAgICAgICAgICdcXG4lY0Vycm9yOiAlYycgKyBlcnIubWVzc2FnZSArXG4gICAgICAgICAgJ1xcbiVjRmlsZTogJWMnICsgZmlsZW5hbWU7XG5cbiAgY29uc29sZS5sb2coc3RyLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2NvbG9yOiAjZTc0YzNjOycsICdmb250LXdlaWdodDogYm9sZDsnLCAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6ICNlNzRjM2M7JywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdmb250LXdlaWdodDogbm9ybWFsOycpO1xuICBpZiggZXJyLnN0YWNrICkge1xuICAgIGNvbnNvbGUubG9nKCclYycgKyBlcnIuc3RhY2ssICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmVlOyBsaW5lLWhlaWdodDogMjsnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHRyeXsgZnVuYygpOyB9XG4gIGNhdGNoKGVycikge1xuICAgIF9lcnJvckRhdGEoZXJyKTtcbiAgfVxufTtcbiIsIlxuZnVuY3Rpb24gdGhvdXNhbmRzKGFtb3VudCkge1xuICBpZiggL1xcZHszfVxcZCsvLnRlc3QoYW1vdW50KSApIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKGFtb3VudC5yZXBsYWNlKC8oXFxkezN9PykoXFwufCQpLywgJy4kJicpKTtcbiAgfVxuICByZXR1cm4gYW1vdW50O1xufVxuXG5mdW5jdGlvbiBnZXRBbW91bnQgKGFtb3VudCkge1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgaWYoIGFtb3VudCA8IDAgKSB7XG4gICAgcHJlZml4ID0gJy0nO1xuICAgIGFtb3VudCA9IDAgLSBhbW91bnQ7XG4gIH1cblxuICBpZiggIWFtb3VudCApIHtcbiAgICByZXR1cm4gJzAsMDAnO1xuICB9IGVsc2UgaWYoIGFtb3VudCA8IDEwICkge1xuICAgIHJldHVybiAnMCwwJyArIGFtb3VudDtcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMDAgKSB7XG4gICAgcmV0dXJuICcwLCcgKyBhbW91bnQ7XG4gIH1cbiAgcmV0dXJuIHByZWZpeCArICgnJyArIGFtb3VudCkucmVwbGFjZSgvKFxcZCopKFxcZHsyfSkkLywgZnVuY3Rpb24gKG1hdGNoZWQsIG1haW4sIHRhaWwpIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKG1haW4pICsgJywnICsgdGFpbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUHJpY2UgKHByaWNlKSB7XG4gIHZhciBtYXRjaGVkID0gcHJpY2UubWF0Y2goLygoXFxkK1ssLiBdKSopKFxcZCspLyksXG4gICAgICBhbW91bnQsIG1haW4sIHRhaWw7XG5cbiAgaWYoIG1hdGNoZWQgKSB7XG4gICAgdGFpbCA9IG1hdGNoZWRbM107XG4gICAgbWFpbiA9IG1hdGNoZWRbMV0ucmVwbGFjZSgvW15cXGRdL2csICcnKTtcblxuICAgIGlmKCAhbWFpbiApIHtcbiAgICAgIHJldHVybiBOdW1iZXIoIHRhaWwgKyAnMDAnICk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoID09PSAxICkge1xuICAgICAgcmV0dXJuIE51bWJlcihtYWluICsgdGFpbCArICcwJyk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoICE9PSAyICkge1xuICAgICAgdGFpbCArPSAnMDAnO1xuICAgIH1cblxuICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwpO1xuICB9XG5cbiAgaWYoIC9cXGQrLy50ZXN0KHByaWNlKSApIHtcbiAgICByZXR1cm4gTnVtYmVyKCBwcmljZS5yZXBsYWNlKC9bXlxcZF0rL2csICcnKSArICcwMCcgKTtcbiAgfVxuXG4gIGNvbnNvbGUud2FybigncHJpY2UgZGF0YSBtaXNtYXRjaCcsIHByaWNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldEFtb3VudDogZ2V0QW1vdW50LFxuXHRwYXJzZVByaWNlOiBwYXJzZVByaWNlXG59O1xuIiwiXG5mdW5jdGlvbiBfcmVhZHkgKF9jYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIGNhbGxiYWNrID0gZGVsYXkgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoX2NhbGxiYWNrLCBkZWxheSk7IH0gOiBfY2FsbGJhY2s7XG5cbiAgaWYgKC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICBjYWxsYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCdWJibGVDbG9zZSAoc3RyKSB7XG4gIHZhciBsZXZlbCA9IDA7XG5cbiAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgaWYoIHN0cltpXSA9PT0gJygnICkge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYoIHN0cltpXSA9PT0gJyknICkge1xuICAgICAgaWYoIGxldmVsID09PSAwICkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBoYXNTZWxlY3RvciAoc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzcGxpdEhhcyA9IHNlbGVjdG9yLnNwbGl0KCc6aGFzKCcpO1xuXG4gIHJldHVybiBzcGxpdEhhcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZXMsIHBhcnRpYWwpIHtcblxuICAgIHZhciBjbG9zZVBvc2l0aW9uID0gZmluZEJ1YmJsZUNsb3NlKHBhcnRpYWwpLFxuICAgICAgICBoYXNGaWx0ZXIgPSBwYXJ0aWFsLnN1YnN0cigwLCBjbG9zZVBvc2l0aW9uKSxcbiAgICAgICAgcGFydGlhbFF1ZXJ5ID0gcGFydGlhbC5zdWJzdHIoY2xvc2VQb3NpdGlvbiArIDEpLnRyaW0oKTtcblxuICAgIGlmKCBjbG9zZVBvc2l0aW9uID09PSAtMSApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFsZm9ybWVkIHNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGhhc0ZpbHRlcik7XG4gICAgfSk7XG5cbiAgICBpZiggcGFydGlhbFF1ZXJ5ICkge1xuICAgICAgdmFyIHN1Ym1hdGNoZXMgPSBbXTtcblxuICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIFtdLnB1c2guYXBwbHkoc3VibWF0Y2hlcywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcnRpYWxRdWVyeSkgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3VibWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcblxuICB9LCBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNwbGl0SGFzLnNoaWZ0KCkgKSApICk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICAvLyAndHI6aGFzKD4gLnJvdykgZGl2OmhhcyhzcGFuKSBpbWcnLnNwbGl0KCc6aGFzKCcpO1xuICBpZiggIXNlbGVjdG9yICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmKCAhL1xcOmhhc1xcKC8udGVzdChzZWxlY3RvcikgKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoIChyb290RWxlbWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSApO1xuICB9XG5cbiAgcmV0dXJuIGhhc1NlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gY3NzUXVlcnkgKF9zZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9ycyA9IF9zZWxlY3Rvci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGxpc3QsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KCBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCkgKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb3AgKHZhbHVlKSB7XG4gIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQgKGVsKSB7XG4gIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cbiAgd2hpbGUoIGNoaWxkICkge1xuICAgIGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuLy8gdmFyIF9jbGFzc0FjdGlvbnMgPSB7XG4vLyAgIGFkZDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgX2NsYXNzQWN0aW9ucy5yZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4vLyAgIH0sXG4vLyAgIHJlbW92ZTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX0NMRUFOQ0xBU1MsJycpO1xuLy8gICB9LFxuLy8gICBhY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24sIHRvb2xzKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICAgIGlmKCBjbGFzc05hbWUuaW5kZXhPZignICcpID49IDAgKSB7XG4vLyAgICAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNuKSB7XG4vLyAgICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNuKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBfY2xhc3NBY3Rpb25zW2FjdGlvbl0oZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiB0b29scztcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9O1xuXG5mdW5jdGlvbiB3cml0ZUlmcmFtZSAoaWZyYW1lLCBjb250ZW50KSB7XG4gIHZhciBpZnJhbWVEb2MgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgdHJ5IHsgaWZyYW1lRG9jLmNoYXJzZXQgPSAnVVRGLTgnOyB9IGNhdGNoKGVycikge31cbiAgaWZyYW1lRG9jLm9wZW4oKTtcbiAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuICBpZnJhbWVEb2MuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0SUZyYW1lIChpZnJhbWVTdHlsZXMpIHtcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKS5leHRlbmQoaWZyYW1lLnN0eWxlLCBpZnJhbWVTdHlsZXMgfHwge30pO1xuXG4gIGlmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgLy8gaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICB9O1xuICByZXR1cm4gaWZyYW1lO1xufVxuXG52YXIgXyA9IHtcbiAgcmVhZHk6IF9yZWFkeSxcbiAgZ2V0SUZyYW1lOiBnZXRJRnJhbWUsXG4gIHdyaXRlSWZyYW1lOiB3cml0ZUlmcmFtZSxcbiAgY3NzUXVlcnk6IGNzc1F1ZXJ5LFxuICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgY2xlYXJFbGVtZW50OiBjbGVhckVsZW1lbnQsXG4gIGVsZW1lbnREYXRhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5kYXRhc2V0ID8gZnVuY3Rpb24gKGVsLCBrZXksIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5kYXRhc2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmRhdGFzZXRba2V5XTtcbiAgfSA6IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5KTtcbiAgfSxcbn07XG5cbi8vIHZhciBhZGRDbGFzcyA9IF9jbGFzc0FjdGlvbnMuYWN0aW9uKCdhZGQnLCBfICksXG4vLyAgICAgcmVtb3ZlQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbigncmVtb3ZlJywgXyApO1xuXG4vLyBfLmFkZENsYXNzID0gYWRkQ2xhc3M7XG4vLyBfLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5cbl8uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xufTtcblxuXy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIFtwYXJzZUludChyZXN1bHRbMV0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksIHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXTtcbn1cblxuZnVuY3Rpb24gYnJpZ2h0bmVzcyAoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGhleFRvUmdiKGNvbG9yKTtcbiAgdmFyIG8gPSBNYXRoLnJvdW5kKCgocGFyc2VJbnQocmdiWzBdKSAqIDI5OSkgKyAocGFyc2VJbnQocmdiWzFdKSAqIDU4NykgKyAocGFyc2VJbnQocmdiWzJdKSAqIDExNCkpIC8xMDAwKTtcbiAgcmV0dXJuIG8gPCAxMDAgPyAnZGFyaycgOiAoIG8gPiAyMzAgPyAnbGlnaHQnIDogJ21lZGl1bScgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhleFRvUmdiOiBoZXhUb1JnYixcbiAgYnJpZ2h0bmVzczogYnJpZ2h0bmVzc1xufTtcbiIsIlxuXG52YXIgaW1wb3J0YW50Q1NTID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgcmV0dXJuIGNzcy5yZXBsYWNlKC87L2csICcgIWltcG9ydGFudDsnKS5yZXBsYWNlKC86KFteOjtdKz8pfS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICc6JyArIHZhbHVlICsgJyAhaW1wb3J0YW50O30nO1xuICAgICAgfSkucmVwbGFjZSgvKFxcZCslfGZyb218dG8peyhbXn1dKykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHBvcywgY29udGVudCkge1xuICAgICAgICByZXR1cm4gcG9zICsgJ3snICsgY29udGVudC5yZXBsYWNlKC8gIWltcG9ydGFudDsvZywgJzsnKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY3NzSGFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FjaGUgPSB7fSxcbiAgICAgICAgICBoYWNrcyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9vdmVybGF5JykpLFxuICAgICAgICAgICAgYmx1cjogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2JsdXInKSksXG4gICAgICAgICAgICBsb2dvOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbG9nbycpKSxcbiAgICAgICAgICAgIG1vZGFsOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbW9kYWwnKSlcbiAgICAgICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnY3NzSGFja3MnLCBoYWNrcyk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYWNrIChoYWNrTmFtZSkge1xuICAgICAgICBpZiggIWNhY2hlW2hhY2tOYW1lXSApIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGhhY2tzW2hhY2tOYW1lXTtcblxuICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBzdHlsZS5oYWNrID0gZnVuY3Rpb24gKGVuYWJsZSkge1xuICAgICAgICAgICAgZW5hYmxlID0gZW5hYmxlID09PSB1bmRlZmluZWQgfHwgZW5hYmxlO1xuXG4gICAgICAgICAgICBpZiggZW5hYmxlICkge1xuICAgICAgICAgICAgICBpZiggZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmKCAhZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNhY2hlW2hhY2tOYW1lXSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtoYWNrTmFtZV07XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzSGFjaztcbiIsIlxuXG5mdW5jdGlvbiBfa2V5IChvLCBrZXksIHZhbHVlKSB7XG5cdGtleS5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGssIGksIGtleXMpIHtcblx0XHRpZiggaSA9PT0ga2V5cy5sZW5ndGggLSAxICkge1xuXHRcdFx0b1trXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvW2tdID0gb1trXSB8fCB7fTtcblx0XHRcdG8gPSBvW2tdO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSAodGV4dCkge1xuXHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9fKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIGxldHRlcikge1xuXHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplIChxdWVyeXN0cmluZywgZGVjb2RlKSB7XG5cblx0dmFyIHJlc3VsdCA9IHt9O1xuXG5cdHF1ZXJ5c3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAoa2V5VmFsdWUpIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGtleVZhbHVlLm1hdGNoKC8oLio/KT0oLiopLyk7XG5cblx0XHRpZiggIW1hdGNoZWQgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBwYXJzZSAnICsga2V5VmFsdWUpO1xuXHRcdH1cblxuXHRcdF9rZXkocmVzdWx0LCBjYW1lbENhc2UobWF0Y2hlZFsxXSksIGRlY29kZSA/IGRlY29kZVVSSShtYXRjaGVkWzJdKSA6IG1hdGNoZWRbMl0gKTtcblxuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdXNjcmlwdG9ycyA9IFtdLFxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5pdExpdmVET00gKCkge1xuXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBuID0gc3VzY3JpcHRvcnMubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcbiAgICAgICAgc3VzY3JpcHRvcnNbaV0oZXZlbnQudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgaWYoICFydW5uaW5nICkge1xuICAgICAgaW5pdExpdmVET00odHJ1ZSk7XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIHN1c2NyaXB0b3JzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuICB9XG59O1xuIiwiXG5cbmZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KCl7XG4gICAgdHJ5IHsgdGhyb3cgRXJyb3IoJycpOyB9IGNhdGNoKGVycikgeyByZXR1cm4gZXJyOyB9XG59XG5cbmZ1bmN0aW9uIGxvZyAoKSB7XG4gIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdCgpLFxuICAgICAgY2FsbGVyX2xpbmUgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpWzRdIHx8ICcnLFxuICAgICAgaW5kZXggPSBjYWxsZXJfbGluZS5pbmRleE9mKCdhdCAnKTtcblxuICBsb2cuaGlzdG9yeS5wdXNoKHtcbiAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICB0cmFjazoge1xuICAgICAgY2FsbGVyX2xpbmU6IGNhbGxlcl9saW5lLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgY2xlYW46IGNhbGxlcl9saW5lLnNsaWNlKGluZGV4ICsgMiwgY2FsbGVyX2xpbmUubGVuZ3RoKVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxubG9nLmhpc3RvcnkgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2c7XG4iLCJcbnZhciBtZXNzYWdlVGFyZ2V0ID0ge30sXG4gICAgc2hvd0xvZ3MgPSBmYWxzZTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICB2YXIgbWVzc2FnZSA9IGUuZGF0YSxcbiAgICAgIGxpc3RlbmVycyA9IG1lc3NhZ2VUYXJnZXRbbWVzc2FnZS5hcGxhemFtZV07XG5cbiAgaWYoICFsaXN0ZW5lcnMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIHNob3dMb2dzICYmICFlLnVzZWQgKSB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLCBsaXN0ZW5lcnMpO1xuICB9XG5cbiAgaWYoICFlLnVzZWQgKSB7XG4gICAgZS51c2VkID0gdHJ1ZTtcbiAgICBmb3IoIHZhciBpID0gMCwgbiA9IGxpc3RlbmVycy5sZW5ndGggOyBpIDwgbiA7IGkrKyApIHtcbiAgICAgIGxpc3RlbmVyc1tpXShlLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn0sIHRydWUpO1xuXG5mdW5jdGlvbiBvbk1lc3NhZ2UgKHRhcmdldCwgaGFuZGxlciwgbG9ncykge1xuICBzaG93TG9ncyA9IGxvZ3M7XG4gIGlmKCB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdIHx8IFtdO1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5wdXNoKGhhbmRsZXIpO1xuICB9XG59XG5cbm9uTWVzc2FnZS5vZmYgPSBmdW5jdGlvbiAodGFyZ2V0LCBoYW5kbGVyKSB7XG4gIGlmKCB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdIHx8IFtdO1xuICAgIHZhciBpID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYoIGkgIT09IC0xICkge1xuICAgICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdLnNwbGljZShpLDEpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvbk1lc3NhZ2U7XG4iLCJcbmZ1bmN0aW9uIHRlbXBsYXRlIChuYW1lLCBkYXRhKXtcbiAgcmV0dXJuIHRlbXBsYXRlLmNhY2hlW25hbWVdKGRhdGEgfHwge30pO1xufVxuXG50ZW1wbGF0ZS5jYWNoZSA9IHt9O1xuXG50ZW1wbGF0ZS5jb21waWxlID0gZnVuY3Rpb24gKHRtcGwpIHtcbiAgLy8gSm9obiBSZXNpZyBtaWNyby10ZW1wbGF0ZVxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvYmonLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAndmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307JyArXG5cbiAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XG4gICAgJ3dpdGgob2JqKXtwLnB1c2goXFwnJyArXG5cbiAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgIHRtcGwudHJpbSgpXG4gICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJyAnKVxuICAgICAgLnNwbGl0KCc8JScpLmpvaW4oJ1xcdCcpXG4gICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCAnJDFcXHInKVxuICAgICAgLnJlcGxhY2UoL1xcdD0oLio/KSU+L2csICdcXCcsJDEsXFwnJylcbiAgICAgIC5zcGxpdCgnXFx0Jykuam9pbignXFwnKTsnKVxuICAgICAgLnNwbGl0KCclPicpLmpvaW4oJ3AucHVzaChcXCcnKVxuICAgICAgLnNwbGl0KCdcXHInKS5qb2luKCdcXFxcXFwnJykgKyAnXFwnKTt9cmV0dXJuIHAuam9pbihcXCdcXCcpOycpO1xufTtcblxudGVtcGxhdGUucHV0ID0gZnVuY3Rpb24gKG5hbWUsIHRtcGwpIHtcbiAgdGVtcGxhdGUuY2FjaGVbbmFtZV0gPSB0ZW1wbGF0ZS5jb21waWxlKHRtcGwpO1xufTtcblxudGVtcGxhdGUubG9va3VwID0gZnVuY3Rpb24gKCkge1xuICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi94LXRlbXBsYXRlXCJdW2RhdGEtdGVtcGxhdGVdJyksIGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdGVtcGxhdGUucHV0KHRtcGwuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyksIHRtcGwudGV4dCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcbiIsIlxudmFyIF8gPSByZXF1aXJlKCd2YW5pbGxhLXRvb2xzJyk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL2xpc3RzJyksXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL3BhdGgnKSxcbiAgcmVxdWlyZSgnLi9jb2xvcnMnKSxcbiAgcmVxdWlyZSgnLi9icm93c2VyLXRvb2xzJyksXG4gIHJlcXVpcmUoJy4vYW1vdW50LXByaWNlJyksXG4gIHtcbiAgICBsaXZlRE9NOiByZXF1aXJlKCcuL2xpdmUtZG9tJyksXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUnKSxcbiAgICBvbk1lc3NhZ2U6IHJlcXVpcmUoJy4vbWVzc2FnZS1saXN0ZW5lcicpLFxuICAgIGRlc2VyaWFsaXplOiByZXF1aXJlKCcuL2Rlc2VyaWFsaXplJylcbiAgfVxuKTtcblxuXy5sb2cgPSByZXF1aXJlKCcuL2xvZycpO1xuXy5ub29wID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIl19