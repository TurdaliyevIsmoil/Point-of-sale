import Image from "next/image";
export default () => {
  return (
    <div className="flex bg-blue-50 p-6 gap-4 items-center">
      <div className="rounded-full overflow-hidden w-14 h-14 relative">
        <Image className="" src="https://picsum.photos/200" layout="fill" />
      </div>
      <div className="flex flex-col gap-0.5 pl-4">
        <span className="font-semibold text-xl text-red-500">Johny Deep</span>
        <span className="text-sm text-gray-500">Balance: 500$</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-500 cursor-pointer ml-auto mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  );
};
