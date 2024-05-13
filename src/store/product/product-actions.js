import { createSelector } from 'reselect';
import { PRODUCT_ACTION_TYPES } from "./product-reducer";



// ! Actions to push data to STATE
export const fetchProductsStart = () => ({type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START});


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

