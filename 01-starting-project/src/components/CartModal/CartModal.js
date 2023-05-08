import styles from "./CartModal.module.css";
import BackDrop from "../UI/BackDrop";
import ReactDOM from "react-dom";
import CartModalItem from "./CartModalItem";
import Button from "../UI/Button";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
const CartModal = () => {
  const ctx = useContext(CartContext);
  if (!ctx.cartExpanded) return;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackDrop />
          <div className={styles["cart-modal-flex"]}>
            <div className={styles["cart-modal"]}>
              <ul>
                {ctx.cartItems.map((item) => {
                  return (
                    <CartModalItem
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      key={item.id}
                      amount={item.amount}
                    />
                  );
                })}
              </ul>
              <div className={styles.amount}>
                <p>Total Amount</p>
                <p>${ctx.totalPrice.toFixed(2)}</p>
              </div>
              <div className={styles.checkout}>
                <Button
                  className={styles["cancel-btn"]}
                  onClick={ctx.cartExpandHandler}
                >
                  Cancel
                </Button>
                <Button className={styles["checkout-btn"]}>CheckOut</Button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("cart-modal")
      )}
    </>
  );
};
export default CartModal;
