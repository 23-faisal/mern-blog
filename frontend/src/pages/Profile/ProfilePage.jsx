import React from "react";
import ProfilePost from "../../components/ProfilePost/ProfilePost";

const ProfilePage = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="mt-8 mb-8 mx-2 lg:mx-0 flex gap-0 sm:gap-16 flex-col-reverse sm:flex-row">
        <div className="flex flex-col w-full sm:w-[70%]   ">
          <h1 className="font-semibold text-slate-700 text-xl text-center sm:text-left">Your Posts</h1>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
        <div className="mb-8 w-full sm:w-[30%]  ">
          <h1 className="font-semibold text-slate-700 text-xl text-center mb-8 ">
            Profile
          </h1>
          <input
            className="outline-none mb-4  px-4 py-2 text-slate-500 border-2 border-slate-200 focus:border-slate-400 rounded-md transition ease-in-out duration-75"
            type="text"
            placeholder="Your username"
          />
          <input
            className="outline-none  px-4 py-2 text-slate-500 border-2 border-slate-200 focus:border-slate-400 rounded-md transition ease-in-out duration-75"
            type="email"
            placeholder="Your email"
          />
          <input
            className="outline-none my-4 px-4 py-2 text-slate-500 border-2 border-slate-200 focus:border-slate-400 rounded-md transition ease-in-out duration-75"
            type="password"
            placeholder="Your password"
          />
          <div className="flex items-center justify-center gap-6">
            <button className="bg-slate-800 px-4 py-2 rounded-md font-semibold text-white active:bg-slate-950 transition ease-in-out duration-75 cursor-pointer">
              Update
            </button>
            <button className="bg-slate-800 px-4 py-2 rounded-md font-semibold text-white active:bg-slate-950 transition ease-in-out duration-75 cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
