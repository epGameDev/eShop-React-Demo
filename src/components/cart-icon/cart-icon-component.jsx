import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import { CART_ACTION_TYPES } from "../../reducers/cart-reducer.js";

import { IconContainer } from "./cart-icon-styles.jsx";
import ShoppingBag from "../../assets/shopping-bag.svg";



export const CartIcon = () => {
    const { isCartOpen, cartCount, dispatch } = useContext(CartContext);

    const dropdownHandler = () => 
    {
      isCartOpen
        ? dispatch({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: false })
        : dispatch({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: true });
    }
    
    return (
        <IconContainer>
            <img onClick={dropdownHandler} className="icon__shopping-bag" src={ShoppingBag} alt="icon for shopping bag" />
            <span className="item-count">{cartCount}</span>
        </IconContainer>
    )
}