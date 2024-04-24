import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { cartReducer, CART_ACTION_TYPES } from "../reducers/cart-reducer";


export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {  },
    updateItemInCart: () => {  },
    removeItemInCart: () => { }, 
    cartCount: 0,
    checkoutTotal: 0
});

const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    checkoutTotal: 0
}


//=================================//
//========= Cart Provider =========//
export const CartProvider = ({children}) => {

    const [ {cartItems, cartCount, checkoutTotal, isCartOpen}, dispatch ] = useReducer(cartReducer, INITIAL_STATE);



    const addItemToCart = (productToAdd) =>  dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: productToAdd });
    const updateItemInCart = (productToUpdate, value) =>  dispatch({ type: CART_ACTION_TYPES.UPDATE_CART, payload: productToUpdate, qty: value});
    const removeItemInCart = (productToRemove) => dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: productToRemove });
    const setIsCartOpen = (bool) => dispatch({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: bool })

        console.log(checkoutTotal, cartItems);

    const value = {isCartOpen, cartItems, cartCount, checkoutTotal, removeItemInCart, updateItemInCart, addItemToCart, setIsCartOpen };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}