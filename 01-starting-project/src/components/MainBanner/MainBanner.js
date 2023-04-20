import styles from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={styles["main-banner"]}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our abroad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-in-time and
        of course by professional chefs
      </p>
    </div>
  );
};

export default MainBanner;
