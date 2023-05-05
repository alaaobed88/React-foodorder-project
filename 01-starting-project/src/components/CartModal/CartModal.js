import styles from "./CartModal.module.css";
import BackDrop from "../UI/BackDrop";
import CartModalItem from "./CartModalItem";
import Button from "../UI/Button";
const CartModal = () => {
  return (
    <>
      <BackDrop />
      <div className={styles["cart-modal-flex"]}>
        <div className={styles["cart-modal"]}>
          <CartModalItem></CartModalItem>
          <CartModalItem></CartModalItem>
          <CartModalItem></CartModalItem>
          <div className={styles.amount}>
            <p>Total Amount</p>
            <p>$666</p>
          </div>
          <div className={styles.checkout}>
            <Button className={styles['cancel-btn']}>Cancel</Button>
            <Button className={styles['checkout-btn']}>CheckOut</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartModal;
