import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { format, isToday, isYesterday } from "date-fns";

export interface Blogs {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };

  createdAt: string;
}

const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blogs | null>(null);

  useEffect(() => {
    async function fecth() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data.data;
        let blogData = data;
        let createdAtDate = new Date(blogData.createdAt);
        let formattedDate = format(createdAtDate, "d MMM yyyy");
        const day = createdAtDate.getDate();
        formattedDate = `${day}${getOrdinalSuffix(day)} ${format(
          createdAtDate,
          "MMM yyyy"
        )}`;

        if (isToday(createdAtDate)) {
          formattedDate = "Today";
        } else if (isYesterday(createdAtDate)) {
          formattedDate = "Yesterday";
        }

        blogData = {
          ...blogData,
          createdAt: formattedDate,
        };

        setBlog(blogData);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching the blogs");
        alert("Cant fetch the Blogs");
      }
    }
    fecth();
  }, []);

  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    async function fecth() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data.data.map((blogData: Blogs) => {
          let createdAtDate = new Date(blogData.createdAt);
          let formattedDate = format(createdAtDate, "d MMM yyyy");
          const day = createdAtDate.getDate();
          formattedDate = `${day}${getOrdinalSuffix(day)} ${format(
            createdAtDate,
            "MMM yyyy"
          )}`;

          if (isToday(createdAtDate)) {
            formattedDate = "Today";
          } else if (isYesterday(createdAtDate)) {
            formattedDate = "Yesterday";
          }

          return {
            ...blogData,
            createdAt: formattedDate,
          };
        });

        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching the blogs");
        alert("Cant fetch the Blogs");
      }
    }
    fecth();
  }, []);

  return {
    loading,
    blogs,
  };
};
