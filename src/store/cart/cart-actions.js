import { createSelector } from "reselect";

// Provides the data to components
const selectCartReducer = (state) => state.cart;
export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);
export const selectCartCount = createSelector([selectCartItems], (cart) => cart.reduce((totalInCart, item) => totalInCart += item.quantity, 0));
export const selectCheckoutTotal = createSelector([selectCartItems], (cart) => cart.reduce((cartTotal, product) => cartTotal += (product.price * product.quantity), 0));
export const selectDropdownState = createSelector([selectCartReducer], (cart) => cart.isCartOpen);
