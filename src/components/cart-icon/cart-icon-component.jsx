import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";

import { IconContainer } from "./cart-icon-styles.jsx";
import ShoppingBag from "../../assets/shopping-bag.svg";



export const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    // Class toggle works too but practicing useContext.
    const dropdownHandler = () => !isCartOpen ?  setIsCartOpen(true) : setIsCartOpen(false);

    return (
        <IconContainer>
            <img onClick={dropdownHandler} className="icon__shopping-bag" src={ShoppingBag} alt="icon for shopping bag" />
            <span className="item-count">{cartCount}</span>
        </IconContainer>
    )
}