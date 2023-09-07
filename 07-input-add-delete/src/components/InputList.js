import InputItem from "./InputItem";

const InputList = (props) => {
  return (
    <>
      <ul className="goal-list">
        {props.items.map((goal) => (
          <InputItem key={goal.id} name={goal.name} />
        ))}
      </ul>
    </>
  );
};

export default InputList;
