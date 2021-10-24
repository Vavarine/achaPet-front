import axios from 'axios';
import { parseCookies } from 'nookies';

export default function getApiClient(ctx?: any) {
  const { 'achapet.authToken': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://achapet-backend.herokuapp.com',
  });

  api.interceptors.request.use(config => {
    const { url, method, baseURL } = config;
    return config;
  });

  api.interceptors.request.use(config => {
    const { url, method, baseURL, data } = config;

    console.log(`> [request] ${method} ${url}`);

    return config;
  });

  api.interceptors.response.use(
    response => {
      const { data } = response;
      const { method, url, baseURL } = response.config;

      console.log(`> [response] ${method} ${url}`);

      return response;
    },
    error => {
      const { data } = error;
      const { method, url, baseURL } = error.config;

      console.log(`> [response error] ${method} ${url}`);

      return Promise.reject(error);
    },
  );

  if (token) {
    api.defaults.headers['x-access-token'] = token;
  }

  return api;
}
