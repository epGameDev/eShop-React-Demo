import { useContext } from "react";

import { ProductsContext } from "../../contexts/product-context";
import "./shop-styles.scss";

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return(
        <main className="main__container product__page">
            <h1>Product Catalog</h1>
            <hr/>

            <h4>Hats</h4>
            <div className="product__container">
                { products.map( item => 
                    {
                        const {id, name, imageUrl, price} = item;

                        return (
                            <div key={id} className="product__card">
                                <div className="product__card-image-container">
                                    <img src={imageUrl} alt={name} />
                                </div>
                                <p className="product__name">{name}</p>
                                <p className="product__price">${price}</p>
                            </div>
                        );
                    })

                }
            </div>
        </main>
    )
}

export default Shop;