import styles from "./Header.module.css";
import CartIcon from "../UI/CartIcon";
import mealsimage from "../Assets/meals.jpg";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
const Header = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <div onClick={ctx.cartExpandHandler} className={styles["your-cart"]}>
          <CartIcon className={styles.carticon} />
          <p>Your Cart</p>
          <h4>${ctx.totalPrice.toFixed(2)}</h4>
        </div>
      </div>
      <div className={styles["main-image"]}>
        <img src={mealsimage} alt="A table full of delicious dishes" />
      </div>
    </>
  );
};

export default Header;
