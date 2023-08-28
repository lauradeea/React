import classes from "./User.module.css";

const User = (props) => {
  const itemClassName = `${classes.user} ${
    props.isSelected ? classes.selected : ""
  }`;

  return (
    <li className={itemClassName} onClick={() => props.onUserClick(props.name)}>
      {props.name}
    </li>
  );
};

export default User;
