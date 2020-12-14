import React, { useState } from "react";
import Card from './components/Card'
import "./styles.scss";

function App() {
  return (
    <>
    <div className="content">
    <Card/>
    </div>
      <div className="content"></div>
      <div className="frame">
        <h1 className="frame__title">Front End Exploration</h1>
        <div className="frame__links">
          <a
            className="frame__link"
            href="http://isengupt.github.io/trail-effect/"
          >
            Previous demo
          </a>
          <a
            className="frame__link"
            href="#"
          >
            Resume
          </a>
          <a
            className="frame__link"
            href="https://github.com/isengupt/overtop-scroll"
          >
            GitHub
          </a>
        </div>
        <div className="frame__nav">
         
     
        </div>
      </div>
    </>
  );
}

export default App;
