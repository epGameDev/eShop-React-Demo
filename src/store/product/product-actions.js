import { createSelector } from 'reselect';
import { PRODUCT_ACTION_TYPES } from "./product-reducer";


export const setProducts = (productArray) => ({type: PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCTS, payload: productArray});


const selectCategoryReducer = (state) => state.product;


export const selectCategories = createSelector( 
    [selectCategoryReducer], 
    (categoriesSlice) => categoriesSlice.categories);


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




