import React from 'react'
import Footer from './footer/Footer.jsx';
import Blog from './blog/Blog.jsx';
import KnowYourRights from './KnowYourRights/KnowYourRights.jsx';
import Features from './features/Features.jsx';
import OurGOAL from './ourGOAL/OurGOAL.jsx';
import Header from './header/Header.jsx';
import CTA from '../components/cta/Cta.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import MythBuster from '../components/mythBuster/MythBuster.jsx';
import Tips from '../components/Tips/Tips.jsx';
const contain = () => {
  return (
    <div>
      <Header />
    
    <OurGOAL />
    <Features />
    <KnowYourRights />
    <MythBuster/>
    <Blog />
    <Footer />
    </div>
  )
}

export default contain
