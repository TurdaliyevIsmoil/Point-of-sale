import Image from "next/image";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { addToCart, removeCartItem } from "../../redux/slices/product.slice";
export default ({ id, image, name, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row w-full bg-blue-50 rounded-md items-stretch gap-4 justify-start">
      <div className="relative w-36 w-full rounded-md overflow-hidden aspect-square">
        <Image
          src={image || undefined}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col py-3 pr-3 justify-between">
        <h2 className="text-xl font-semibold text-gray-600">{name}</h2>
        <div className="flex w-full justify-between items-center">
          <span className="text-red-500">${price}</span>
          <Counter
            increase={() => dispatch(addToCart(id))}
            decrease={() => dispatch(removeCartItem(id))}
            amount={amount}
          />
        </div>
      </div>
    </div>
  );
};
