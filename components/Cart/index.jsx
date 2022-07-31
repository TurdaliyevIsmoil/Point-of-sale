import CartHeader from "./CartHeader";
import CartList from "./CartList";
import Checkout from "./Checkout";
import CheckoutModal from "../layouts/Modals/CheckoutModal/CheckoutModal";

export default () => {
  return (
    <div
      className={`bg-white w-full rounded-md drop-shadow-3xl flex flex-col justify-between pb-3 gap-8 h-full max-h-full scroll-none overflow-y-auto`}
    >
      <div className="flex flex-col px-5">
        <CartHeader />
        <CartList />
      </div>
      <Checkout />
    </div>
  );
};
