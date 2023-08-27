import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const Users = (props) => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <div className={classes.scrollableList}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    </div>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Cars
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
