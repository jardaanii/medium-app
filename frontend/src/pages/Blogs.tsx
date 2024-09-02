import { BlogCard } from "../components/BlogCard";

import { Appbar } from "../components/Appbar";
import { useBlogs } from "../Hooks";
import { Footer } from "../components/Footer";
import { Skeleton } from "../components/Skeleton";

export function Blogs() {
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <Skeleton />
      </div>
    );
  }

  return (
    <div className=" bg-slate-50">
      <Appbar />

      <div className="flex justify-center">
        <div className="max-w-xl lg:max-w-4xl">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
              aurthorName={blog.author.name || "Anonymous"}
              publishedDate={blog.createdAt}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
