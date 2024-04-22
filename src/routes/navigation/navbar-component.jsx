import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase-utils";

import { CartIcon } from "../../components/cart-icon/cart-icon-component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown-component";
import logo from "../../assets/crown.svg";
import { LogoContainer, MainNavbar, NavbarMenuLinks, NavbarLink } from "./navbar-styles";



const NavBar = () => {

  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
        <MainNavbar className="sticky-nav">
            <div className="nav__logo-container">
                <LogoContainer to={"/"}>
                    <img src={logo} alt="logo of a crown" />
                </LogoContainer>
            </div>

            <NavbarMenuLinks>
                <NavbarLink > <Link to={"/"}>HOME</Link> </NavbarLink>
                <NavbarLink> <Link to={"/shop"}>SHOP</Link> </NavbarLink>
                {/* <NavbarLink className="nav__menu-link"> <Link to={"/contact"}>CONTACT US</Link> </NavbarLink> */}
                {
                  currentUser 
                  ? (<NavbarLink onClick={signOutUser}>SIGN OUT</NavbarLink>) 
                  : (<NavbarLink> <Link to={"/account"}>SIGN IN</Link> </NavbarLink>)
                }
                <CartIcon/>
                <CartDropdown />
            </NavbarMenuLinks>
        </MainNavbar>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavBar;