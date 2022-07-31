import { useSelector, useDispatch } from "react-redux";
import { sendOrder } from "./../../redux/actions/ui.action";
export default () => {
  const dispatch = useDispatch();

  const { totalPrice, price, taxPrice } = useSelector(
    (state) => state.products
  );

  //   Checkout
  const checkoutHandler = () => (price !== 0 ? dispatch(sendOrder()) : null);

  return (
    <div className="px-3 flex flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-gray-400">Subtotal</p>
        <p className="text-gray-400">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-400">Tax (10%)</p>
        <p className="text-gray-400">${taxPrice.toFixed(2)}</p>
      </div>
      <div className="border-dashed border-t-2"></div>
      <div className="flex justify-between">
        <p className="text-gray-400">Total</p>
        <p className="text-gray-400">${totalPrice.toFixed(2)}</p>
      </div>
      <button
        onClick={checkoutHandler}
        className="py-3 px-auto w-full transition duration-150 disabled:bg-gray-400 rounded-md bg-red-500 text-white hover:text-red-500 hover:bg-gray-100"
        disabled={price === 0}
      >
        Checkout
      </button>
    </div>
  );
};
