import React from "react";

import Card from "../UI/Card";
import classes from "./UsersLists.module.css";
const UsersLists = (props) => {
  return (
    // users is an array of user objects when ever object has a name property and an age property
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersLists;
