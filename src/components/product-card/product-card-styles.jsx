import styled from "styled-components";

//max-width: 20rem; //320px;
export const ProductCardContainer = styled.div`
    min-width: 20rem;
    max-width: 30rem;
    width: 100%;
    background: #242424;
    color: #eee;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    justify-self: center;
  
    p {
      padding: 0 1.2rem;
    }
    
    .product__card-image-container {
        width: 100%;
        height: 100%;
        max-height: 303px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    
    .btn__container{
        margin: auto;
        position: absolute;
        right: 1em;
        bottom: 0.8em;
        z-index: 10;
    }

    img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        min-height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
        // transition: scale 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        transition: scale 25s cubic-bezier(0, 1.66, 0.4, 0.39);
    }

    img:hover {
        scale: 1.2;
    }

    .product__card-details{
        min-height: 7.4rem;
        div{
            padding-top: 0.5em;
        }
    }

    .product__name{
        font-size: 1.2rem;
    }
    
    &:media screen and (max-width: 635px) {
        .product__card{
            min-width: 70%;
        }
    }
`
