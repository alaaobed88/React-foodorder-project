import React from "react";
import { useState } from "react";
const CartContext = React.createContext({
  cartExpanded: false,
  cartHandler: () => {},
});

const CartProvider = (props) => {
  const [cartExpanded, setCartExpanded] = useState(true);
  const cartHandler = (event) => {
    setCartExpanded((previousState) => !previousState);
    console.log(cartExpanded);
  };

  return (
    <CartContext.Provider
      value={{ cartExpanded: cartExpanded, cartHandler: cartHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartProvider;
