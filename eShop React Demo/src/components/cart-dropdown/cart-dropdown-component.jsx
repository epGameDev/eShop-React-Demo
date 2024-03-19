import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import Button from "../button/button-component";
import { CartItem } from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

export const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  return (
    <div>
      {!isCartOpen ? (
        <div className="dropdown__cart-container">
          <div className="dropdown__cart-items">
            {
              cartItems.length > 0
              ? cartItems.map( product => <CartItem key={product.id} item={product} /> )
              : <p>Cart is empty...</p>
            }
          </div>
          <Button buttonType={"primary"} text={"Checkout"} />
        </div>
      ) : null}
    </div>
  );
};
