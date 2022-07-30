import List from "./List";
import Profile from "./Profile";

export default () => {
  return (
    <div className="basics-1/4 h-full bg-white drop-shadow-3xl rounded-md flex flex-col justify-between overflow-hidden">
      <List />
      <Profile />
    </div>
  );
};
