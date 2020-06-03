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

// add the Auth header to the base API instance once here to avoid repeated code
if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    restClient.defaults.headers.Authorization = `Bearer ${token}`;
}

export default restClient;
