import { createSelector } from "reselect";

// Provides the data  
// TODO: [ ] Check to see what state.cart is.
const selectCartReducer = (state) => state.cart;
export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);
export const selectCartCount = createSelector([selectCartItems], (cart) => cart.reduce((totalInCart, item) => totalInCart += item.quantity, 0));
export const selectCheckoutTotal = createSelector([selectCartItems], (cart) => cart.reduce((cartTotal, product) => cartTotal += (product.price * product.quantity), 0));
export const selectDropdownState = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

// Actions to work with data
// export const addCartItem = ({cartItems}, productToAdd) => 
// {
//     const isInCart = cartItems.find(productInCart => productInCart.id === productToAdd.id );

//     if (isInCart) {

//         return cartItems.map(productInCart => { 
//             return productInCart.id === productToAdd.id
//             ? {...productInCart, quantity: productInCart.quantity + 1}
//             : productInCart
//         });
//     }
//     return [...cartItems, { ...productToAdd, quantity: 1 }]
// }


// export const updateCheckoutQuantity = ({cartItems}, productToUpdate, qty) => 
// {
//     const productInCart = cartItems.find(product => product.id === productToUpdate.id);
    
//     if (qty < 1 && qty !== "")  qty = 0; // doesn't let input go in negative.
    
//     productInCart.quantity = qty;
//     return [...cartItems];
// }


// export const removeCartItem = ({cartItems}, productToRemove) => cartItems.filter(product => product.id !== productToRemove.id);


