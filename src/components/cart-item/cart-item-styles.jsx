import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    gap: 1rem;

    img {
        padding: 0.5em;
        width: 6rem;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    .cart__product-price {
        width: 8rem;
        display: flex;
        justify-content: space-between;
    }
`
