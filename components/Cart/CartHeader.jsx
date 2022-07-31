import { clearCart } from "../../redux/slices/product.slice";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center py-7">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-semibold">My orders</h2>
        <span className="text-sm text-gray-500">Take out</span>
      </div>
      <svg
        onClick={() => dispatch(clearCart())}
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-gray-400 hover:text-gray-600 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
