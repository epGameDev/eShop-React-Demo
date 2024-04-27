import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setUpdateCart, setRemoveFromCart } from "../../store/cart/cart-actions.js";
import { CheckoutProductCard } from "./checkout-card-styles.jsx";


const CheckoutCard = ({product}) => {
    const dispatch = useDispatch();

    const updateProduct = (event) => dispatch(setUpdateCart(product, event));
    const removeProduct = () => dispatch(setRemoveFromCart(product));
    
    const {name, imageUrl, price, quantity } = product;

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