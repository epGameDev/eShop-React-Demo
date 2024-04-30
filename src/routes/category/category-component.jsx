import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


import { selectProductCategories, selectProductIsLoading } from "../../store/product/product-actions.js";
import { ProductCard } from "../../components/product-card/product-card-component";
import { ProductContainer } from "./category-styles.jsx";
import Spinner from "../../components/loading-spinner/loading-spinner-component.jsx";

const Category = () => {
    const { category } = useParams();
    const products = useSelector(selectProductCategories);
    const isProductsLoading = useSelector(selectProductIsLoading);

    return (
        <>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <ProductContainer>
                {
                    !isProductsLoading 
                    ? products[`${category}`].map( product => <ProductCard key={product.id} product={product}/>) 
                    : <Spinner/>
                }
            </ProductContainer>
        </>
    )
}

export default Category;