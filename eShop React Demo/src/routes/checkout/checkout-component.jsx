import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import CheckoutCard from "../../components/checkout-card/checkout-card-component";

import "./checkout-styles.scss";

const Checkout = ()  => {
    const { cartItems, setCartItems } = useContext(CartContext);

    return (
        <main className="main__container checkout__page">
            <h1>Checkout</h1>
            <hr/>

            <h2>Shopping Cart:</h2>
            <div className="checkout__cart-container">
                { 
                    cartItems.length <= 0 
                    ? <h3>Your cart is empty</h3>
                    : cartItems.map( product => <CheckoutCard key={product.id} product={product} /> ) 
                }

            </div>

            <hr/>
            <div className="total__price">
                <h4>Total: </h4>
                <span>${0.00}</span>

            </div>
        </main>
    )
}

export default Checkout;