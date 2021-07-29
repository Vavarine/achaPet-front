import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

api.interceptors.request.use(config => {
  const { url, method, baseURL, data } = config;

  console.log(`> [request] ${method} ${url} at ${baseURL}`);

  if (data) {
    console.log(`with data: `, data);
  }

  return config;
});

api.interceptors.response.use(
  response => {
    const { data } = response;
    const { method, url, baseURL } = response.config;

    console.log(`> [response] ${method} ${url} at ${baseURL}`);

    if (data) {
      console.log(`with data: `, data);
    }

    return response;
  },
  error => {
    const { data } = error;
    const { method, url, baseURL } = error.config;

    console.log(`> [response error] ${method} ${url} at ${baseURL}`);

    if (data) {
      console.log(`with data: `, data);
    }

    return Promise.reject(error);
  },
);

export default api;
