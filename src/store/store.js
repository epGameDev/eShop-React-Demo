import { compose, legacy_CreateStore as createStore, applyMiddleware, legacy_createStore } from 'redux';
import { logger } from "redux-logger";

import { rootReducer } from './root-reducer';

const middleWares = [logger]; // fires before anything hits the reducers

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);