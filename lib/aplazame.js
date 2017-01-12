
import api from './aplazame/api';

global.aplazame = {
  api: api,
  apiGet: api.get,
  apiPost: api.post,
  apiDelete: api['delete'],
  apiPut: api.put
};
