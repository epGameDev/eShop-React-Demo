import styled from "styled-components";

export const FormSignInContainer = styled.div`
    padding: 0.5em 1em;
    max-width: 30rem;
    width: 100%;

    &h4 {
        margin: 0.7rem 0 3rem;
        color: #666;
        text-decoration: underline;
        font-size: 1.2rem;
    }


    input, label {
        padding: 0 0.2rem;
        height: 3.6rem;
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        color: #333333b2;
        font-weight: 600;
        transition: 0.3s all ease-in-out;
    }

    input {
        margin-bottom: 1rem;
        padding-top: 2rem;
        width: 100%;
        max-width: 100%;
        font: inherit;
        font-size: 1.2rem;
        border: none;
        border-bottom: 1px solid #6666665e;
        vertical-align: baseline;
        outline: none;
        color: #666666a4;
        cursor: text;
        background-color: #eee;
    }

    input:focus {
        border-width: 1.5px;
        border-color: #01ffffe5;
        color: #444;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label
    {
        padding-left: 0.5rem;
        color: #424242;
        font-size: 0.75rem;
        top: -1.7rem;
        pointer-events: none;
    
    }

    button{
        margin-top: 1rem;
        width: 100%;
    }

    .btn__login-container {
        justify-content: baseline;
        flex-direction: row;
        gap: 1rem;
    }

`

export const InputContainer = styled.div`
    margin-bottom: 1.25rem;
    max-width: 30rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`