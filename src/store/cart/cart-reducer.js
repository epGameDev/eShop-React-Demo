
const addCartItem = ({cartItems}, productToAdd) => 
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


const updateCheckoutQuantity = ({cartItems}, productToUpdate, qty) => 
{
    const productInCart = cartItems.find(product => product.id === productToUpdate.id);
    
    if (qty < 1 && qty !== "")  qty = 0; // doesn't let input go in negative.
    
    productInCart.quantity = qty;
    return [...cartItems];
}


const removeCartItem = ({cartItems}, productToRemove) => cartItems.filter(product => product.id !== productToRemove.id);



export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    ADD_TO_CART: "ADD_CART_ITEM",
    REMOVE_FROM_CART: "REMOVE_CART_ITEM",
    UPDATE_CART: "UPDATE_CART_ITEM",
    CART_COUNT: "CART_COUNT",
    CHECKOUT_TOTAL: "CHECKOUT_TOTAL",
    DROP_DOWN_STATE: "IS_CART_OPEN"
}


const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    checkoutTotal: 0
}


export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload, qty } = action;
    let updatedCartItems = null;
    
    switch (type) {
        
        case CART_ACTION_TYPES.ADD_TO_CART:
            updatedCartItems = addCartItem(state, payload);
            break;
        case CART_ACTION_TYPES.UPDATE_CART:
            updatedCartItems = updateCheckoutQuantity(state, payload, qty);
            break;
        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            updatedCartItems = removeCartItem(state, payload);
            break;
        case CART_ACTION_TYPES.DROP_DOWN_STATE:
            return {
                ...state,
                isCartOpen: payload,
        }
        default:
            // throw new Error(`Unhandled action type in Product Reducer: ${action}`);
            return state;
    }
        
    const updatedCartTotal = Number(updatedCartItems.reduce((cartTotal, item) => cartTotal += (item.price * item.quantity), 0));
    const updatedCartCount = updatedCartItems.reduce((totalInCart, item) => totalInCart += item.quantity, 0);

    return {
        ...state,
        cartItems: updatedCartItems,
        cartCount: updatedCartCount,
        checkoutTotal: updatedCartTotal
    }
}

