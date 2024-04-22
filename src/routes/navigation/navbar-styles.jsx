import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNavbar = styled.nav`
  margin: 1.7rem 0;
  padding: 0rem 1.7rem;
  width: 100%;
  height: 5rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 20;


  &.sticky-nav {
    padding: 1rem 1.17rem;
    background-color: #ffffffcc;
    border-radius: 50px;
    backdrop-filter: blur(1.1px);
    color: #000;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 5rem;

  img {
    width: 110%;
    height: 100%;
  }
`
export const NavbarMenuLinks = styled.ul`
  margin: 0;
  width: 50%;
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
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`
