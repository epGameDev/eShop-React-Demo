import PropTypes from 'prop-types';
import { LinkContainer, MainCategoryContainer, BackgroundImage, CategoryBody } from "./category-item-styles.jsx";

const CategoryItem = ( {category} ) => {

    const { title, imageUrl } = category;

    return (
        <LinkContainer to={`/shop/${title}`}>
            <MainCategoryContainer>
                <BackgroundImage style={ { backgroundImage: `url(${imageUrl})` } } />
                <CategoryBody>
                    <h3>{title}</h3>
                    <p>Shop Now</p>
                </CategoryBody>
            </MainCategoryContainer>
        </LinkContainer>
    )
}

export default CategoryItem

CategoryItem.propTypes = {
    category: PropTypes.object,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
}