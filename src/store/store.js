import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { rootReducer } from './root-reducer';
import loggerMiddleware from './middleware/logger';


const middleWares = [import.meta.env.DEV && loggerMiddleware].filter(Boolean); // fires before anything hits the reducers
const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            // middleware: middleWares //redux toolkit has its default middleware and we are over riding it with ours.
            {
                serializableCheck: false,
            }
        ).concat(middleWares),
    }
);

export const persister = persistStore(store);