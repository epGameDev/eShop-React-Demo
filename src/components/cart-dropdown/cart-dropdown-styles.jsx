import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 20rem;
  min-height: 22rem;
  max-height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 5.5rem;
  right: 1rem;
  z-index: 20;
  border-radius: 4px;

  button {
    margin-top: min(2rem, 100%);
    width: 100%;
  }
`

export const CartDropdownItems = styled.div`
  max-width: 20rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar { 
    display: none;
  }
`

export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 3.1rem auto;

`



