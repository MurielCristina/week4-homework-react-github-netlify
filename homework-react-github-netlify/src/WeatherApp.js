import React, { useState } from "react";

export default function WeatherApp() {
  return (
    <div>
      <form className="form">
        <input
          type="search"
          className="form-search"
          placeholder="Enter a city..."
        />
        <input type="submit" value="Search" className="form-sumbit" />
      </form>
    </div>
  );
}
