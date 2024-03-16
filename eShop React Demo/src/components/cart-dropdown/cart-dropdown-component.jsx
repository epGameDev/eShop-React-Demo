import { useContext } from "react";
import PropTypes from "prop-types"
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
              cartItems 
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

// CartDropdown.propTypes = {
//   productsInCart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//     })
//   ),
// }

