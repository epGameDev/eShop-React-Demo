import styled from "styled-components";

export const CheckoutProductCard = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1200px;
    padding: 1rem 0.5rem;
    display: flex;
    gap: 1rem;

    .checkout__img-container{
        width: 100%;
        height: 100%;
        max-width: 7rem;
        max-height: 7rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1/1;
        }
    }

    .checkout__product-details{
        padding-right: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;

        .checkout__product-totals{
            display: flex;
            gap: 2rem;
            align-items: center;

            input {
                width: 4rem;
                // border: none;
                border-color: #44444425;
                outline: none;
                font: inherit;
                font-weight: 600;
                text-align: center;
            }

            .price {
                min-width: 4rem
            }
        }
    }

    .checkout__product-delete{
        padding-left: 0.5rem;
        font-weight: 900;
        cursor: pointer;
    }
    
    @media (max-width: 550px) {

        .checkout__product-card{
            flex-wrap: wrap;
    
            .checkout__img-container{
                max-width: 6rem;
                max-height: 6rem;
                
                img {
                    width: 100%;
                    min-width: 6rem;
                }
            }
        }
    
        .checkout__product-details{
            flex-wrap: wrap;
        }
    
        h3{
            margin: 0;
        }
    }
`