import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import CheckoutCard from "../../components/checkout-card/checkout-card-component";

import { CheckoutContainer } from "./checkout-styles.jsx";

const Checkout = ()  => {
    const { cartItems, checkoutTotal } = useContext(CartContext);

    return (
        <CheckoutContainer className="main__container">
            <h1>Checkout</h1>
            <hr/>

            <h2>Shopping Cart:</h2>

            <div className="checkout__cart-headers">

                <span className="checkout__title">Product</span>
                <div className="checkout__details">
                    <span className="checkout__name">Name</span>

                    <div className="checkout__totals">
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Remove</span>
                    </div>
                </div>

            </div>

            <hr className="checkout__hr"/>

            <div className="checkout__cart-container">
                { 
                    cartItems.length <= 0 && cartItems
                    ? <h3 className="checkout__empty-cart">Your cart is empty</h3>
                    : cartItems.map( product => <CheckoutCard key={product.id} product={product} /> ) 
                }
            </div>

            <hr/>

            <div className="total__price">
                <h4>Total: </h4>
                <span>${checkoutTotal}</span>
            </div>

        </CheckoutContainer>
    )
}

export default Checkout;