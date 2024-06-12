import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectDropdownState, selectCartItems } from "../../store/cart/cart-actions.js";
import { setDropDownState } from "../../store/cart/cart-reducer.js";
import Button from "../button/button-component";
import { CartItem } from "../cart-item/cart-item-component";

import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from "./cart-dropdown-styles.jsx";

export const CartDropdown = () => {
  const dispatch = useDispatch();
  
  const cartItems = useSelector(selectCartItems);
  const dropDownState = useSelector(selectDropdownState);

// Removes Drop
const dropdownHandler = () =>  dispatch(setDropDownState(!dropDownState));


  return (
    <div>
      {!dropDownState ? (
        <CartDropdownContainer>
          <CartDropdownItems>
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
                <CartItem key={product.id} item={product} />
              ))
            ) : (
              <EmptyMessage>Cart is empty...</EmptyMessage>
            )}
          </CartDropdownItems>
          <Link to={"/checkout"}>
            <Button
              buttonType={"primary"}
              text={"Checkout"}
              onClick={dropdownHandler}
            />
          </Link>
        </CartDropdownContainer>
      ) : null}
    </div>
  );
};
