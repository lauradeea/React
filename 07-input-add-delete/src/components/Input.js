import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Click on button");

    const enteredData = {
      text: enteredValue,
    };
    console.log(enteredData);
    setEnteredValue("");
  };
  const inputFormHandler = (event) => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      setEnteredValue(value);
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.inputWrapper}>
        <label>Input Goal</label>
        <input
          type="text"
          value={enteredValue}
          placeholder="Goal"
          onChange={inputFormHandler}
        />
        <button type="submit">Add Goals</button>
      </div>
    </form>
  );
};

export default Input;
