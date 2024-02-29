import { createContext, useState } from "react";
import PropTypes from "prop-types";

const addCartItem = (cartItems, productToAdd) => {
    // TODO: [ ] Find if cart items contains productsToAdd.

    // TODO: [ ] If found, increment the quantity.

    // TODO: [ ] return a new array with modified values/ new cart item

}

export const CartContext = createContext({ 
    isCartOpen: true,
    cartItems: [],
    addItemToCart: () => {

    }
});

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(true);
    const value = {isCartOpen, setIsCartOpen};

    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


CartProvider.propTypes = {
    children: PropTypes.node,
}