import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChnageHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSaveSelect={filterChnageHandler}
      />
      <ExpensesList items={filterExpenses} />
    </div>
  );
}

export default Expenses;
