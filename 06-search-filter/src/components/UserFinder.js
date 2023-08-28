import { Fragment, useState, useEffect, useRef } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import eventsImage from "../assets/images/emptyfolder.png";

const DUMMY_USERS = [
  { id: "u1", name: "Chevrolet Camaro" },
  { id: "u2", name: "Mercedes-Benz" },
  { id: "u3", name: "Audi A3" },
  { id: "u4", name: "Austin Maestro" },
  { id: "u5", name: "Swzuki Swift" },
  { id: "u6", name: "Volkswagen T-Roc" },
  { id: "u7", name: "Volkswagen T-Cross" },
  { id: "u8", name: "Volkswagen Tiguan" },
];
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [usersVisible, setUsersVisible] = useState(false); // State for controlling visibility

  const inputRef = useRef(null); // Reference to the input element

  useEffect(() => {
    const filtered = DUMMY_USERS.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setFilteredUsers([
        {
          id: "no-data",
          name: "No Data",
          image: eventsImage,
        },
      ]);
    } else {
      setFilteredUsers(filtered);
    }
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
    setUsersVisible(true); // Show the Users component when typing
  };

  const showButtonFilter = () => {
    setUsersVisible(true); // Toggle visibility when clicking the input
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input
          type="search"
          ref={inputRef}
          onClick={showButtonFilter}
          onChange={searchChangeHandler}
          placeholder="Cars"
        />
        {usersVisible && <Users users={filteredUsers} />}
        {/* Render Users component conditionally */}
      </div>
    </Fragment>
  );
};

export default UserFinder;
