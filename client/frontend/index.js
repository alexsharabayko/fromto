import React from 'react';
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import HomePage from './pages/home';
import RegisterPage from './pages/register';

import reducers from './reducers';

import './less/common.less';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="*" component={HomePage} />
        </Router>
    </Provider>,
    document.querySelector('.app')
);