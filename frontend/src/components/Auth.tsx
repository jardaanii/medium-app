import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@trozon/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const data = postInputs;
      console.log(data);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        data
      );
      const jwtToken = response.data.token;
      console.log(response.data);
      localStorage.setItem("token", jwtToken);
      navigate("/blogs");
    } catch (error) {
      alert("Error in executing the request");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center mx-2">
        <div className="">
          <div className="px-12">
            <div className="text-4xl font-extrabold ">
              {type === "signin"
                ? "Login to your account"
                : "Create an account"}
            </div>

            <div className="text-slate-400 flex justify-center text-md">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Login"}
              </Link>
            </div>
          </div>
          <div className=" pt-3 ">
            {type === "signin" ? null : (
              <LabelledInput
                lable="Name"
                placeholder="Enter your name "
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            )}
            <LabelledInput
              lable="Email"
              placeholder="Enter your email "
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabelledInput
              type="password"
              lable="Password"
              placeholder="Enter your password "
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              type="button"
              onClick={sendRequest}
              className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-6 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signin" ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputTypes {
  lable: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  lable,
  type,
  placeholder,
  onChange,
}: LabelledInputTypes) {
  return (
    <div className="pt-2">
      <label className="block mb-2 text-lg font-md text-black">{lable}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
