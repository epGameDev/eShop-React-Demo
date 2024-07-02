import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    checkoutTotal: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {

        addCartItem (state, {payload}) {
            
            const alreadyInCart = state.cartItems.find(productInCart => productInCart.id === payload.id );

            if (alreadyInCart) 
            {
                state.cartItems = state.cartItems.map(product => 
                {
                    return product.id === alreadyInCart.id 
                    ? {...product, quantity: product.quantity += 1}
                    : product
                });
            } 
            else 
            {
                state.cartItems.push({...payload, quantity: 1});
            }
        },

        updateCheckoutQuantity(state, {payload}){

            const alreadyInCart = state.cartItems.find(productInCart => productInCart.id === payload.product.id );
            
            if (payload.qty < 1 && payload.qty !== "")  payload.qty = 0; // doesn't let input go in negative.
            if (alreadyInCart) 
                {
                    state.cartItems = state.cartItems.map(product => 
                    {
                        return product.id === payload.product.id 
                        ? {...product, quantity: product.quantity = payload.qty}
                        : product
                    });
                }

            // alreadyInCart.quantity = payload.qty;
            // cartItems = [...cartItems];
        },

        removeCartItem(state, {payload}){
            state.cartItems = state.cartItems.filter(product => product.id !== payload.id);
        },

        setDropDownState(state, action){
            state.isCartOpen = action.payload;
        }
    }
});

export const { addCartItem, updateCheckoutQuantity, removeCartItem, setDropDownState } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
