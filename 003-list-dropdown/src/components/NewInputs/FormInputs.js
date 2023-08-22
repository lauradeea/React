import React, { useState } from "react";

const FormInputs = (props) => {
  const [enteredTitle, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = { title: enteredTitle }; //an object

    props.onSaveInputData(formData);

    // set it back to an empty string
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="newinput-form">
        <label>Insert Car Name</label>
        {/* value = pass a new value back to the input */}
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="newinput-action">
        <button type="submit">Add Car</button>
      </div>
    </form>
  );
};

export default FormInputs;
