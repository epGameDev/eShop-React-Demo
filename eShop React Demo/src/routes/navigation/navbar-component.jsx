import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navbar-styles.scss";
import logo from "../../assets/crown.svg"


const NavBar = () => {

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
                <li className="nav__menu-link"> <Link to={"/sign-in"}>SIGN IN</Link> </li>
            </ul>
        </nav>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavBar;