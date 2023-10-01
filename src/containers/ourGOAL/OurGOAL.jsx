import React from 'react';
import Feature from '../../components/feature/Feature';
import './ourGOAL.css';

const Whatws = () => (
  <div className="ws__whatws section__margin" id="wws">
    <div className="ws__whatws-feature">
      <Feature title="What is Our Goal" text="Our goal is simple yet profound: We aim to empower women worldwide by providing vital information, safety tips, and resources. We believe that knowledge and courage can help women overcome safety concerns and confidently navigate the world. Join us in our mission to make every woman fearless and informed." />
    </div>
    <div className="ws__whatws-heading">
      <h1 className="gradient__text">Together We Thrive: Women's Safety Matters</h1>
      <p><a href="#features">Explore the Library</a></p>
    </div>
    <div className="ws__whatws-container">
      <Feature title="Updates" text="Stay informed and empowered with the latest updates and news on women's safety. Explore the stories shaping the future of women's safety today." />
      <Feature title="Emergency Contacts" text="Explore essential contacts dedicated to ensuring women's safety. For your immediate assistance, we're here to connect you with the right resources." />
      <Feature title="Education" text="Explore home safety, workspace security, and online safety guides. Plus, stay secure and educated on your travels with our travel safety tips and resources." />
    </div>
  </div>
);

export default Whatws;