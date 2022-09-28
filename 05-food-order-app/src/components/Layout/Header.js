import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className="classes.header">
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div></div>
    </>
  );
};

export default Header;
