import { SearchOutlined, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to='/women'>Women</Link>
            <Link to='/men'>Men</Link>
            <Link to='/denim'>Denim</Link>
            <Link to='/shop'>The Gift Shop</Link>
            <Link to='/about'>WAbout</Link>
          </li>
        </ul>

        <div className="logo">
          <h1>Eshopland</h1>
        </div>

        <div className="right">
          <div className="search">
            <SearchOutlined className="search-icon"/>
            <button className="sch-btn">Search</button>
          </div>

          <div className="right-buttons">
            <button>
              <Link to='/login'>Log In</Link>
            </button>

            <button>
              <Link to='/sign-up'>Sign Up</Link>
            </button>

            <ShoppingBasket/>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header;