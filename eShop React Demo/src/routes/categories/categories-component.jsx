import { useContext } from "react";

import { ProductsContext } from "../../contexts/product-context";
import CategoryPreview from "../../components/category-preview/category-preview-component";

const Categories = () => {
  const { categoriesMap } = useContext(ProductsContext);
 
  return (
    <>
      <h1>Product Catalog</h1>
      <hr />
        {
          Object.keys(categoriesMap).map( titleCollection => {
            const productCollection = categoriesMap[titleCollection];
            return <CategoryPreview key={titleCollection} title={titleCollection} products={productCollection}/>
          })
        }
        
    </>
  );
};

export default Categories;