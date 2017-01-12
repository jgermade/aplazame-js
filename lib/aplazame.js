
import api from './aplazame/api';
import init from './aplazame/init';

var aplazame = {
  api: api,
  init: init
};

['get', 'post', 'put', 'delete'].forEach(function (method) {
  aplazame['api' + method[0].toUpperCase() + method.substr(1) ] = function () {
    return aplazame.api[method].apply(this, arguments);
  };
});

global.aplazame = aplazame;
