import { combineReducers } from 'redux';
import homeState from './home-reducer';

const rootReducer = combineReducers({
    homeState
});

export default rootReducer;