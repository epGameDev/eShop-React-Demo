import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {
        
    },
    cartCount: 0
});



//===============================//
//========= Add To Cart =========//
const addCartItem = (cartItems, productToAdd) => 
{
    const isInCart = cartItems.find(productInCart => productInCart.id === productToAdd.id );

    if (isInCart) {

        // return a new array of products
        return cartItems.map(productInCart => {
            return productInCart.id === productToAdd.id
            // if the current array already has product object with matching id, clone 
            // the original and update the qty property.
            ? {...productInCart, quantity: productInCart.quantity + 1}
            // otherwise just pass the same product object to the new array
            : productInCart
        });
    }


    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


//=================================//
//========= Cart Provider =========//
export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [cartCount, setCartCount] = useState(0)
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => setCartCount(cartItems.reduce((cartTotal, item) => cartTotal += item.quantity, 0)), [cartItems])

    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}