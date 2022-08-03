import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseForm2 from "./components/Expenses/ExpenseForm2";
function App(props) {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 4.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const newExpenceHandler = (expense) => {
    console.log("app.js");
    console.log(expense);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onExpenseData={newExpenceHandler} />
      <Expenses items={expenses} />
      <ExpenseForm2 />
    </div>
  );
}

export default App; // if you want to use it in another file we have to export or import it
