import { createSlice } from "@reduxjs/toolkit";

import { addCartItem, updateCheckoutQuantity, removeCartItem } from "./cart-actions";


const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    checkoutTotal: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        setAddToCart(state, action) {
            let updatedCartItems = null;
            updatedCartItems = addCartItem(state, action);

            state.cartItems = updatedCartItems;
            state.checkoutTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            state.cartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);
        },
        setUpdateCart(state, action){
            let updatedCartItems = null;
            console.log("My Quantity______________ ", action.payload);
            updatedCartItems = updateCheckoutQuantity(state, action.payload, action.payload.quantity);

            state.cartItems = updatedCartItems;
            state.checkoutTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            state.cartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);
        },
        setRemoveFromCart(state, action) {
            let updatedCartItems = null;
            updatedCartItems = removeCartItem(state, action.payload);

            state.cartItems = updatedCartItems;
            state.checkoutTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            state.cartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);
        },
        setDropDownState(state, action){
            state.isCartOpen = action.payload;
        }
    }
});

export const { setAddToCart, setUpdateCart, setRemoveFromCart, setDropDownState } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
