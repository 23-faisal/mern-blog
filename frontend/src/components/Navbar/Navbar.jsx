import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const user = false;
  return (
    <div className=" w-full shadow-sm">
      <nav className=" max-w-6xl mx-auto  flex items-center justify-between px-2 xl:px-0 py-4  ">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="cursor-pointer text-xl md:text-3xl font-bold md:font-extrabold text-teal-500 "
          >
            BlogX<span className="text-orange-500 ">.</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 justify-center md:gap-4">
          <input
            type="text"
            placeholder="Search a post"
            className="w-1/2 md:w-full   px-2 py-1 rounded-md outline-none border border-zinc-200	 focus:border-slate-700 text-slate-700"
          />
          <BsSearch className="h-6 w-6 cursor-pointer text-slate-500 hover:text-slate-700 transition ease-in duration-75" />
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {user ? (
            <button>
              <Link
                to="/write"
                className="text-lg font-semibold text-slate-700 "
              >
                Write
              </Link>
            </button>
          ) : (
            <button>
              <Link
                className="text-lg font-semibold text-slate-700 "
                to="/login"
              >
                Login
              </Link>
            </button>
          )}
          <span>|</span>
          {user ? (
            <button>
              <Link
                to="/profile"
                className="  text-lg font-semibold text-slate-700 "
              >
                Write
              </Link>
            </button>
          ) : (
            <button>
              <Link
                className="text-lg font-semibold text-slate-700 "
                to="/register"
              >
                Register
              </Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
