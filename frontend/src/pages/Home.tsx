import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full top-0 bg-orange-50 border-b border-black shadow-md py-2">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
          <div className="font-bold text-xl">Medium</div>
          <div className="flex  space-x-4 ">
            <a href="#" className="hover:text-gray-600 mt-2">
              Our story
            </a>
            <a href="#" className="hover:text-gray-600 mt-2">
              Membership
            </a>
            <a href="#" className="hover:text-gray-600 mt-2">
              Write
            </a>
            <a href="/Signin" className="hover:text-gray-600 mt-2">
              Sign in
            </a>
            <Link to="/Signup">
              <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-grow justify-center items-center w-full bg-orange-50 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className=" lg:col-span-2 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-start">
              <h1 className="text-9xl font-bold mb-4">Human </h1>
              <h1 className="text-9xl font-bold mb-4">stories & ideas</h1>
              <p className="text-xl text-gray-600 mb-8">
                A place to read, write, and deepen your understanding
              </p>
            </div>

            <Link to="/Signin">
              <button className="bg-black text-xl text-white px-6 py-3 rounded-md hover:bg-gray-800">
                Start reading
              </button>
            </Link>
          </div>
          <div className=" flex justify-center">
            <img
              alt="Brand Image"
              src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
              className="w-full max-w-md"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="w-full border-t border-black bg-orange-50 py-4">
        <ul className="flex justify-center space-x-8 text-gray-900">
          <li>
            <a href="#" className="hover:text-gray-400">
              Discord Server
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
