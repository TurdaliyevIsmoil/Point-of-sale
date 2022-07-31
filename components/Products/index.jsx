import Categories from "./Categories";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import Loading from "../layouts/Loading";

export default () => {
  const { loading } = useSelector((state) => state.ui);
  return (
    <div
      className={`col-start-2 col-end-4 h-full max-h-full px-2 overflow-y-scroll overflow-x-visible scroll-none relative`}
    >
      <Categories />
      {loading ? <Loading /> : <ProductsList />}
    </div>
  );
};
