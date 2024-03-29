import { useContext, Fragment } from "react";

import { ProductsContext } from "../../contexts/product-context";
import { ProductCard } from "../../components/product-card/product-card-component";
import "./shop-styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(ProductsContext);
 
  return (
    <Fragment>
      <main className="main__container product__page">
        <h1>Product Catalog</h1>
        <hr />

          {
            Object.keys(categoriesMap).map( (title) => (
              <Fragment key={title}>
                <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
                <div className="product__container">
                  { categoriesMap[title].map( (product) => <ProductCard key={product.id} product={product}/> ) }
                </div>
              </Fragment>
            ))
          }
          
      </main>
    </Fragment>
  );
};

export default Shop;
