import { CART_ACTION_TYPES } from "./cart-reducer";


export const setAddToCart = (product) => ({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product});
export const setUpdateCart = (product, event) => ({ type: CART_ACTION_TYPES.UPDATE_CART, payload: product, qty: Number(event.target.value) });
export const setRemoveFromCart = (product) => ({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product});
export const setDropDownState = (bool) => ({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: bool});


export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) => state.cart.cartCount;
export const selectCheckoutTotal = (state) => state.cart.checkoutTotal;
export const selectDropdownState = (state) => state.cart.isCartOpen;