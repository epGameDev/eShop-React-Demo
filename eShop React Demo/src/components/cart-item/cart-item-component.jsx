
import PropTypes from "prop-types";

import "./cart-item-styles.scss";

export const CartItem = ({item}) => {
    const { name, quantity } = item;

    return (
        <div className="cart__container">
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.object,
    quantity: PropTypes.number,
}