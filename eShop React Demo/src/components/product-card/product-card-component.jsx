import PropTypes from "prop-types";

import Button from "../button/button-component";
import "./product-card-styles.scss";

export const ProductCard = ({product}) => {
    if (!product) return;

  const {imageUrl, name, price} = product;

  return (
    <div className="product__card">
      <div className="product__card-image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product__card-details">
        <p className="product__name">{name}</p>
        <div>
            <p className="product__price">${price}</p>
            <Button buttonType={"clear"} text={"Add To Cart"} />
        </div>

      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};
