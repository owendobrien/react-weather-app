import { useState } from "react";
var moment = require('moment');

const api = {
  key: "c03a48686a4eccc925c1a091fab82837",
  base: "https://api.openweathermap.org/data/2.5/"
}

function DayContainer() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  let newDate = new Date();
  const weekday = weather.dt * 1000
  newDate.setTime(weekday)

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <h1 className="title text-center">Daily Forecast</h1>
        {(typeof weather.main != "undefined") ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-3 text-center">
              <div className="card">
                <h2 className="card-title">{weather.name}, {weather.sys.country}</h2>
                <p className="card-text">{moment(newDate).format('dddd')}</p>
                <p className="text-muted">{moment(newDate).format('MMM Do, h:mm a')}</p>
                <h2 className="temp">
                  { Math.round(weather.main.temp)}°f
                </h2>
                <div className="card-body">
                  <i className={`owf owf-${weather.weather[0].id} owf-5x`}></i>
                  <p className="card-text">{weather.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default DayContainer;
