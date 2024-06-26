import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-2 xl:px-0 ">
      <div className="h-[50vh] sm:h-[70vh] ">
        <div className="mt-16 ">
          <div className="sm:w-[500px] mx-auto ">
            <h1 className="text-center font-semibold text-lg text-slate-700 ">
              Log in to your account
            </h1>
            <form
              className="flex flex-col w-full    items-center gap-4 mt-6 "
              action=""
            >
              <input
                className="outline-none border border-zinc-200 px-2 py-2 rounded-md text-slate-700 text-md w-full"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <div className="relative w-full ">
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer "
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer "
                  />
                )}
                <input
                  className="outline-none border border-zinc-200 px-2 py-2 rounded-md text-slate-700 text-md w-full "
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button className="bg-teal-500 w-full px-0 py-2 text-lg font-semibold rounded-md hover:bg-teal-600 active:bg-teal-700 transition ease-in duration-100 text-white ">
                Login
              </button>
            </form>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center ">
              <p className="text-sm sm:text-md   mt-2 sm:mt-4 text-red-500 text-right ">
                Forgot Password
              </p>
              <p className="text-sm  mt-2 sm:mt-4 text-slate-700 text-center ">
                Don't have an account?
                <span
                  className="text-blue-500 ml-2 cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Register
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
