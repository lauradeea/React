import React, { useState } from "react";
const CarFilter = (props) => {
  const [search_result, setResult] = useState("");

  const dropdownChangeHandler = (event) => {
    props.onSelectedCar(event.target.value);
  };

  return (
    <div className="car-filter">
      <div className="cart-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option>Car</option>
          <option>Chevrolet Camaro</option>
          <option>Mercedes-Bens</option>
          <option>Audi A3</option>
          <option>Austin Maestro</option>
        </select>
      </div>

      <div className="car-results">{search_result}</div>
    </div>
  );
};

export default CarFilter;
