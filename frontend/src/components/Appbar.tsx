import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b sticky top-0  w-full  rounded-lg  shadow-md border-stale-300 bg-slate-400 flex  justify-between py-2 px-10">
      <div className="flex flex-col justify-center text-lg">Meduim</div>
      <div>
        <Link to="/publish">
          <button
            type="button"
            className=" mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New
          </button>
        </Link>
        <Link to="/Signin">
          <button
            type="button"
            className="ml-2 mr-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Log out
          </button>
          <Avatar name="Akash" size="big" />
        </Link>
      </div>
    </div>
  );
};
