import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";
import Header from "./Header";

import "./App.css";
import "./Footer.css";
import "./Header.css";

function App() {
  return (
    <div className="app">
      <body>
        <div className="container">
          <Header />
          <h2>Weather Forecast</h2>
          <WeatherApp />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
