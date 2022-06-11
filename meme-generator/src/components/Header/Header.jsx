import React from 'react';
import {FaCriticalRole} from 'react-icons/fa'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <FaCriticalRole className="logo"/>
      <h1 className="header__title">Meme Generator</h1>
      <h4 className="header__project">React Course - Project 3</h4>
    </header>
  );
};

export default Header;