import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHolder = (item) => {};
  const removeItemToCartHolder = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHolder,
    removeItem: removeItemToCartHolder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
