import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./rick.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} className="navLogo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li className="firstList">
              <Link to="/">Episodes</Link>
            </li>
            <li>
              <Link to="/character">Characters</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
