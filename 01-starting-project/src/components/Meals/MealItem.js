import styles from "./MealItem.module.css";
import { useState } from "react";
const MealItem = (props) => {
  const [amount, setAmount] = useState(0);
  const addHandler = (event) => {
    setAmount((previousAmount) => {
      return ++previousAmount;
    });
  };
  return (
    <li className={styles["meal-item"]}>
      <div className={styles.info}>
        <p className={styles.name}>{props.name}</p>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}><br/>${props.price}</span>
      </div>
      <div className={styles["add-amount"]}>
        <p>Amount {amount}</p>
        <button type="button"onClick={addHandler}>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
