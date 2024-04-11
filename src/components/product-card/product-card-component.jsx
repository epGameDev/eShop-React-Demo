import PropTypes from "prop-types";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button-component";

import { ProductCardContainer } from "./product-card-styles.jsx";

export const ProductCard = ({product}) => {
  
  const { addItemToCart } = useContext(CartContext);

  if (!product) return;
  const {imageUrl, name, price} = product;

  const addToCart = () => addItemToCart(product);
  
  return (
    <ProductCardContainer>
      <div className="product__card-image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product__card-details">
        <p className="product__name">{name}</p>
        <div>
            <p className="product__price">${price}</p>
            <Button buttonType={"clear"} text={"Add To Cart"} onClick={addToCart} />
        </div>

      </div>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};
