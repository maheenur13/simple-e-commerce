import { FC } from "react";
import Products from "../common/Products";
import CartPage from "../Cart";

const HomePage: FC = () => {
  return (
    <div>
      <Products />
      <CartPage />
    </div>
  );
};

export default HomePage;
