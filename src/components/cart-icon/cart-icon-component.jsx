import { useSelector, useDispatch } from "react-redux";

import { setDropDownState } from "../../store/cart/cart-reducer.js";
import { selectCartCount, selectDropdownState } from "../../store/cart/cart-actions.js";

import ShoppingBag from "../../assets/shopping-bag.svg";
import { IconContainer } from "./cart-icon-styles.jsx";



export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectDropdownState);

    const dropdownHandler = () =>  dispatch(setDropDownState(!isCartOpen));
    
    return (
        <IconContainer>
            <img onClick={dropdownHandler} className="icon__shopping-bag" src={ShoppingBag} alt="icon for shopping bag" />
            <span className="item-count">{cartCount}</span>
        </IconContainer>
    )
}