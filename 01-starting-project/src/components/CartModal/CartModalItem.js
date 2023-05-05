import styles from "./CartModalItem.module.css";
import Button from "../UI/Button";
const CartModalItem = () => {
  return (
    <div className={styles["cart-modal-item"]}>
      <p className={styles.name}>Schnitzel</p>
      <Button className={styles["cart-btn"]}>-</Button>
      <Button className={styles["cart-btn"]}>+</Button>
      <p className={styles.price}>$33</p>
      <p className={styles.amount}>x2</p>
    </div>
  );
};

export default CartModalItem;
