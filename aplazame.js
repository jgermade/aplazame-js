!function(t){"use strict";function e(){}function n(t){var e;return function(){return e?void 0:(e=!0,t.apply(this,arguments))}}function r(t,e){return e?t.replace(/\{([^\}]+)\}/g,function(t,n){return e[n]}):function(e){return r(t,e)}}function a(){for(var t,e=E.call(arguments),n=E.call(arguments);n;){for(t in n)e[t]=n[t];n=E.call(arguments)}return e}function o(t){var e=t[0].toUpperCase()+t.substr(1);return e.replace(/([a-z])([A-Z])/,function(t,e,n){return e+"-"+n})}function s(t){var e=t[0].toLowerCase()+t.substr(1);return e.replace(/([a-z])-([A-Z])/,function(t,e,n){return e+n})}function c(t,e,n){var r=t&&t.match(z);return r&&("json"===r[3]?JSON.parse(data):"xml"===r[3]?n:e)}function i(t,e){e=e||{},e.headers=e.headers||{},e.url=t;var n=null,r={resolve:[],reject:[]};try{n=new XMLHttpRequest}catch(a){try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(i){n=new ActiveXObject("Microsoft.XMLHTTP")}}if(null===n)throw"Browser does not support HTTP Request";n.open((e.method||"get").toUpperCase(),t);for(var u in e.headers)n.setRequestHeader(o(u),e.headers[u]);n.resolve=function(t){r.resolve.forEach(function(e){e(t)})},n.reject=function(t){r.reject.forEach(function(e){e(t)})};var p;return n.getHeaders=function(){return p||(p=n.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g,function(t,e,r){n.headers[s(e)]=r.trim()})),p},n.onreadystatechange=function(){if("complete"===n.readyState||4===n.readyState){var t={data:c(n.getResponseHeader("content-type"),n.responseText,n.responseXML),status:n.status,headers:n.getHeaders,xhr:n};if(n.status>=200&&n.status<300)n.resolve(t);else{if(!(n.status>=400))throw new Error("Unexpected status code "+n.status);n.reject(t)}}},n.options=e,n.send(e.data),{then:function(t,e){r.resolve.push(t),e instanceof Function&&r.reject.push(e)},error:function(t){r.reject.push(t)}}}function u(t){if(t=t||{},t.version=t.version||y.version,t.sandbox=(void 0===t.sandbox?y.sandbox:t.sandbox)?".sandbox":"",t.paramsStr="",t.params)for(var e in t.params)t.paramsStr+=(t.paramsStr?"&":"?")+e+"="+encodeURIComponent(t.params[e]);return t}function p(t){if(!t)throw new Error("aplazame.init({options}) requires options");if(!t.publicKey)throw new Error("aplazame.init({options}) requires at least the publicKey");a(y,t)}function d(){return y}function f(t){return t=u(t),i(b.host+t.paramsStr,{headers:{accept:r(b.accept,t)}})}function h(t){return t=u(t),i(b.host+t.paramsStr,{method:"post",headers:{accept:r(b.accept,t)}})}function l(t){}function m(){}function v(t,e){var n=t.contentWindow.document;n.open(),n.write(e),n.close()}function w(t){t=a(new m,t||{}),i(t.host).then(function(e){document.body.style.overflow="hidden";var r=e.data.replace(/(src|href)\s*=\s*\"(?!http|\/\/)/g,'$1="'+t.host);console.log("iframeHtml",r);var o=document.createElement("iframe");a(o.style,g),o.frameBorder="0",document.body.appendChild(o),v(o,r),x(window,"message",n(function(e){console.log("message",e.data),"checkout:waiting"===e.data&&e.source.postMessage({checkout:t},"*")}))},function(){console.error("checkout server",t.host,"should be running")})}var g={position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"transparent"},b={host:"https://api.aplazame.com/",accept:"application/vnd.aplazame{sandbox}-v{version}+json"};e.prototype={version:1,sandbox:!1};var y=new e,x=window.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}:window.attachEvent&&function(t,e,n){t.attachEvent("on"+e,n)};if(!x)throw new Error("Your Browser does not support events");var E=[].shift,z=/([^\/]+)\/([^+]+\+)?(.*)/;if(window.http=i,m.prototype={host:"http://checkout.aplazame.com/"},document.querySelector("script[data-aplazame]")){var j=document.querySelector("script[data-aplazame]"),A=j.getAttribute("data-aplazame"),H={};/\s/.test(A)?A.split(",").forEach(function(t){var e=t.match(/^([^\:]+)\:(.*)/);H[e[1].trim()]=e[2].trim()}):(j.getAttribute("data-version")&&(H.version=Number(j.getAttribute("data-version"))),j.getAttribute("data-sandbox")&&(H.sandbox="true"===j.getAttribute("data-sandbox"))),p(H)}t.aplazame={init:p,getEnv:d,checkout:w,button:l,apiGet:f,apiPost:h}}(this);