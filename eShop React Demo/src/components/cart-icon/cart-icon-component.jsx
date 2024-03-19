import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import ShoppingBag from "../../assets/shopping-bag.svg";

import "./cart-icon-styles.scss";


export const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

    // Class toggle works too but practicing useContext.
    const dropdownHandler = () => {
        !isCartOpen ?  setIsCartOpen(true) : setIsCartOpen(false);
    }

    return (
        <div className="icon__container">
            <img onClick={dropdownHandler} className="icon__shopping-bag" src={ShoppingBag} alt="icon for shopping bag" />
            <span className="item-count">{cartItems.length}</span>
        </div>
    )
}