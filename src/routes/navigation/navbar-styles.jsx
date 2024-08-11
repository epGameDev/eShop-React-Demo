import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNavbar = styled.nav`
  margin: 1.7rem 2rem;
  padding: 0rem 1.7rem;
  height: 5rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 20;


  &.sticky-nav {
    padding: 1rem 5.17rem;
    background-color: #ffffffcc;
    border-radius: 50px;
    backdrop-filter: blur(1.1px);
    color: #000;

    @media (max-width: 720px) {
      padding: 1rem 2rem;
    }
  }


`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 5rem;

  img {
    width: 110%;
    min-width: 55px;
    height: 100%;
  }

    @media (max-width: 720px) {
      display: none;
    }
`
export const NavbarMenuLinks = styled.ul`
  margin: 0 0 0 auto;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  list-style: none;


`

export const NavbarLink = styled.li`
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 5ms ease-in;
  &:hover {
    color: 000;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`
