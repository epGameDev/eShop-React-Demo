const addCartItem = (cartItems, productToAdd) => 
{
       const isInCart = cartItems.find(productInCart => productInCart.id === productToAdd.id );

    if (isInCart) {

        // return a new array of products
        return cartItems.map(productInCart => {
            // if the current array already has product object with matching id, 
            return productInCart.id === productToAdd.id
            // clone the original and update the qty property.
            ? {...productInCart, quantity: productInCart.quantity + 1}
            // otherwise just pass the same product object to the new array
            : productInCart
        });
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}


const removeCartItem = (cartItems, productToRemove) => 
{
    return cartItems.filter(product => product.id !== productToRemove.id);
}

const updateProductQuantity = (cartItems, productToUpdate, qty) => 
{
    
    const productInCart = cartItems.find(product => product.id === productToUpdate.id);
    if (qty < 1 && qty !== "")
    {
        qty = 0;
        // return removeCartItem(cartItems, productToUpdate);
    }

    productInCart.quantity = qty;
    return [...cartItems];
}



export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    ADD_TO_CART: "ADD_CART_ITEM",
    REMOVE_FROM_CART: "REMOVE_CART_ITEM",
    UPDATE_CART: "UPDATE_CART_ITEM",
    CART_COUNT: "CART_COUNT",
    CHECKOUT_TOTAL: "CHECKOUT_TOTAL",
    DROP_DOWN_STATE: "IS_CART_OPEN"
}


export const cartReducer = (state, action) => {
    const { cartItems } = state;
    const { type, payload, qty } = action;

    switch (type) {

        case CART_ACTION_TYPES.ADD_TO_CART:{
            const updatedCartItems = addCartItem(cartItems, payload);
            const updatedCartTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            const updatedCartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);

            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: updatedCartCount,
                checkoutTotal: updatedCartTotal
            }
        }
        case CART_ACTION_TYPES.UPDATE_CART:{
            const updatedCartItems = updateProductQuantity(cartItems, payload, qty);
            const updatedCartTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            const updatedCartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);

            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: updatedCartCount,
                checkoutTotal: updatedCartTotal
            }
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART:{
            const updatedCartItems = removeCartItem(cartItems, payload);
            const updatedCartTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
            const updatedCartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);

            return {
                ...state,
                cartItems: updatedCartItems,
                cartCount: updatedCartCount,
                checkoutTotal: updatedCartTotal
            }
        }
        case CART_ACTION_TYPES.DROP_DOWN_STATE:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            // return state;
            throw new Error(`Unhandled action type in Product Reducer: ${action}`);
    }
}