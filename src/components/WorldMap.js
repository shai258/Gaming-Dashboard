import React from 'react';

import './WorldMap.css';
import WorldMapHeader from './WorldMapHeader';

function WorldMap() {
  let squares = new Array(80).fill(0).map(() => (Math.floor(Math.random() * (5 - 1)) + 1));
  let battery = new Array(30).fill(1);

  let shortDescription = "gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliqu  non odio euismod lacinia at qui"

  let longDescription = "lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus"

    return (
      <div className="worldMap">
        <WorldMapHeader />
        <div className="batteryContainer">
          <h3 className="batteryTitle">100%</h3>
          {battery.map((v, i) => <div key={i} className="batteryLevel"></div>)}
        </div>
        <div className="mainPanel">
          <div className="squares">
              {squares.map((v, i) => <div key={i} className={`square${v}`}></div>)}
          </div>
          <div className="globus">
            <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JpgvRQVu-wGnBmOlN-JG1ZFG1g7GWixY8Q&usqp=CAU" alt="Globus" />
          </div>
          <div className="descriptions">
            <div className="description">{shortDescription}</div>
            <div className="description">{longDescription}</div>
            <div className="description">{shortDescription}</div>
          </div>
        </div>
      </div>
    );
  }

  export default WorldMap;