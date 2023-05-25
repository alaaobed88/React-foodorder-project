import styles from "./CartModal.module.css";
import BackDrop from "../UI/BackDrop";
import ReactDOM from "react-dom";
import CartModalItem from "./CartModalItem";
import Button from "../UI/Button";
import ConfirmationForm from "./ConfirmationForm";
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
                {ctx.cartItems.length > 0 && (
                  <Button
                    className={styles["checkout-btn"]}
                    onClick={ctx.checkoutHandler}
                  >
                    CheckOut
                  </Button>
                )}
              </div>
              <div>
                {ctx.isCheckout && ctx.cartItems.length > 0 && (
                  <ConfirmationForm />
                )}
              </div>
              {ctx.completionMessage && (
                <div className="success-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4CAF50"
                      d="M24 2C11.8 2 2 11.8 2 24s9.8 22 22 22s22-9.8 22-22S36.2 2 24 2zm12.7 17.9L22 35.6l-9.7-9.7l2.8-2.8l6.9 6.9L34.2 17l2.8 2.9z"
                    />
                  </svg>
                  <h2>Thank you for your order!</h2>
                  <p>Your order has been successfully placed.</p>
                </div>
              )}
            </div>
          </div>
        </>,
        document.getElementById("cart-modal")
      )}
    </>
  );
};
export default CartModal;
