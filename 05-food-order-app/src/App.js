import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHanfle = () => {
    setCartIsShow(true);
  };
  const hideCartHanfle = () => {
    setCartIsShow(false);
  };

  return (
    <div>
      {showCartHanfle && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
