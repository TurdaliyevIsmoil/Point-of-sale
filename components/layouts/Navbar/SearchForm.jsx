export default () => {
  return (
    <div className="flex">
      <label class="relative block">
        <span class="sr-only">Search Category or Menu</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            className="h-5 w-5 stroke-slate-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none w-72 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-gray-100"
          placeholder="Search Category or Menu"
          type="text"
          name="search"
        />
      </label>
      <button type="button" class="rounded-md text-white px-8 text-sm bg-red-500 ml-2">
        Search
      </button>
    </div>
  );
};
