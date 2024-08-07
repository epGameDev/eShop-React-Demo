import styled from "styled-components";

import { SpinnerContainer } from "../loading-spinner/loading-spinner-styles";

export const ButtonContainer = styled.div`
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    & button{
        
        border-radius: 5px;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.2s;
    }

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    & .btn__google {
        color: #fff;
        background-color: #4285f4;
        border: 1px solid #444444ab;
    }

    & .btn__google:hover {
        background-color: #0b67fc;
        border: 1px solid #cecece;
        box-shadow: inset 0px 4px 9px 6px #004ac259;
    }

    & .btn__primary{
        background-color: #1a1a1a;
        color: #eee;
        border: 1px solid #eee;
    }

    & .btn__primary:hover {
        background-color: #fff;
        color: #1a1a1a;
        border: 1px solid #000;
        box-shadow: inset 0px -4px 4px 2px #736e6e0f;
    }


    & .btn__secondary{
        background-color: #fff;
        color: #1a1a1a;
        border: 1px solid #000000;
    }

    & .btn__secondary:hover {
        background-color: #1a1a1a;
        color: #eee;
        border: 1px solid #eee;
        box-shadow: inset 0px 4px 6px 6px #75737370;
    }

    & .btn__clear{
        background-color: #1a1a1a00;
        color: #eee;
        border: 1px solid #eee;
        border-radius: 0px;
    }

    & .btn__clear:hover {
        background-color: #fff;
        color: #1a1a1a;
        border: 1px solid #000;
        box-shadow: inset 0px -4px 7px 1px #c9c9c933;
    }

`
export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`