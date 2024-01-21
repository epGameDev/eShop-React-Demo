import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {

    return (
      <Fragment>
        <nav className="main__nav-bar">
            <div className="nav__logo-container">
                <Link className="nav__logo" to={"/"}>LOGO</Link>
            </div>

            <ul className="nav__menu-links">
                <li className="nav__menu-link"> <Link to={"/"}>Home</Link> </li>
                <li className="nav__menu-link"> <Link to={"/shop"}>Shop</Link> </li>
                <li className="nav__menu-link"> <Link to={"/contact"}>Contact Us</Link> </li>
            </ul>
        </nav>
        <Outlet/>
      </Fragment>
    )
  }

  export default NavBar;