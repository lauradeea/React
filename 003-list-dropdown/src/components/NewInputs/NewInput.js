import FormInputs from "./FormInputs";

const NewInput = (props) => {
  const saveDataInputHandler = (formData) => {
    const saveData = {
      ...formData,
      id: Math.random().toString(),
    };

    props.onSaveInput(saveData);
  };

  return (
    <>
      <FormInputs onSaveInputData={saveDataInputHandler} />
    </>
  );
};

export default NewInput;
