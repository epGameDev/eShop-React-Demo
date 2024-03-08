import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {
        
    }
});

const addCartItem = (cartItems, productToAdd) => {
    // TODO: [ ] Find if cart items contains productsToAdd.
    
    cartItems.push(productToAdd);
    console.log(cartItems);

    return cartItems;
    // TODO: [ ] If found, increment the quantity.

    // TODO: [ ] return a new array with modified values/ new cart item
}

export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(true);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}