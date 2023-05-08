import React from "react";
import { useState, useEffect } from "react";
const CartContext = React.createContext({
  cartExpanded: false,
  cartHandler: () => {},
  cartItemsAdder: (data) => {},
  cartButtonsHandler: (action) => {},
  cartItems: [{ name: "", description: "", price: "", id: "", amount: "" }],
  totalPrice: () => {},
});

const CartProvider = (props) => {
  const [cartExpanded, setCartExpanded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartExpandHandler = () => {
    setCartExpanded((previousState) => !previousState);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price whenever the cart items change
  useEffect(() => {
    let calculatedTotalPrice = 0;

    for (const item of cartItems) {
      calculatedTotalPrice += item.price * item.amount;
    }

    setTotalPrice(calculatedTotalPrice);
  }, [cartItems]);

  const cartButtonsHandler = (name, action) => {
    const updatedCartItems = [...cartItems];
    const existingCartItem = updatedCartItems.find(
      (item) => item.name === name
    );

    if (existingCartItem) {
      if (action === "add") {
        existingCartItem.amount += 1;
      } else if (action === "drop") {
        existingCartItem.amount -= 1;
        if (existingCartItem.amount === 0) {
          const existingCartItemIndex =
            updatedCartItems.indexOf(existingCartItem);
          updatedCartItems.splice(existingCartItemIndex, 1);
        }
      }
    }
    setCartItems(updatedCartItems);
  };
  const cartItemsAdder = (data) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === data.name
    );

    if (existingCartItemIndex !== -1) {
      // Item already exists in the cart, update the amount from the main list
      cartItems[existingCartItemIndex].amount = data.amount;

      setCartItems(cartItems);
    } else {
      // Item doesn't exist in the cart, add it from the main list
      setCartItems((previousCartItems) => [...previousCartItems, data]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartExpanded: cartExpanded,
        cartExpandHandler: cartExpandHandler,
        cartItems: cartItems,
        cartItemsAdder: cartItemsAdder,
        cartButtonsHandler: cartButtonsHandler,
        totalPrice: totalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export { CartContext };
export default CartProvider;
