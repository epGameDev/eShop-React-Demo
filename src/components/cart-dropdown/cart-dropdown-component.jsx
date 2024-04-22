import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import Button from "../button/button-component";
import { CartItem } from "../cart-item/cart-item-component";

import { CartDropdownContainer, CartDropdownItems, EmptyMessage } from "./cart-dropdown-styles.jsx";

export const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const closeDropdown = () => isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);

  return (
    <div>
      {!isCartOpen ? (
        <CartDropdownContainer>
          <CartDropdownItems>
            {
              cartItems.length > 0
              ? cartItems.map( product => <CartItem key={product.id} item={product} /> )
              : <EmptyMessage>Cart is empty...</EmptyMessage>
            }
          </CartDropdownItems>
            <Link to={"/checkout"}>
              <Button buttonType={"primary"} text={"Checkout"} onClick={closeDropdown} />
            </Link>
        </CartDropdownContainer>
      ) : null}
    </div>
  );
};
