import { createSelector } from 'reselect';


// ! Actions to pull data from STATE
const selectCategoryReducer = (state) => state.product;

export const selectCategories = createSelector( [selectCategoryReducer], 
(productSlice) => productSlice.categories );

export const selectProductCategories = createSelector( [selectCategories],
  (categories) => 
    {
      return categories.reduce((acc, category) => 
        {
          const { title, items } = category;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {})
    }
);

