import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./category-item-styles.scss";

const CategoryItem = ( {category} ) => {

    const { title, imageUrl } = category;

    return (
        <Link className="link__container" to={`/shop/${title}`}>
            <div className="main__category-container">
                <div className="category__background-img" style={ { backgroundImage: `url(${imageUrl})` } } />
                <div className="category__body-container">
                    <h3>{title}</h3>
                    <p>Shop Now</p>
                </div>
            </div>
        </Link>
    )
}

export default CategoryItem

CategoryItem.propTypes = {
    category: PropTypes.object,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
}