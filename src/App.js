import React, { useContext, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer/';
import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
      
      <Router>
      <Navigation />
        <Switch>
 
    
    { Routes }
 
        </Switch>
      
        <Footer />


      </Router>
    
    </React.Fragment>
  );
}

export default App;
