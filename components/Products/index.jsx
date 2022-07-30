import Categories from "./Categories";
import ProductsList from "./ProductsList";

export default ({wide}) => {
  return (
    <div className={`col-start-2 ${wide ? 'col-end-5' : 'col-end-4'} h-full max-h-full px-2 overflow-y-scroll overflow-x-visible scroll-none relative`}>
      <Categories openCart={wide}/>
      <ProductsList/>
    </div>
  );
};
