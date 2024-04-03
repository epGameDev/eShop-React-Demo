import { useContext } from "react";

import { ProductsContext } from "../../contexts/product-context";
import CategoryPreview from "../../components/category-preview/category-preview-component";
import "./shop-styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(ProductsContext);
 
  return (
    <main className="main__container product__page">
      <h1>Product Catalog</h1>
      <hr />
        {
          Object.keys(categoriesMap).map( titleCollection => {
            const productCollection = categoriesMap[titleCollection];
            return <CategoryPreview key={titleCollection} title={titleCollection} products={productCollection}/>
          })
        }
        
    </main>
  );
};

export default Shop;
