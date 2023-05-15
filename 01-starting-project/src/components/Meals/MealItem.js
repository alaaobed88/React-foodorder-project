import styles from "./MealItem.module.css";
import React from "react";

import Button from "../UI/Button";
import { useContext, useRef } from "react";
import { CartContext } from "../../storage/CartContext";
const MealItem = (props) => {
  const amountRef = useRef();
  const ctx = useContext(CartContext);
  const addHandler = () => {
    const value = parseInt(amountRef.current.value, 10);

    ctx.cartItemsAdder({
      name: props.name,
      description: props.description,
      price: props.price,
      id: Math.random(),
      amount: value,
    });

    amountRef.current.value = "";
  };

  return (
    <li className={styles["meal-item"]}>
      <div className={styles.info}>
        <p className={styles.name}>{props.name}</p>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}>
          <br />${props.price}
        </span>
      </div>
      <div className={styles["add-amount"]}>
        <p>Amount</p>
        <input type="number" step="1" min="0" max="30" ref={amountRef}></input>
        <Button type="button" onClick={addHandler}>
          + Add
        </Button>
      </div>
    </li>
  );
};

export default MealItem;
