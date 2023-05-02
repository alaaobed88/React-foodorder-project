import Header from "./components/Header/header";
import MainBanner from "./components/MainBanner/MainBanner";
import MealsList from "./components/Meals/MealsList";
import BackDrop from "./components/UI/BackDrop";
function App() {
  return (
    <>
      <Header></Header>
      <MainBanner></MainBanner>
      <MealsList></MealsList>
    </>
  );
}

export default App;
