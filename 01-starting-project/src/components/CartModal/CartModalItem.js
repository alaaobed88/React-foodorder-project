import styles from "./CartModalItem.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
const CartModalItem = (props) => {
  const ctx = useContext(CartContext);
  const addHandler = () => {
    ctx.cartButtonsHandler(props.name, "add");
  };
  const dropHandler = () => {
    ctx.cartButtonsHandler(
      props.name,
      "drop"
    );
  };

  return (
    <li className={styles["cart-modal-item"]}>
      <p className={styles.name}>{props.name}</p>
      <Button className={styles["cart-btn"]} onClick={dropHandler}>
        -
      </Button>
      <Button className={styles["cart-btn"]} onClick={addHandler}>
        +
      </Button>
      <p className={styles.price}>$ {props.price}</p>
      <p className={styles.amount}>x {props.amount}</p>
    </li>
  );
};

export default CartModalItem;
