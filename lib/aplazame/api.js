
import http from '../tools/http';

var apiConfig = {
      host: 'https://api.aplazame.com/',
      staticUrl: 'https://aplazame.com/static/',
      version: 1,
      checkoutVersion: 1,
      sandbox: false
    },
    api = http.base(function () {
      return apiConfig.host;
    }, {
      headers: {
        accept: function (config) {
          return 'application/vnd.aplazame' + ( ( config.sandbox ||apiConfig.sandbox ) ? '.sandbox' : '' ) + '.v' + (config.version || apiConfig.version) + '+json';
        },
        authorization: function (config) {
          if( config.publicKey || apiConfig.publicKey ) return 'Bearer ' + ( config.publicKey || apiConfig.publicKey );
        }
      }
    });

api.config = apiConfig;

export default api;
