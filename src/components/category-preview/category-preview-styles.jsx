import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;

    .category__preview-title{
        width: 100%;
        cursor: pointer;
        text-decoration: underline;
        font-size: 2rem;
        display: inline-block;
        transition: scale 0.2ms ease-in-out;
    }

    .category__preview-title:hover{
        color: #000000;
        text-shadow: 1px 1px #00eeff57;
    }

    .category__product-preview {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 2rem;
    }
`
