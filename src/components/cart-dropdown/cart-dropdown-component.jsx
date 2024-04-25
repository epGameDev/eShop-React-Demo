import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import Button from "../button/button-component";
import { CartItem } from "../cart-item/cart-item-component";
import { CART_ACTION_TYPES } from "../../reducers/cart-reducer.js";

import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from "./cart-dropdown-styles.jsx";

export const CartDropdown = () => {
  const { isCartOpen, dispatch, cartItems } = useContext(CartContext);

  const dropdownHandler = () => 
  {
    isCartOpen
      ? dispatch({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: false })
      : dispatch({ type: CART_ACTION_TYPES.DROP_DOWN_STATE, payload: true });
  }

  return (
    <div>
      {!isCartOpen ? (
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
