import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/product.slice";

export default ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  console.log(image);
  return (
    <div
      onClick={() => dispatch(addToCart(id))}
      className="drop-shadow-md hover:drop-shadow-xl transition duration-150 cursor-pointer text-gray-900 hover:text-red-500 bg-white overflow-hidden p-2 rounded-xl"
    >
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
          width={"100%"}
          height={"100%"}
          src={image || undefined}
          layout="fill"
        />
      </div>
      <div className="flex justify-between mt-5 px-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <span className="text-red-500 font-semibold">${price}</span>
      </div>
      <div className="flex justify-between pt-1 pb-2 px-2">
        <p className="text-sm font-medium text-gray-500">in Stock</p>
        <span className="text-yellow-400 font-semibold flex text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-gray-400">4.7</span>
        </span>
      </div>
    </div>
  );
};
