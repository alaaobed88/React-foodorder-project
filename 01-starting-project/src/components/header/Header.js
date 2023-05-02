import styles from "./Header.module.css";

import mealsimage from "../Assets/meals.jpg";
import { useContext } from "react";
import { CartContext } from "../../storage/CartContext";
const Header = () => {
  const ctx = useContext(CartContext);

  return (
    <>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <div onClick={ctx.cartHandler} className={styles["your-cart"]}>
          <p>img</p>
          <p>Your Cart</p>
          <p>amount</p>
        </div>
      </div>
      <div className={styles["main-image"]}>
        <img src={mealsimage} alt="A table full of delicious dishes" />
      </div>
    </>
  );
};

export default Header;
