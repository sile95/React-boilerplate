import api from '@core/src/api/restClient';

export const get = async (url, params = {}) => {
    try {
        const response = await api.get(url, params);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const post = async (url, postData = {}) => {
    try {
        const response = await api.post(url, postData);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const patch = async (url, patchData = {}) => {
    try {
        const response = await api.patch(url, patchData);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const put = async (url, putData = {}, config = {}) => {
    try {
        const response = await api.put(url, putData, config);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const remove = async (url, deleteData = {}) => {
    try {
        const response = await api.delete(url, deleteData);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
