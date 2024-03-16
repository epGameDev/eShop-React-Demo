
import PropTypes from "prop-types";

import "./cart-item-styles.scss";

export const CartItem = ({item}) => {
    const { name, quantity, imageUrl, price } = item;

    return (
        <div className="cart__container">
            <img src={imageUrl} alt={name} />
            <div>
                <h5>{name}</h5>
                <span>{quantity}</span>
                <span>${price}.00</span>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.object,
    quantity: PropTypes.number,
}