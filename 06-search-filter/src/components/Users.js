import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const Users = (props) => {
  const [showUsers, setShowUsers] = useState(true);
  const [selectedUserName, setSelectedUserName] = useState([]);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const handleUserClick = (userName) => {
    setSelectedUserName((prevUserNames) => {
      if (prevUserNames.includes(userName)) {
        return prevUserNames.filter((name) => name !== userName);
      } else {
        return [...prevUserNames, userName];
      }
    });
  };

  const usersList = (
    <div className={classes.scrollableList}>
      <ul>
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            isSelected={selectedUserName.includes(user.name)}
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

      {selectedUserName && (
        <div className={classes.list}>
          {selectedUserName.map((name) => (
            <span key={name} className={classes.selectedUser}>
              {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
