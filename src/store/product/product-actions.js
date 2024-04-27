import { PRODUCT_ACTION_TYPES } from "./product-reducer";

export const setProducts = (products) => ({type: PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCTS, payload: products});
export const selectProducts = (state) => state.product.productCategoryMap;