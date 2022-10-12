import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Card from "./components/UI/Card";
function App() {
  return (
    <div>
      <CarT />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
