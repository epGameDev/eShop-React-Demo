import { compose, legacy_createStore as createStore , applyMiddleware, } from 'redux';
import { logger } from "redux-logger";
// import thunk from "redux-thunk";

import { rootReducer } from './root-reducer';



const middleWares = [logger]; // fires before anything hits the reducers
const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);