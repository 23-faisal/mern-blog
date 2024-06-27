import React from "react";

const ProfilePost = () => {
  return (
    <div className="max-w-6xl mx-auto my-4 border rounded-lg p-2 shadow-sm shadow-zinc-400">
      <div className="flex flex-col sm:flex-row   sm:justify-between sm:gap-12 sm:items-center">
        {/* left */}
        <div className="w-full  sm:w-[30%]  h-[200px] ">
          <img
            className="rounded-lg  shadow-lg shadow-slate-500 "
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI image"
          />
        </div>

        {/* right */}
        <div className="w-full mt-4 sm:mt-0  sm:w-[70%] ">
          <div>
            <h1 className="font-semibold text-lg ">
              10 uses of artificial intelligence in day to day life{" "}
            </h1>
          </div>
          <div className="flex items-center justify-between my-1">
            <p className="text-sm text-slate-400 font-semibold ">@faisal23</p>
            <p className="text-sm text-slate-400 font-semibold ">16/06/2023</p>
          </div>
          <div>
            <p className="text-slate-800 text-sm ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              veniam deleniti, quidem beatae sapiente, maxime repudiandae neque
              hic enim dolore architecto. Est, itaque vel! Et cum sed autem ea
              doloremque. Ratione cum quod voluptates sint fuga. Dolor rem
              dolore, amet cupiditate velit porro omnis totam laborum dicta
              aspernatur facere voluptate molestias officia adipisci repudiandae
              error blanditiis ratione, autem numquam ipsa.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default ProfilePost;
