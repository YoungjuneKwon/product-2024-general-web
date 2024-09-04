import axios from 'axios';

class API {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.authToken = '';
  }

  getConfig() {
    const config = { headers: {} };
    if (this.authToken !== '') {
      config.headers.Authorization = `Bearer ${this.authToken}`;
    }
    return config;
  }

  post(uri, data) {
    return axios.post(this.baseURL + uri, data, this.getConfig());
  }

  get(uri) {
    return axios.get(this.baseURL + uri, this.getConfig());
  }
  
  delete(uri, data) {
    return axios.delete(this.baseURL + uri, {data, ...this.getConfig()});
  }

  updateAuthToken(token) {
    this.authToken = token;
  }

  updateBaseURL(baseURL) {
    this.baseURL = baseURL;
  }

  hasAuthToken() {
    return this.authToken !== '';
  }
}

export default API;
