import React from 'react';
import Footer from './containers/footer/Footer.jsx';
import Blog from './containers/blog/Blog.jsx';
import Possibility from './containers/possibility/Possibilty.jsx';
import Features from './containers/features/Features.jsx';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3.jsx';
import Header from './containers/header/Header.jsx';
import CTA from './components/cta/Cta.jsx';
import Brand from './components/brand/Brand.jsx';
import Navbar from './components/navbar/Navbar.jsx';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;