import React from 'react';

const Car = ({ brand, color }) => {
  return (
    <p>This is a {brand} car and its color is {color}</p>
  );
};

class Garbage extends React.Component {
  text = "Arul";
  carInfo = { type: "fuji", color: "blue" };
  marList = [
    { brand: "BMW", color: "red" },
    { brand: "ford", color: "green" },
    { brand: "tesla", color: "black" },
  ];

  render() {
    return (
      <div>
        <h1>Kumar</h1>
        <p>
          My default car type is {this.carInfo.type} and color is{" "}
          {this.carInfo.color}
        </p>
        <h2>{this.text}</h2>
        <ul>
          {this.marList.map((car, index) => (
            <li key={index}>
              <h3>
                Hi, my car brand is {car.brand} and color is {car.color}
              </h3>
              <Car brand={car.brand} color={car.color} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Garbage;
