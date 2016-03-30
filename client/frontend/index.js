import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import storeConfig from 'storeConfig';

import HomePage from './pages/home';
import RegisterPage from './pages/register';

import reducers from './reducers';

import './less/common.less';

ReactDOM.render(
    <Provider store={storeConfig.store}>
        <Router history={storeConfig.history}>
            <Route path="/" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="*" component={HomePage} />
        </Router>
    </Provider>,
    document.querySelector('.app')
);