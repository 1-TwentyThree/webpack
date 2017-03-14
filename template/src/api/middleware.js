import axios from 'axios'

//axios response 可拦截登录和错误
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios
