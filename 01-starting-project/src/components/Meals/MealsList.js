import MealItem from "./MealItem";
import styles from "./MealsList.module.css";
const MealsList = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  return (
    <ul className={styles['meals-list']}>
      {DUMMY_MEALS.map((item) => {
        return (
          <MealItem
            name={item.name}
            price={item.price}
            description={item.description}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default MealsList;
