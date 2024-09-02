import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const body = {
      title,
      content,
    };
    const token = localStorage.getItem("token");
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate(`/blog/${response.data.data}`);
  };

  return (
    <div>
      <Appbar />
      <div className="flex  justify-center w-full pt-10">
        <div className="max-w-screen-lg w-full mx-10">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="bg-gray-50 h-20 border border-gray-300 text-3xl font-bold text-gray-900  rounded-lg  block w-full p-2.5 "
            placeholder="Title"
          />

          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg   dark:focus:ring-green-900 hover:bg-green-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <div className="w-full mb-4 mt-8 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="flex items-center justify-between px-3 py-2 border-b ">
          <textarea
            id="editor"
            rows={9}
            onChange={onChange}
            className="block focus:outline-none w-full h-screen px-0 text-md text-gray-800 bg-white border-0 pl-2 focus:ring-0 "
            placeholder="Write an blog..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
