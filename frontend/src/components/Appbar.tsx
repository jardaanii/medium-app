import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b sticky top-0  w-full  rounded-lg  shadow-md border-stale-300 bg-slate-400 flex  justify-between py-2 px-10">
      <Link to="/Blogs">
        <div className="flex flex-col mt-2 justify-center font-bold text-xl">
          Medium
        </div>
      </Link>
      <div>
        <Link to="/publish">
          <button
            type="button"
            className=" mr-8 text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New
          </button>
        </Link>
        <Link to="/Signin">
          <Avatar name="Akash" size="big" />
        </Link>
      </div>
    </div>
  );
};
