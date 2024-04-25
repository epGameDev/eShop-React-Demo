import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import { CheckoutProductCard } from "./checkout-card-styles.jsx";
import { CART_ACTION_TYPES } from "../../reducers/cart-reducer.js";


const CheckoutCard = ({product}) => {


    const { dispatch } = useContext(CartContext);
    const {name, imageUrl, price, quantity } = product;

    const removeProduct = () => dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product});
    const updateProduct = (event) => dispatch({ type: CART_ACTION_TYPES.UPDATE_CART, payload: product, qty: Number(event.target.value) });

    return  (
        <CheckoutProductCard>
            <div className="checkout__img-container">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="checkout__product-details">
                <div className="checkout__product-name">
                    <h3>{name}</h3>
                </div>

                <div className="checkout__product-totals">
                    <input type="number" name="productQty" id="productQty" min={0} max={20} defaultValue={quantity} onChange={updateProduct}/>
                    <span> x </span>
                    <span className="price"> ${price}.00</span>
                    <span className="checkout__product-delete" onClick={removeProduct}>✖️</span>
                </div>
            </div>

        </CheckoutProductCard>
    )
}

export default CheckoutCard;

CheckoutCard.propTypes = {
    product: PropTypes.object,
}