import SearchForm from "./SearchForm";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/ui.slice";

export default () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-10 py-6 drop-shadow-3xl bg-white">
      <div className="text-3xl font-bold">
        Main<span className="text-red-500 pl-0.5">Logo</span>
      </div>
      <SearchForm />
      <div className="flex gap-6">
        <button className="h-full bg-red-500 text-white px-3 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-slate-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <button
          onClick={() => dispatch(openModal())}
          className="border items-center gap-3 hover:bg-red-500 text-red-500 stroke-red-500 hover:stroke-white transition duration-150  hover:text-white flex flex-row bg-white border-red-500 px-4 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
          <span className="uppercase text-sm font-semibold">Add Product</span>
        </button>
      </div>
    </div>
  );
};
