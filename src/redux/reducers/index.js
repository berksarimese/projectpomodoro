import themeReducer from './themesReducers';
import timerReducers from './timerReducers';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    themeReducer,
    timerReducers
})

export default reducers;