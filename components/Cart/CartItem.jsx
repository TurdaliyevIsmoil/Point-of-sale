import Image from "next/image";
import Counter from "./Counter";
export default () => {
  return (
    <div className="flex flex-row w-full bg-blue-50 rounded-md items-stretch gap-4 justify-start">
      <div className="relative w-36 w-full rounded-md overflow-hidden aspect-square">
        <Image
          src={"https://picsum.photos/seed/picsum/200/300"}
          layout="fill"
        />
      </div>
      <div className="flex w-full flex-col py-3 pr-3 justify-between">
        <h2 className="text-xl font-semibold text-gray-600">Lobster</h2>
        <div className="flex w-full justify-between items-center">
          <span className="text-red-500">$1.99</span>
          <Counter />
        </div>
      </div>
    </div>
  );
};
