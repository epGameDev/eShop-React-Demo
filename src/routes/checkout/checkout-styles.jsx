import styled from "styled-components";

export const CheckoutContainer = styled.main`
    .checkout__cart-container{
        min-height: 30rem;
        min-height: 35dvh;
        position: relative;

        .checkout__empty-cart{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .checkout__cart-headers{
        margin: 3rem auto 0rem;
        padding-left: 2rem;
        max-width: 1200px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem 5rem;
        font-weight: 600;

        .checkout__details{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .checkout__totals {
            display: flex;
            gap: 3rem;
        }

        @media (max-width: 420px){
            padding-left: 0;
        }
    }

    }
    .checkout__hr{
        max-width: 1200px;
        margin: 0rem 0rem 2rem;
        margin: auto;
    }

    .total__price{
        margin: auto;
        max-height: 3rem;
        width: 100%;
        padding: 0rem 1rem;
        max-width: 1200px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        font-size: 1.4rem;

        h4{
            margin: 0;
        }
    }
    }

    @media (max-width: 550px) {
    .checkout__cart-headers{
        flex-wrap: wrap;

        .checkout__title, .checkout__name{
            display: none;
        }

        .checkout__totals {
         margin-left: 24vw;
        }
    }


`;
