import React from "react";

const Comment = () => {
  return (
    <div className="mt-4 bg-slate-200 px-2 sm:px-4 py-1 sm:py-2 rounded-md">
      <div className="flex items-center justify-between  ">
        <div>
          <p className="text-slate-800 text-sm font-semibold ">@faisal</p>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <p className="text-slate-800 text-sm font-semibold ">12/4/25</p>
            <p className="text-slate-800 text-sm font-semibold ">8:10PM</p>
          </div>
          <div className="flex items-center gap-2 justify-end ">
            <FaEdit className="h-4 w-4 text-teal-500 cursor-pointer hover:text-teal-600 transition ease-in-out duration-75" />
            <FaTrash className="h-4 w-4 text-red-500 cursor-pointer hover:text-red-600 transition ease-in-out duration-75" />
          </div>
        </div>
        {/*  */}
      </div>
      <div className="mt-4">
        <p className="text-md ">Nice Information</p>
      </div>
    </div>
  );
};

export default Comment;
