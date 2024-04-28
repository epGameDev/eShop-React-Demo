import { addCartItem, updateCheckoutQuantity, removeCartItem } from "./cart-actions";
export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "cart/SET_CART_ITEMS",
    ADD_TO_CART: "cart/ADD_CART_ITEM",
    REMOVE_FROM_CART: "cart/REMOVE_CART_ITEM",
    UPDATE_CART: "cart/UPDATE_CART_ITEM",
    CART_COUNT: "cart/CART_COUNT",
    CHECKOUT_TOTAL: "cart/CHECKOUT_TOTAL",
    DROP_DOWN_STATE: "cart/IS_CART_OPEN"
}


const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    checkoutTotal: 0
}


export const cartReducer = (state = INITIAL_STATE, action = {}) => {
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

