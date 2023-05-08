import React from "react";
import { useState } from "react";
const CartContext = React.createContext({
  cartExpanded: false,
  cartHandler: () => {},
  cartItemsAdder: (data) => {},
  cartItems: [{ name: "", description: "", price: "" ,id:Math.random(1)}],
});

const CartProvider = (props) => {
  const [cartExpanded, setCartExpanded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartHandler = () => {
    setCartExpanded((previousState) => !previousState);
  };
  const cartItemsAdder = (data) => {
    setCartItems((previousCartItems) => {
      return [...previousCartItems, data];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartExpanded: cartExpanded,
        cartHandler: cartHandler,
        cartItems: cartItems,
        cartItemsAdder: cartItemsAdder,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartProvider;
