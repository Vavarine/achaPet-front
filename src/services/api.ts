import { getTokenState } from './../states/token/index';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://achapet-backend.herokuapp.com',
});

export const formDataApi = axios.create({
  baseURL: 'https://achapet-backend.herokuapp.com',
  headers: {
    'Content-Type': `multipart/form-data`,
  },
});

const AuthorizationMiddleware = config => {
  const token = getTokenState();
  return {
    ...config,
    headers: { ...config.headers, 'x-access-token': token },
  };
};

api.interceptors.request.use(AuthorizationMiddleware);
formDataApi.interceptors.request.use(AuthorizationMiddleware);

// api.interceptors.response.use(
//   response => {
//     const { data } = response;
//     console.log('data :>> ', data);
//     const { method, url, baseURL } = response.config;

//     console.log(`> [response] ${method} ${url}`);

//     return {
//       ...response,
//       headers: {
//         ...response.headers,
//         'x-access-token':
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZW5oYSI6IjEyMzQ1NiIsImlhdCI6MTYzNTY0MjY1OH0.RT3caHpK49BaAFc-VmPahOrSHRfwnKgZ171S_jthnD0',
//       },
//     };
//   },
//   error => {
//     const { data } = error;
//     const { method, url, baseURL } = error.config;

//     console.log(`> [response error] ${method} ${url}`);

//     return Promise.reject(error);
//   },
// );

export default api;
