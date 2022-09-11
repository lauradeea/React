import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersLists";
function App(props) {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {/* set to an array */}
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
