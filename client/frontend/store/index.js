import { createStore } from 'redux';
import reducers from 'reducers';

export default function (initialState) {
    var store = createStore(reducers, initialState);

    return store;
}