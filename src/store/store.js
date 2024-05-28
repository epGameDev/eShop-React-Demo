// import { compose, legacy_createStore as createStore , applyMiddleware, } from 'redux';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import loggerMiddleware from './middleware/logger';
// // import { logger } from "redux-logger";

// const persistConfig = {
//     key: 'root', //persist the whole thing
//     storage,
//     whitelist: ['cart']
// }

// const persistedReducer = persistReducer( persistConfig, rootReducer );
// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './root-reducer';
import loggerMiddleware from './middleware/logger';


const middleWares = [import.meta.env.DEV && loggerMiddleware].filter(Boolean); // fires before anything hits the reducers

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            // middleware: middleWares //redux toolkit has its default middleware and we are over riding it with ours.
            {
                serializableCheck: false,
            }
        ).concat(middleWares),
    }
);