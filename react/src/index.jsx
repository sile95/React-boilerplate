import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RouterManager from './utils/RouterManager';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss';
import * as env from './utils/enviromentVariables';

const debuggerState = env.default.REDUX_DEBUGGER === 'true';

const store = createStore(
    reducers,
    debuggerState && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 |--------------------------------------------------
 | Main app initialization
 | Preparing Redux for Dashboard with Providers
 | Rendering Dashboard inside wrapper element
 |--------------------------------------------------
 */
ReactDOM.render(
    <Provider store={store}>
        <RouterManager />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
