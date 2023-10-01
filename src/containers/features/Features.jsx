import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import {Link} from "react-router-dom"

const featuresData = [
  {
    title: 'Online Safety',
    text: 'Protect your digital presence with strong passwords, scam awareness, and responsible social media use. Keep your online identity and information secure.',
  },
  {
    title: 'Travel Safety',
    text: 'Plan wisely, stay aware, and communicate effectively while traveling. Ensure security during your journeys and adventures.',
  },
  {
    title: 'Home Safety',
    text: 'Home safety is paramount. Secure your home with reinforced doors, windows, alarms, and fire risk awareness. Embrace smart security tech for added protection.',
  },
  {
    title: 'Workspace Safety',
    text: 'A safe workspace fosters well-being. Promote safety culture, optimize ergonomics, and guard against cyber threats for a secure work environment.',
  },
];

const Features = () => (
  <div className="ws__features section__padding" id="features">
    <div className="ws__features-heading">
      <h1 className="gradient__text" style={{textAlign:'left'}}>Safeguarding Every Step: Prioritizing Safety in Home, Workspace, Online, and Travel Experiences</h1>
      <Link className="p" to="/tips">Click Here to Learn More</Link>
    </div>
    <div className="ws__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;