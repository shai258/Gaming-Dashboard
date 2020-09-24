import React from 'react';

import WorldMap from './WorldMap';
import './GamingDashboard.css';

const GamingDashboard = () => { 
  return (
    <div className="gamingDashboard">
      <WorldMap />
      <div className="radar"></div>
      <div className="location"></div>
      <div className="levels"></div>
    </div>
  );
};

export default GamingDashboard;