import { Blogs } from "../Hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blogs }) => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-1  lg:grid-cols-3 px-10 pt-52 w-screen">
        <div className="lg:col-span-2 px-8">
          <div className="py-5 ">
            <div className="text-5xl  font-extrabold py-3">{blog.title}</div>
            <div className="text-s font-medium text-slate-500">
              Posted{" "}
              {blog.createdAt === "Today" || blog.createdAt === "Yesterday"
                ? ""
                : "on"}{" "}
              {blog.createdAt}
            </div>
          </div>
          <div className=" text-lg font-medium">{blog.content}</div>
        </div>
        <div className="col-span-1 w-full">
          <div className="text-lg py-6">Author</div>
          <div className="flex justify-start ">
            <Avatar name={blog.author.name || "Anonymous"} size="huge" />
            <div className="px-4 text-3xl font-extrabold">
              {blog.author.name || "Anonymous"}
            </div>
          </div>
          <div className="pt-3 text-slate-500">
            Random catch phrase about the aurthor's abitlity to grab attention
            and increase the time on his blog page of his subscribers.
          </div>
        </div>
      </div>
    </div>
  );
};
