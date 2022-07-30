export default ({ icon, title }) => {
  return (
    <div className="p-4 w-full bg-gray-100 rounded-md flex text-gray-500 hover:bg-red-500 hover:text-white transition duration-150 hover:cursor-pointer text-center text-sm uppercase flex flex-col justify-center items-center gap-3">
      {icon}
      {title}
    </div>
  );
};
