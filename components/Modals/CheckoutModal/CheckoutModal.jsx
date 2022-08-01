import { useSelector } from "react-redux";

export default () => {
  const { price, totalPrice, taxPrice } = useSelector(
    (state) => state.products
  );
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 stroke-green-400 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Order completed successfully
              </h3>
              <p className="flex justify-between pb-3 border-dashed border-t-2 pt-2">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </p>
              <p className="flex justify-between pb-3 border-dashed border-t-2 pt-2">
                <span>Subtotal:</span>
                <span>${price.toFixed(2)}</span>
              </p>
              <p className="flex justify-between pb-3 border-dashed border-t-2 pt-2">
                <span>Tax(10%):</span>
                <span>${taxPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-[40] bg-black"></div>
    </>
  );
};
