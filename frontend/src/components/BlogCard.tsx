import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  aurthorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  aurthorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className=" p-4 border-b border-slate-100 pb-2">
        <div className="flex">
          <Avatar name={aurthorName} />
          <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
            {aurthorName}
          </div>{" "}
          .
          <div className="flex justify-center flex-col pl-2 font-thin text-slate-400 text-sm">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin pt-1">
          {content.length > 200 ? content.slice(0, 200) + "...." : content}
        </div>
        <div className="text-slate-500 font-thin  text-sm pt-3">{`${Math.ceil(
          content.length / 200
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big" | "huge";
}) {
  return (
    <div
      className={`inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : size === "big" ? "w-8 h-8" : "w-11 h-11"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : size === "big" ? "text-md" : "text-lg"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
