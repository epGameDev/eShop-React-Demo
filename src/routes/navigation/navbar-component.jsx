import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { selectCurrentUser, getUserSignOut } from "../../store/user/user-action";
import { CartIcon } from "../../components/cart-icon/cart-icon-component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown-component";
import logo from "../../assets/crown.svg";
import { LogoContainer, MainNavbar, NavbarMenuLinks, NavbarLink } from "./navbar-styles";



const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutCurrentUser = () => {
    dispatch(getUserSignOut());
  }

  return (
    <>
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
                  ? (<NavbarLink onClick={signOutCurrentUser}>SIGN OUT</NavbarLink>) 
                  : (<NavbarLink> <Link to={"/account"}>SIGN IN</Link> </NavbarLink>)
                }
                <CartIcon/>
                <CartDropdown />
            </NavbarMenuLinks>
        </MainNavbar>
        <Outlet/>
      </>
    )
  }

  export default NavBar;