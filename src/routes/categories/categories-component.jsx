import { useSelector } from "react-redux";


import { selectProductCategories } from "../../store/product/product-actions";
import CategoryPreview from "../../components/category-preview/category-preview-component";

const Categories = () => {
  const productCategoryMap  = useSelector(selectProductCategories);
 
  return (
    <>
      <h1>Product Catalog</h1>
      <hr />
        {
          Object.keys(productCategoryMap).map( title => {
            const products = productCategoryMap[title];
            return <CategoryPreview key={title} title={title} products={products}/>
          })
        }
        
    </>
  );
};

export default Categories;