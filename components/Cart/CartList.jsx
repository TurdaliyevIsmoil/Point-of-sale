import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default () => {
  const { cart } = useSelector((state) => state.products);
  return (
    <div className="flex flex-col gap-6 justify-start items-start">
      {cart.map((i, j) => (
        <CartItem {...i} key={j} />
      ))}
    </div>
  );
};
