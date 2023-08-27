import classes from "./User.module.css";

const User = (props) => {
  return (
    <li className={classes.user} onClick={() => props.onUserClick(props.name)}>
      {props.name}
    </li>
  );
};

export default User;
