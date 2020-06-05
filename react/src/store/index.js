import { createStore, applyMiddleware } from 'redux';
import * as env from '@core/src/utils/enviromentVariables';
import thunk from 'redux-thunk';
import combinedReducers from '@core/src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const debuggerState = env.default.REDUX_DEBUGGER === 'true';

const middleware = debuggerState
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const reducer = persistReducer(
    { key: 'state', storage, whitelist: ['authReducer'] },
    combinedReducers
);

const store = createStore(reducer, middleware);

const persistor = persistStore(store);

export { store, persistor };
