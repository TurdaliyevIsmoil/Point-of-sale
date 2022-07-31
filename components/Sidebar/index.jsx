import List from "./List";
import Profile from "./Profile";

export default () => {
  return (
    <div className="basics-1/4 h-full bg-white drop-shadow-3xl scroll-none rounded-md flex flex-col justify-between overflow-hidden overflow-y-auto">
      <List />
      <Profile />
    </div>
  );
};
