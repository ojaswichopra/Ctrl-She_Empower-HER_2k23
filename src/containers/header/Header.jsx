import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="ws__header section__padding" id="home">
    <div className="ws__header-content">
      <h1 className="gradient__text">The best protection any women can have is COURAGE</h1>
      <p>Empowering women worldwide through knowledge and courage. Our mission is to provide women with vital information, safety tips, and resources to overcome safety concerns and navigate the world confidently. Join us to make every woman fearless and informed!</p>


    </div>

    <div className="ws__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;