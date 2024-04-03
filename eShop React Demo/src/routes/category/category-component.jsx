import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/product-context";
import { ProductCard } from "../../components/product-card/product-card-component";

import "./category-styles.scss";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(ProductsContext);
    const [products, setProducts ] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    

    return (
        <>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="product__container">
                {
                    products 
                    ? products.map( product => <ProductCard key={product.id} product={product}/>) 
                    : <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Category;