import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const Users = (props) => {
  const [showUsers, setShowUsers] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const usersList = (
    <div className={classes.scrollableList}>
      <ul>
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            onUserClick={handleUserClick}
          />
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
      {selectedUserId && <p>Selected user ID: {selectedUserId}</p>}
    </div>
  );
};

export default Users;
