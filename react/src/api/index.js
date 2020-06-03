import restClient from './restClient';

/**
 * setToken is filling api clients with token
 * @param  {String} token JWT Token that's been using for API
 */
export function setToken(token) {
    localStorage.setItem('token', token);
    restClient.defaults.headers.Authorization = `Bearer ${token}`;
}

//  clearToken clearing clients from token
export function clearToken() {
    localStorage.removeItem('token');
    restClient.defaults.headers.Authorization = ``;
}
