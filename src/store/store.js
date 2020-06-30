import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import {persistStore,persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig={
    key:'root',
    storage,
    whitelist: ['rCounter']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk,createLogger()))
)

export const persistedStore=persistStore(store);