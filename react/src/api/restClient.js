import axios from 'axios';

/**
 * Preparing rest client for react app
 * Here should be all default params defined
 */
const restClient = axios.create({
    baseURL: process.env.REACT_APP_REST_API,
    timeout: process.env.REACT_APP_API_TIMEOUT,
    // headers: { Accept: ' application/vnd.api+json' }
});

/**
 * setToken is filling api clients with token
 * @param  {String} token JWT Token that's been using for API
 */
const setToken = (token) => {
    localStorage.setItem('token', token);
    restClient.defaults.headers.Authorization = `Bearer ${token}`;
};

//  clearToken clearing clients from token
const clearToken = () => {
    localStorage.removeItem('token');
    delete restClient.defaults.headers.Authorization;
};

// getToken is retreiving token from localStorage
const getToken = () => {
    const token = localStorage.getItem('token');

    if (token) return token;

    return null;
};

// add the Auth header to the base API instance once here to avoid repeated code
if (getToken()) {
    const token = getToken();
    restClient.defaults.headers.Authorization = `Bearer ${token}`;
}

class Api {
    constructor() {
        this.client = restClient;
    }

    get(...params) {
        return this.client.get(...params);
    }

    post(...params) {
        return this.client.post(...params);
    }

    patch(...params) {
        return this.client.patch(...params);
    }

    put(...params) {
        return this.client.put(...params);
    }

    delete(...params) {
        return this.client.delete(...params);
    }
}

export { restClient, getToken, setToken, clearToken };

export default new Api();
