import List from "./List";

export default ({openCart}) => {
  return (
    <div className="bg-white drop-shadow-md rounded-md w-full py-4 px-6 sticky top-0 z-[2]">
      <div className="flex justify-between items-center font-semibold pb-5">
        <h3>Choose Category</h3>
        <span className="text-gray-500">{openCart ? "Cart" : 'View All'}</span>
      </div>
      <List />
    </div>
  );
};
