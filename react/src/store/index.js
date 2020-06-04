import { createStore } from 'redux';
import * as env from '@core/src/utils/enviromentVariables';
import reducers from '@core/src/reducers';

const debuggerState = env.default.REDUX_DEBUGGER === 'true';

const store = createStore(
    reducers,
    debuggerState && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// eslint-disable-next-line import/prefer-default-export
export { store };
