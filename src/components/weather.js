import React, { Component } from 'react';

const Weather = props => {
  return (
    <div className="weather-box">
      { props.city &&
        <div>
          <p><span className="weather-title">Местоположение:</span> {props.city}, {props.country}</p>
          <p><span className="weather-title">Температура:</span> {props.temp}</p>
          <p><span className="weather-title">Давление:</span> {props.pressure}</p>
          <p><span className="weather-title">Заход солнца:</span> {props.sunset}</p>
        </div>
      }
      <p>{props.error}</p>
    </div>
  );
}

export default Weather;
