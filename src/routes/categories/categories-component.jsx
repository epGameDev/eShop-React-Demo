import { useSelector } from "react-redux";


import { selectProducts } from "../../store/product/product-actions";
import CategoryPreview from "../../components/category-preview/category-preview-component";

const Categories = () => {
  const productCategoryMap  = useSelector(selectProducts);
 
  return (
    <>
      <h1>Product Catalog</h1>
      <hr />
        {
          Object.keys(productCategoryMap).map( titleCollection => {
            const productCollection = productCategoryMap[titleCollection];
            return <CategoryPreview key={titleCollection} title={titleCollection} products={productCollection}/>
          })
        }
        
    </>
  );
};

export default Categories;