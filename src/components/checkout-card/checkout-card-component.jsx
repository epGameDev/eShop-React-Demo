import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { updateCheckoutQuantity, removeCartItem } from "../../store/cart/cart-reducer.js";
import { CheckoutProductCard } from "./checkout-card-styles.jsx";



const CheckoutCard = ({product}) => {
    const dispatch = useDispatch();

    const updateProduct = (event) => {
        const qty = Number(event.target.value);
        return dispatch(updateCheckoutQuantity({product, qty}));
    }
    const removeProduct = () => dispatch(removeCartItem(product));
    
    const {name, imageUrl, price } = product;


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
                    <input type="number" name="productQty" id="productQty" min={0} max={20} defaultValue={product.quantity} onChange={updateProduct}/>
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