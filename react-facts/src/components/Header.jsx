import React from "react";
import Logo from "../images/icon.svg"

function Header() {
  return (
    <header className="header">
        <nav className="header__container wrapper">
          <div className="header__logo">
            <img src={Logo} alt="logo"/>
            <p>ReactFacts</p>
          </div>
          <ul className="nav-item">
            <li>React Course - Project 1</li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;