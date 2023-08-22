import React, { useState } from "react";
import CarList from "./components/CarList";
import CarFilter from "./components/CarFilter";
import NewInput from "./components/NewInputs/NewInput";

const DUMMYLIST = [
  "Chevrolet Camaro",
  "Mercedes-Bens",
  "Audi A3",
  "Austin Maestro",
];

function App(props) {
  const [enteredResult, setEnteredResult] = useState("");

  const saveInputHandler = (inputData) => {
    console.log(inputData);
  };

  const onSelectedHandler = (selectedCar) => {
    console.log(selectedCar);
    setEnteredResult(selectedCar);
  };

  return (
    <>
      <ul>
        {DUMMYLIST.map((item, index) => (
          <CarList items={item} key={index} />
        ))}
      </ul>

      <CarFilter selected={enteredResult} onSelectedCar={onSelectedHandler} />
      <NewInput onSaveInput={saveInputHandler} />
    </>
  );
}

export default App;
