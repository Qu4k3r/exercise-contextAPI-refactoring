import React from 'react';
import { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './contextAPI/MyContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, value) {
    this.setState({ cars: { [car]: value } })
  }

  render() {
    const { cars } = this.state;
    const contextValue = {
      cars,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
