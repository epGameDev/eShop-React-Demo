import PropTypes from "prop-types";
import "./checkout-card-styles.scss";


const CheckoutCard = ({product}) => {

    const {name, imageUrl, price, quantity } = product;

    return  (
        <div className="checkout__product-card">
            <div className="checkout__img-container">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="checkout__product-details">
                <div className="checkout__product-name">
                    <h3>{name}</h3>
                </div>

                <div className="checkout__product-totals">
                    <input type="number" name="productQty" id="productQty" value={quantity}/>
                    <span> x </span>
                    <span> ${price}.00</span>
                    <span className="checkout__product-delete">✖️</span>
                </div>
            </div>

        </div>
    )
}

export default CheckoutCard;

CheckoutCard.propTypes = {
    product: PropTypes.object,
}