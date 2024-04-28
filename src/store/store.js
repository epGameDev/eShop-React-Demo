import { compose, legacy_createStore as createStore , applyMiddleware, } from 'redux';
// import { logger } from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) return next(action);

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
}

const middleWares = [loggerMiddleware]; // fires before anything hits the reducers
const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);