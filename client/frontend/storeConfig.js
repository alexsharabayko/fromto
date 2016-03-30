import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';

var store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

var history = syncHistoryWithStore(browserHistory, store);

var obj = Object.freeze({ history, store });

export default obj;