import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks/index";
import { FullBlog } from "../components/FullBlog";
import { Footer } from "../components/Footer";

import { Appbar } from "../components/Appbar";
import { BlogSpinner } from "../components/BlogSpinner";

export function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || " ",
  });

  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <BlogSpinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="flex-grow">
        <FullBlog blog={blog} />
      </div>
      <Footer />
    </div>
  );
}
