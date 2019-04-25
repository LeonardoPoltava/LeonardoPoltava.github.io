import React, { Component } from 'react';

const Form = props => (
  <form action="" className="weather-form" onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Город" />
    <button>Получить погоду</button>
  </form>
)

export default Form;
