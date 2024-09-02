import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [searchCity, setSearchCity] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    function showWeatherData(response) {
      let city = response.data.city;
      let country = response.data.country;
      let description = response.data.condition.description;
      let humidity = response.data.temperature.humidity;
      let wind = response.data.wind.speed;
      let icon = response.data.condition.icon_url;
      let temperature = response.data.temperature.current;

      setWeatherForecast(
        <div>
          <h4>
            {city}, {country}.
          </h4>
          <p>Monday 11:52, {description}</p>
          <p>
            Humidity: <span>{humidity}%</span>, Wind: <span>{wind}km/h</span>
          </p>
          <span>
            <img src={icon} width={100} alt="weather icon" />{" "}
            <h3>
              {temperature}
              <small>°C</small>
            </h3>
          </span>
        </div>
      );
    }

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=73050fa355794447f81ab5349190dotd&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-search"
          placeholder="Enter a city..."
          onChange={(event) => setSearchCity(event.target.value)}
        />
        <input type="submit" value="Search" className="form-sumbit" />
      </form>
      <div>{weatherForecast}</div>
    </div>
  );
}
