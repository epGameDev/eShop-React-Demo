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