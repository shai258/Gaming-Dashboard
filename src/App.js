import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import config from './consts';
import Home from './components/HomePage';
import Navbar from './components/Navbar';
import GamingDashboard from './components/GamingDashboard';

import './App.css';

const App = () => { 
  return (
    <Router>
      <Security {...config}>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <SecureRoute path="/gaming-dashboard" component={GamingDashboard} />
      </Security>
    </Router>
  );
}

export default App;