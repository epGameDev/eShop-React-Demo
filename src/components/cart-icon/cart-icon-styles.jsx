import styled from "styled-components";

export const IconContainer = styled.div`
  margin-left: 1em;
  padding-bottom: 0.3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon__shopping-bag{
    width: 2.5rem;
    min-width: 2.5rem;

  }

  .item-count {
    position: absolute;
    font-size: 0.8rem;
    font-weight: 600;
    bottom: 0.5rem;
    pointer-events: none;
  }

  @media (max-width: 720px){
    margin-left: auto;
  }
`

