import Header from "./components/Header/header";
import MainBanner from "./components/MainBanner/MainBanner";
import MealsList from "./components/Meals/MealsList";
import { useContext } from "react";
import { CartContext } from "./storage/CartContext";
import CartModal from "./components/CartModal/CartModal";
function App() {
  const ctx=useContext(CartContext)
  return (
    <>
      {ctx.cartExpanded && <CartModal />}
      <Header></Header>
      <MainBanner></MainBanner>
      <MealsList></MealsList>
    </>
  );
}

export default App;
