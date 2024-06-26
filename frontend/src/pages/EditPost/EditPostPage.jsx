import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const EditPostPage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = (e) => {
    e.preventDefault();
    let updateCategory = [...categories];
    updateCategory.push(category);
    setCategory("");
    setCategories(updateCategory);
  };

  const deleteCategory = (i) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(i, 1);
    setCategories(updatedCategories);
  };
  return (
    <div className="max-w-6xl mx-auto my-8 px-2 xl:px-0">
      <div>
        <h1 className="font-bold text-center text-2xl mb-8 text-slate-700 ">
          Edit Post
        </h1>
        <form action="">
          <label className="text-xl font-bold text-slate-700 " htmlFor="">
            Title
          </label>
          <input
            className="w-full outline-none mt-2 mb-6 px-2 py-2 border border-slate-200 rounded-md focus:border-slate-400 "
            type="text"
            placeholder="Enter your title"
          />
          <div className="flex flex-col ">
            <label className="text-xl font-bold text-slate-700 " htmlFor="">
              Image
            </label>
            <input
              className="py-2 mt-2 mb-6 outline-none border border-slate-200 px-2 rounded-md "
              type="file"
              placeholder=""
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-xl font-bold text-slate-700 " htmlFor="">
              Category
            </label>
            <div className="flex items-center justify-start mt-2 mb-6 gap-4">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="py-2  outline-none border border-slate-200 px-2 rounded-md w-[80%] sm:w-auto focus:border-slate-400"
                type="text"
                placeholder=""
              />
              <button
                onClick={addCategory}
                className="bg-black py-2  px-4 w-[20%] sm:w-auto rounded-md font-semibold text-md text-white "
              >
                Add
              </button>
            </div>

            {/* category */}
            <div className=" flex gap-4">
              <div className="  grid grid-cols-2 justify-left gap-2 ">
                {categories?.map((category, i) => {
                  return (
                    <div
                      className="flex items-center justify-between gap-2 bg-slate-200 px-2 py-2 rounded-md "
                      key={i}
                    >
                      <span className="font-semibold text-black">
                        {category}
                      </span>
                      <ImCross
                        onClick={() => deleteCategory(i)}
                        className="h-4 w-4 text-red-500 cursor-pointer  active:text-red-700 transition ease-in-out duration-75"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Description */}

            <div className="mt-4  flex flex-col ">
              <label className="text-xl font-bold text-slate-700 " htmlFor="">
                Description
              </label>
              <textarea
                className="w-full outline-none mt-2 mb-6 px-2 py-2 border border-slate-200 focus:border-slate-400 rounded-md "
                rows={15}
                name="description"
                id="description"
              ></textarea>
            </div>

            {/*  */}

            {/* Submit */}

            <button className="font-semibold px-0 py-3 rounded-md  text-white bg-slate-800 hover:bg-slate-900 active:bg-slate-950 ">
              Update Post
            </button>

            {/*  */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostPage;
