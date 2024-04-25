import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { cartReducer } from "../reducers/cart-reducer";


export const CartContext = createContext();

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


    const value = {isCartOpen, cartItems, cartCount, checkoutTotal, dispatch };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}