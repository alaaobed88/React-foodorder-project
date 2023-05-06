import styles from "./MealItem.module.css";
import { useState } from "react";
import Button from "../UI/Button";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
const MealItem = (props) => {
  const [amount, setAmount] = useState(0);
  const ctx = useContext(CartContext);
  const addHandler = (event) => {
    setAmount((previousAmount) => ++previousAmount);
    ctx.cartItemsAdder({
      name: props.name,
      description: props.description,
      price: props.price,
    });
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
        <p>Amount {amount}</p>
        <Button type="button" onClick={addHandler}>
          + Add
        </Button>
      </div>
    </li>
  );
};

export default MealItem;
