import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase-utils";

import { CartIcon } from "../../components/cart-icon/cart-icon-component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown-component";
import logo from "../../assets/crown.svg";
import "./navbar-styles.scss";



const NavBar = () => {

  const { currentUser } = useContext(UserContext);
  
  return (
    <Fragment>
        <nav className="main__nav-bar">
            <div className="nav__logo-container">
                <Link className="nav__logo" to={"/"}>
                    <img src={logo} alt="logo of a crown" />
                </Link>
            </div>

            <ul className="nav__menu-links">
                <li className="nav__menu-link"> <Link to={"/"}>HOME</Link> </li>
                <li className="nav__menu-link"> <Link to={"/shop"}>SHOP</Link> </li>
                <li className="nav__menu-link"> <Link to={"/contact"}>CONTACT US</Link> </li>
                {
                  currentUser 
                  ? (<li onClick={signOutUser} className="nav__menu-link">SIGN OUT</li>) 
                  : (<li className="nav__menu-link"> <Link to={"/account"}>SIGN IN</Link> </li>)
                }
                <CartIcon/>
                <CartDropdown />
            </ul>
        </nav>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavBar;