export default ({ amount, increase, decrease }) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        onClick={decrease}
        className="w-6 h-6 flex items-center justify-center rounded border border-red-500 text-red-500 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>
      </div>
      <span>{amount}</span>
      <div
        onClick={increase}
        className="w-6 h-6 flex items-center justify-center rounded bg-red-500 text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};
