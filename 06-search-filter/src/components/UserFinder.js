import { Fragment, useState, useEffect } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";

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

  useEffect(() => {
    const filtered = DUMMY_USERS.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setFilteredUsers([
        {
          id: "no-data",
          name: "No Data",
        },
      ]);
    } else {
      setFilteredUsers(filtered);
    }
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
