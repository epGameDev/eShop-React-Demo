import { Routes, Route } from "react-router-dom";

import Categories from "../categories/categories-component";
import Category from "../category/category-component";

import "./shop-styles.scss";

const Shop = () => {
 
  return (
    <main className="main__container product__page">
      <Routes>
        <Route index element={<Categories />}/>
        <Route path=":category" element={<Category />} />
      </Routes>     
    </main>
  );
};

export default Shop;
