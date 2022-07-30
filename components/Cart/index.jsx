import CartList from "./CartList";
import Checkout from "./Checkout";

export default ({ close, open }) => {
  return (
    <div
      className={`bg-white w-full rounded-md drop-shadow-3xl flex flex-col justify-between pb-3 gap-8 h-full max-h-full scroll-none overflow-y-auto ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col px-5">
        <div className="flex justify-between items-center py-7">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-semibold">My orders</h2>
            <span className="text-sm text-gray-500">Take out</span>
          </div>
          <svg
            onClick={close}
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
        <CartList />
      </div>
      <Checkout />
    </div>
  );
};
