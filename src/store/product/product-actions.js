import { createSelector } from 'reselect';
import { PRODUCT_ACTION_TYPES } from "./product-reducer";
import {  getCategoriesAndDocuments } from "../../utils/firebase/firebase-utils"


// ! Actions to push data to STATE
// export const setProducts = (productArray) => ({type: PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCTS, payload: productArray});
export const fetchProductStart = () => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START});
export const fetchProductSuccess = (productArray) => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, payload: productArray});
export const fetchProductFailed = (error) => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED, payload: error});


// ! Actions to pull data from STATE
const selectCategoryReducer = (state) => state.product;

export const selectCategories = createSelector( 
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.categories
);

export const selectProductCategories = createSelector(
  [selectCategories],
  (categories) => {

      return categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
  }
);

export const selectProductIsLoading = createSelector(
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.isLoading
);

// ! Action to fetch data from a Redux Thunk
export const fetchProductsAsync = async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    const productCategories = await getCategoriesAndDocuments();
    dispatch(fetchProductSuccess(productCategories));

  } catch (error) {
    dispatch(fetchProductFailed(error));
    throw new Error (" There was an error fetching your products. ", error);
  }
};