import { combineReducers } from 'redux';

// Dashboard reducers
import dashboardReducer from '../screens/Dashboard/Dashboard.reducers';

const appReducer = combineReducers({
    dashboardReducer,
});

export default appReducer;
