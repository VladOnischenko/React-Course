import React, {useEffect} from 'react';
import './header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">
          <img src="./images/logo.svg" alt="logo"/>
          <span>my travel journal.</span>
        </div>
    </header>
  );
};

export default Header;