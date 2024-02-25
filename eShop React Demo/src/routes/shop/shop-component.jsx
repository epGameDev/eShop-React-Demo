import { useContext } from "react";

import { ProductsContext } from "../../contexts/product-context";
import { ProductCard } from "../../components/product-card/product-card-component";
import "./shop-styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <main className="main__container product__page">
      <h1>Product Catalog</h1>
      <hr />

      <h4>Hats</h4>
      <div className="product__container">
        { products.map( product => <ProductCard key={product.id} product={product} /> ) }
      </div>
    </main>
  );
};

export default Shop;
