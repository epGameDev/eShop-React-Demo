import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { ProductCard } from "../product-card/product-card-component";
import { CategoryPreviewContainer } from "./category-preview-styles.jsx";
import { selectProductIsLoading } from "../../store/product/product-actions.js";
import Spinner from "../loading-spinner/loading-spinner-component.jsx";

const CategoryPreview = ({title, products}) => {
    const isProductLoading = useSelector(selectProductIsLoading)

    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={`/shop/${title}`}>
                    <span className="category__preview-title">{`${title.charAt(0).toUpperCase() + title.slice(1)} `} </span>
                </Link>
            </h2>

            <div className="category__product-preview">
                {
                    !isProductLoading
                    ? products.filter((_, index) => index < 4).map( item => {
                        return <ProductCard key={item.id} product={item}/>
                      })
                    : <Spinner />
                }
            </div>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;

CategoryPreview.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
}