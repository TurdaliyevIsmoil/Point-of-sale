import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 pb-2">
      {products &&
        products.length !== 0 &&
        products.map((i, j) => <ProductItem key={j} {...i} />)}
    </div>
  );
};
