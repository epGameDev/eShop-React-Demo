import PropTypes from "prop-types";

import { ProductCard } from "../product-card/product-card-component";
import "./category-preview-styles.scss";

const CategoryPreview = ({title, products}) => {


    return (
        <div className="category__preview-container">
            <h2>
                <span className="category__preview-title">{title.charAt(0).toUpperCase() + title.slice(1)}</span>
            </h2>

            <div className="category__product-preview">
                {
                    products.filter((_, index) => index < 4).map( item => {
                        return <ProductCard key={item.id} product={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;

CategoryPreview.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
}