import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@core/src/store';
import RouterManager from '@core/src/utils/RouterManager';
import * as serviceWorker from './serviceWorker';
import '@core/src/assets/scss/main.scss';

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
