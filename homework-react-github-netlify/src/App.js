import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

import "./App.css";
import "./Footer.css";

function App() {
  return (
    <div className="app">
      <body>
        <div className="container">
          <h3>SheCodes React Week 4 Homework</h3>
          <h1>React + GitHub + Netlify</h1>
          <WeatherApp />
          <WeatherApp />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
