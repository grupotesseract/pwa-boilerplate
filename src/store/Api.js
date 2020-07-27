import axios from 'axios';

class Api {
  api = null;

  constructor() {
    const baseURL = process.env.REACT_APP_BASE_URL;

    this.api = axios.create({
      baseURL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
  }

  setToken = (token) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  clearToken = () => {
    this.api.defaults.headers.common.Authorization = '';
  };

  post = (route, props) => this.api.post(route, props);

  get = (route, params) => this.api.get(route, { params });

  delete = (route) => this.api.delete(route);
}

export default new Api();
