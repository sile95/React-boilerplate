import { clearToken } from '@api/restClient';
import storage from 'redux-persist/lib/storage';
import { actions as authActions } from '@core/src/utils/Auth/Auth.reducers';

export const signOut = () => (dispatch) => {
    clearToken();
    storage.removeItem('persist:root');
    dispatch({
        type: authActions.START_SIGN_OUT,
    });
};
