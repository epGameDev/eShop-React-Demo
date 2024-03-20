import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import Button from "../button/button-component";
import { CartItem } from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

export const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const closeDropdown = () => isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);

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
            <Link to={"/checkout"}>
              <Button buttonType={"primary"} text={"Checkout"} onClick={closeDropdown} />
            </Link>
        </div>
      ) : null}
    </div>
  );
};
