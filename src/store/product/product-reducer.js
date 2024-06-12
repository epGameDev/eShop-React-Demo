import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    categories: [],
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        setProducts(state, action){
            state.categories = action.payload;
            //uses immer under the hood. Changes are done on a draft object
        }
    }

});

export const { setProducts } = productSlice.actions;
export const  productReducer  = productSlice.reducer;