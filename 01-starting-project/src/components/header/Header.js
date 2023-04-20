import styles from "./header.module.css";
import mealsimage from "../Assets/meals.jpg";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <div className={styles['your-cart']}>
          <button>Your Cart</button>
        </div>
      </div>
      <div className={styles['main-image']}>
        <img src={mealsimage} alt="A table full of delicious dishes"/>
      </div>
    </>
  );
};

export default Header;
