import { compose, legacy_createStore as createStore , applyMiddleware, } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loggerMiddleware from './middleware/logger';
// import { logger } from "redux-logger";
import createSagaMiddleware from '@redux-saga/core';


import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';



const persistConfig = {
    key: 'root', //persist the whole thing
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer( persistConfig, rootReducer );
const middleWares = [import.meta.env.DEV && loggerMiddleware, sagaMiddleware].filter(Boolean); // fires before anything hits the reducers
const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);