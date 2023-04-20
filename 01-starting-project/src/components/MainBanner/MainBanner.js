import styles from "./MainBanner.module.css";
import Card from "../UI/Card";
const MainBanner = () => {
  return (
    <Card>
      <div className={styles["main-banner"]}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our abroad selection of available meals and enjoy a delicious lunch or dinner at home.<br/>all our meals are cooked with high quality ingredients, just-in-time and of course by professianol chefs</p>
      </div>
    </Card>
  );
};

export default MainBanner;
