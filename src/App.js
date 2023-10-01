import React from 'react';
import Footer from './containers/footer/Footer.jsx';
import Blog from './containers/blog/Blog.jsx';
import KnowYourRights from './containers/KnowYourRights/KnowYourRights.jsx';
import Features from './containers/features/Features.jsx';
import OurGOAL from './containers/ourGOAL/OurGOAL.jsx';
import Header from './containers/header/Header.jsx';
import CTA from './components/cta/Cta.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import MythBuster from './components/mythBuster/MythBuster.jsx';
import Tips from './components/Tips/Tips.jsx';
import Rights from './components/rights/Rights.jsx';
import Quiz from './containers/quiz/StringQuizSection.jsx'
import{
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
    <Router>
    
      
      <Navbar />
      
      <Switch>
      

    <Route exact path="/tips">
        <Tips/>
    </Route>
    <Route exact path="/r">
        <Rights/>
    </Route>
    <Route   path="/">
      <Header />
    
    <OurGOAL />
    <Features />
    <KnowYourRights />
    <Quiz/>
    <MythBuster/>
    <Blog />
    <Footer />
    </Route>
    </Switch>

    </Router>
    </div>
  </div>
);

export default App;