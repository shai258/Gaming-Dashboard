import React from 'react';

import './WorldMap.css';
 
function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr
}

function WorldMapHeader() {
  let fibo = fib(29);

    return (
      <div className="header">
        <h1 className="mainTitle">ACTIVATED</h1>
        <div className="progressBar"></div>
        <div className="subTitle">
          <h2 className="topSubTitle">WORLD MAP</h2>
          <h2 className="bottomSubTitle">INTERACTIVE</h2>
        </div>
        <div className="fibonacciSequence">
          {fibo.map((v, i) => <div key={i} className="fiboNum">{v}</div>)}
        </div>
      </div>
    );
  }

  export default WorldMapHeader;