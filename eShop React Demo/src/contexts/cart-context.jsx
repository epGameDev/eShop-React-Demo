import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {
        
    },
    cartCount: 0,
    checkoutTotal: 0
});
 

//===============================//
//========= Add To Cart =========//
const addCartItem = (cartItems, productToAdd) => 
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



//======================================//
//========= Removing Cart Item =========//
const removeCartItem = (cartItems, productToRemove) => 
{
    const productInCart = cartItems.find(product => product.id === productToRemove.id);
    if (productInCart) {
        const index = cartItems.indexOf(productInCart)
        cartItems.splice(index, 1);
    }
    
    return [...cartItems];
}



//========================================//
//========= Update Cart Quantity =========//
const updateProductQuantity = (cartItems, productToUpdate, value) => 
{
    const productInCart = cartItems.find(product => product.id === productToUpdate.id);
    if (value <= 0)
    {
        value = 0;
        return removeCartItem(cartItems, productToUpdate);
    }

    productInCart.quantity = value;
    return [...cartItems];
}


//=================================//
//========= Cart Provider =========//
export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [cartCount, setCartCount] = useState(0)
    const [checkoutTotal, setCheckoutTotal] = useState(0)
    
    const addItemToCart = (productToAdd) => setCartItems( addCartItem(cartItems, productToAdd) );
    const updateItemInCart = (productToUpdate, value) => setCartItems( updateProductQuantity(cartItems, productToUpdate, value) );
    const removeItemInCart = (productToRemove) => setCartItems( removeCartItem(cartItems, productToRemove) );

    useEffect(() => setCartCount(cartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0)), [cartItems]);
    useEffect(() => setCheckoutTotal(Number(cartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0))), [cartItems]);
    
    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemInCart, updateItemInCart, cartItems, cartCount, checkoutTotal };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}