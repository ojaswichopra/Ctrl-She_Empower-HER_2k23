import React from 'react';
import wsLogo from '../../logo.png';
import './footer.css';

const Footer = () => (
  <div className="ws__footer section__padding" id='about'>
    <div className="ws__footer-heading">
      <h1 className="gradient__text">Do you want to know more About US?</h1>
    </div>

    <div className="ws__footer-btn">
      <p>At EmpowerHerSafe.com, we're dedicated to women's safety. Developed by Loveleen Sachdeva, Ojaswi Chopra and Gurmannat Sohal, our mission is to empower women with knowledge and resources for a safer, more confident life. <br /> Join us in our journey toward a safer world for all women.
</p>
      
    </div>

    <div className="ws__footer-links">
      <div className="ws__footer-links_logo">
        {/* <img src={wsLogo} alt="ws_logo" /> */}
        <p>abcd@iitr.ac.in <br /> All Rights Reserved</p>
      </div>
      <div className="ws__footer-links_div">
        <h3>Emergency Contacts</h3>
        <p>Police: 12345</p>
        <p>Women Helpline: 78906</p>
        <p>Ambulance: 67893</p>

      </div>
      <div className="ws__footer-links_div">
        <h3>Relief Groups</h3>
        <p><a href="wit.org.in">wit.org.in</a> </p>
        <p> <a href="mynamahila.com">mynamahila.com</a></p>
        <p> <a href="oxfamindia.org">oxfamindia.org </a></p>
      </div>
      <div className="ws__footer-links_div">
        <h3>Get in touch with us</h3>
        <p>EmpowerHerSafe@gmail.com</p>
        <p>085-132567</p>
      </div>
    </div>

    <div className="ws__footer-copyright">
      <p>All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;