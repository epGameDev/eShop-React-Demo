import { Routes, Route } from "react-router-dom";



import Categories from "../categories/categories-component";
import Category from "../category/category-component";

import { ProductPageContainer } from "./shop-styles.jsx";

const Shop = () => {
 
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
