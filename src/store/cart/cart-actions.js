import { createSelector } from "reselect";
import { CART_ACTION_TYPES } from "./cart-reducer";


export const setAddToCart = (product) => ({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product});
export const setUpdateCart = (product, event) => ({ type: CART_ACTION_TYPES.UPDATE_CART, payload: product, qty: Number(event.target.value) });
export const setRemoveFromCart = (product) => ({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product});
export const setDropDownState = (bool) => ({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: bool});


const selectCartReducer = (state) => state.cart;
export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);
export const selectCartCount = createSelector([selectCartReducer], (cart) => cart.cartCount);
export const selectCheckoutTotal = createSelector([selectCartReducer], (cart) => cart.checkoutTotal);
export const selectDropdownState = createSelector([selectCartReducer], (cart) => cart.isCartOpen);


export const addCartItem = ({cartItems}, productToAdd) => 
{
    const isInCart = cartItems.find(productInCart => productInCart.id === productToAdd.id );

    if (isInCart) {
        // return a new array of products
        return cartItems.map(productInCart => {
            // if the current array already has product object with matching id, 
            return productInCart.id === productToAdd.id
            // clone the original and update the qty property.
            ? {...productInCart, quantity: productInCart.quantity + 1}
            // otherwise just pass the same product object to the new array
            : productInCart
        });
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


export const updateCheckoutQuantity = ({cartItems}, productToUpdate, qty) => 
{
    const productInCart = cartItems.find(product => product.id === productToUpdate.id);
    
    if (qty < 1 && qty !== "")  qty = 0; // doesn't let input go in negative.
    
    productInCart.quantity = qty;
    return [...cartItems];
}


export const removeCartItem = ({cartItems}, productToRemove) => cartItems.filter(product => product.id !== productToRemove.id);


