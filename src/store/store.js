import { compose, legacy_createStore as createStore , applyMiddleware, } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loggerMiddleware from './middleware/logger';
import { thunk } from 'redux-thunk';
// import { logger } from "redux-logger";

import { rootReducer } from './root-reducer';



const persistConfig = {
    key: 'root', //persist the whole thing
    storage,
    whitelist: ['cart']
}


const persistedReducer = persistReducer( persistConfig, rootReducer );
const middleWares = [import.meta.env.DEV && loggerMiddleware, thunk].filter(Boolean); // fires before anything hits the reducers
const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);