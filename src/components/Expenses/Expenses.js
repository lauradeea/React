import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChnageHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div className="expenses test">
      <ExpensesFilter
        selected={filterYear}
        onSaveSelect={filterChnageHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
