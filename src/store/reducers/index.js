import rCounter from './counterReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    rCounter,
});