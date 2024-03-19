import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {
        
    }
});



//===============================//
//========= Add To Cart =========//
const addCartItem = (cartItems, productToAdd) => 
{
    const existingCartItem = cartItems.find( product => product.id === productToAdd.id);

    if (existingCartItem){

        return cartItems.map(productInCart => 
            {
                return productInCart.id === productToAdd.id 
                ? {...productInCart, quantity: productInCart.quantity + 1}
                : productInCart
            } 
        );
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}];
}


//=================================//
//========= Cart Provider =========//
export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(true);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}