import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersLists";
function App(props) {
  return (
    <div>
      <AddUser />
      <UsersLists users={[]} /> //set to an array
    </div>
  );
}

export default App;
