import { combineReducers } from "@reduxjs/toolkit";


import { userReducer } from "./user/user-reducer.js";
import { cartReducer } from "./cart/cart-reducer";
import { productReducer } from "./product/product-reducer";


export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    product: productReducer,

})