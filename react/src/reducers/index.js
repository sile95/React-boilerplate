import { combineReducers } from 'redux';

// Auth reducers
import authReducer from '@core/src/utils/Auth/Auth.reducers';

// Dashboard reducers
import dashboardReducer from '../screens/Dashboard/Dashboard.reducers';

const appReducer = combineReducers({
    dashboardReducer,
    authReducer,
});

export default appReducer;
