import { createStore, combineReducers } from 'redux';

import appReducer from './reducers/app.reducer';

const reducer = combineReducers({ appReducer });

export const store = createStore(reducer);
