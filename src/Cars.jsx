// src/Cars.jsx
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './contextAPI/MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
      {
        value => {
          const { red, blue, yellow } = value.cars;
          return (
            <div>
              <div>
                <img
                  className={red ? 'car-right' : 'car-left'}
                  src={carRed}
                  alt="red car"
                />
                <button
                  onClick={() => value.moveCar('red', !red)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={blue ? 'car-right' : 'car-left'}
                  src={carBlue}
                  alt="blue car"
                />
                <button
                  onClick={() => value.moveCar('blue', !blue)}
                  type="button"
                >
                  Move
                </button>
              </div>
              <div>
                <img
                  className={yellow ? 'car-right' : 'car-left'}
                  src={carYellow}
                  alt="yellow car"
                />
                <button
                  onClick={() => value.moveCar('yellow', !yellow)}
                  type="button"
                >
                  Move
                </button>
              </div>
            </div>
          );
        }
      }
    </MyContext.Consumer>
  );
}

export default Cars;