import React from "react";
import { useState } from "react";
const CartContext = React.createContext({
  cartExpanded: false,
  cartHandler: () => {},
});

const CartProvider = (props) => {
  const [cartExpanded, setCartExpanded] = useState(false);
  const cartHandler = (event) => {
    setCartExpanded(true);
  };
  
  return (
    <CartContext.Provider cartExpanded={cartExpanded} cartHandler={cartHandler}>
      {props.children}
    </CartContext.Provider>
  );
};
export {CartContext};
export default CartProvider;
