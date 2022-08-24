import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChnageHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSaveSelect={filterChnageHandler}
      />
      {expensesContent}
    </div>
  );
}

export default Expenses;
