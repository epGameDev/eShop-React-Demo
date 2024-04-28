import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


import { selectProductCategories } from "../../store/product/product-actions.js";
import { ProductCard } from "../../components/product-card/product-card-component";
import { ProductContainer } from "./category-styles.jsx";

const Category = () => {
    const { category } = useParams();
    const products = useSelector(selectProductCategories);

    return (
        <>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ProductContainer>
                {
                    products 
                    ? products[`${category}`].map( product => <ProductCard key={product.id} product={product}/>) 
                    : <h2>Loading...</h2>
                }
            </ProductContainer>
        </>
    )
}

export default Category;