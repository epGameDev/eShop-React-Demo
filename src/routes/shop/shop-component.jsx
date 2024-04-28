import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase-utils.js";
import { setProducts } from "../../store/product/product-actions.js";
import Categories from "../categories/categories-component";
import Category from "../category/category-component";

import { ProductPageContainer } from "./shop-styles.jsx";

const Shop = () => {
  const dispatch = useDispatch();


  // Loads Products From Firebase
  useEffect(() => {
    try {
      const fetchProductCategoryData = async () => {
        const data = await getCategoriesAndDocuments();
        dispatch(setProducts(data));
      };
      fetchProductCategoryData();
      
    } catch (error) {
      throw new Error(`There was an Error in fetching data. Shop > UseEffect: ${error} `)
    }
  }, []);


 
  return (
    <ProductPageContainer className="main__container">
      <Routes>
        <Route index element={<Categories />}/>
        <Route path=":category" element={<Category />} />
      </Routes>     
    </ProductPageContainer>
  );
};

export default Shop;
