import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ws__navbar">
      <div className="ws__navbar-links">
        {/* <div className="ws__navbar-links_logo">
          <img src={logo} />
        </div> */}
        <div className="ws__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wws">Our Goal</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#possibility">Know Your Rights</a></p>
          <p><a href="#blog">News Updates</a></p>
          <p><a href="#about">About Us</a></p>
        </div>
      </div>
      <div className="ws__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ws__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ws__navbar-menu_container scale-up-center">
          <div className="ws__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wws">What is ws?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="ws__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;