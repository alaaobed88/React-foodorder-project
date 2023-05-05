import Header from "./components/Header/header";
import MainBanner from "./components/MainBanner/MainBanner";
import MealsList from "./components/Meals/MealsList";

import CartModal from "./components/CartModal/CartModal";
function App() {
  
  return (
    <>
       <CartModal />
      <Header></Header>
      <MainBanner></MainBanner>
      <MealsList></MealsList>
    </>
  );
}

export default App;
