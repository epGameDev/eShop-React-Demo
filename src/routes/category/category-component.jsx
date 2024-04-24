import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/product-context";
import { ProductCard } from "../../components/product-card/product-card-component";

import { ProductContainer } from "./category-styles.jsx";

const Category = () => {
    const { category } = useParams();
    const { productCategoryMap } = useContext(ProductsContext);
    const [products, setProducts ] = useState(productCategoryMap[category]);
    
    useEffect(() => {
        setProducts(productCategoryMap[category])
    }, [category, productCategoryMap])
    

    return (
        <>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ProductContainer>
                {
                    products 
                    ? products.map( product => <ProductCard key={product.id} product={product}/>) 
                    : <h2>Loading...</h2>
                }
            </ProductContainer>
        </>
    )
}

export default Category;