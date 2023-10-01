import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './knowYourRights.css';
import {Link} from 'react-router-dom'

const Possibility = () => (
  <div className="ws__possibility section__padding" id="possibility">
    <div className="ws__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="ws__possibility-content">
      <h4>  <Link to="/r"> Click Here to Know More </Link></h4>
      <h1 className="gradient__text">Know Your Rights for Women's Safety in India</h1>
      <p>Women's safety is a fundamental human right, and it's essential for women to be aware of their legal rights and protections in India. Knowing your rights can empower you to take action and seek justice if you ever face harassment, assault, or any form of violence.</p>
      <h4><Link to="/r"> Click Here to Know More </Link></h4>
    </div>
  </div>
);

export default Possibility;