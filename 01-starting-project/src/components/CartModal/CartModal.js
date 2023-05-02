import styles from "./CartModal.module.css";
import BackDrop from "../UI/BackDrop";
import Button from "../UI/Button";
const CartModal = () => {
  return (
    <>
      <BackDrop></BackDrop>
      <div className={styles["cart-modal-flex"]}>
        <div className={styles['cart-modal-item']}>
          <p className={styles.name}>name</p>
          <Button className={styles['cart-btn']}>-</Button>
          <Button className={styles['cart-btn']}>+</Button>
          <p className={styles.price}>$price</p>
          <p className={styles.amount}>x2</p>
        </div>
      </div>
    </>
  );
};
export default CartModal;
