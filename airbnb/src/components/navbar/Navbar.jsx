import React from 'react';
import './navbar.scss'

const Navbar = (props) => {
  const { logo } = props
  return (
    <nav className="nav">
        <img src={logo} alt={logo} className="nav__logo"/>
    </nav>
  );
};

export default Navbar;