
import PropTypes from "prop-types";

import { CartItemContainer } from "./cart-item-styles";

export const CartItem = ({item}) => {
    const { name, quantity, imageUrl, price } = item;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <div>
                <h4>{name}</h4>
                <div className="cart__product-price">
                    <span>{quantity} &nbsp; x </span>
                    <span> ${price}.00</span>
                </div>
            </div>
        </CartItemContainer>
    );
}

CartItem.propTypes = {
    item: PropTypes.object,
    quantity: PropTypes.number,
}