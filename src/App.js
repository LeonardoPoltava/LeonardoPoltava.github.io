import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_KEY = "0713c8fe88b7198994a3c4b99eb3c74f";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      if(data.name) {
        let sunset = data.sys.sunset;
        const time = ms =>{
          var date = new Date(ms*1000);
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        }
        var sunset_date = time(sunset);﻿

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: undefined
        });
      }
      else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Нужно ввести правильный город на английском (нап. Kiev или Poltava)"
        });
      }
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div className="weather">
        <Info />
        <div className="weather-inner">
          <Form weatherMethod={this.gettingWeather} />
          <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            sunset={this.state.sunset}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
