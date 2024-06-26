import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const PostDetailsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0">
      <div className="my-4 sm:my-8 w-full ">
        <div className="flex items-center justify-between gap-4 sm:gap-0 w-full ">
          {/*  */}
          <div className="my-4">
            <h1 className="font-semibold text-slate-700 text-lg sm:text-2xl ">
              10 uses of artificial intelligence in day to day life
            </h1>
          </div>
          <div className="flex items-center gap-2 justify-end ">
            <FaEdit className="h-5 w-5 text-teal-500 cursor-pointer hover:text-teal-600 transition ease-in-out duration-75" />
            <FaTrash className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-600 transition ease-in-out duration-75" />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-between text-slate-500 text-sm mb-4">
          <div>
            <p>
              @<span>faisal</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <p>12/4/25</p>
            <p>8:10PM</p>
          </div>
        </div>

        {/*  */}
        <div className="mb-4 sm:mb-8">
          <img
            className="w-full  rounded-md  object-fill h-48 sm:h-auto "
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="image"
          />
        </div>
        {/*  */}

        <div className="pb-4 border-b-2 border-slate-500">
          <p className="text-slate-700 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium nesciunt dolor laudantium neque obcaecati animi soluta
            consequatur autem rerum eveniet quaerat, veritatis accusamus sunt
            nemo voluptates sint minus. Fugiat, molestiae. Excepturi nostrum
            deleniti rerum quam fugit quia temporibus quis maxime earum. Non
            architecto a optio sint vitae, nisi officiis accusamus quibusdam
            rerum atque magnam tempora est sit maiores, cupiditate quo! Ducimus
            exercitationem consequatur dolor assumenda similique architecto
            harum perspiciatis tenetur nesciunt enim repudiandae officiis ex
            minus corrupti, optio sit quasi eveniet rem, dicta saepe error et.
            Atque labore debitis inventore. Nobis sapiente reiciendis enim
            quisquam molestias. Voluptatum perferendis sed debitis commodi
            dignissimos voluptas, vel maxime repellendus. Rerum amet dolorum id
            at similique, nesciunt iste ad eum dolore eius excepturi nulla. Sint
            assumenda corrupti vitae eligendi quidem corporis facilis nihil
            provident iusto. Accusantium ipsa dolores blanditiis! Aperiam
            voluptatibus, atque labore et doloribus illo ducimus officia, quidem
            nesciunt asperiores iste vero necessitatibus! Cumque aliquam iure
            impedit temporibus autem. Aliquam adipisci earum quaerat praesentium
            labore sequi quam nobis perspiciatis ducimus cupiditate! Consequatur
            illo iste, debitis nulla dolores quaerat atque dolorem repudiandae
            eaque provident! Consequatur ex temporibus quidem amet similique
            laboriosam eveniet veritatis quia molestiae tempore nulla iusto,
            cupiditate voluptatem incidunt ea eos quibusdam reiciendis
            blanditiis deleniti non a? Itaque repellat quas est repellendus!
            Temporibus ea culpa dolor exercitationem illo quidem officia ut non
            beatae praesentium. Tempore asperiores laudantium suscipit enim
            voluptatum nobis distinctio consequuntur maiores, facilis
            voluptatibus rem itaque assumenda eaque molestias! Iste? Nostrum eos
            quae provident tempora omnis odit harum nihil esse inventore impedit
            sed veniam doloremque placeat quaerat modi veritatis dolor,
            obcaecati minus. Quis animi reiciendis eveniet non ex, repellendus
            magni! Repellendus error quaerat vero, earum itaque iste pariatur
            est impedit doloribus veniam minima ratione dicta accusamus minus ab
            dignissimos suscipit fugit quis ullam asperiores. Quae laborum
            doloribus sequi asperiores corporis!
          </p>
        </div>
        {/*  */}

        <div className="flex items-center justify-start gap-4 mt-8">
          <p className="font-semibold text-slate-800">Categories: </p>
          <button className="px-2 py-1 bg-slate-200 font-semibold text-md rounded-md ">
            Tech
          </button>
          <button className="px-2 py-1 bg-slate-200 font-semibold text-md rounded-md ">
            Ai
          </button>
        </div>

        {/*  */}
        <div className=" mt-8 ">
          <p className="font-semibold text-slate-800">Comments:</p>
          {/*  */}
          <div className="mt-4 bg-slate-200 px-2 sm:px-4 py-1 sm:py-2 rounded-md">
            <div className="flex items-center justify-between  ">
              <div>
                <p className="text-slate-800 text-sm font-semibold ">@faisal</p>
              </div>
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <p className="text-slate-800 text-sm font-semibold ">
                    12/4/25
                  </p>
                  <p className="text-slate-800 text-sm font-semibold ">
                    8:10PM
                  </p>
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

          {/*  */}

          {/* Comment */}

          <div className="mt-4 bg-slate-200 px-2 sm:px-4 py-1 sm:py-2 rounded-md">
            <div className="flex items-center justify-between  ">
              <div>
                <p className="text-slate-800 text-sm font-semibold ">@faisal</p>
              </div>
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <p className="text-slate-800 text-sm font-semibold ">
                    12/4/25
                  </p>
                  <p className="text-slate-800 text-sm font-semibold ">
                    8:10PM
                  </p>
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

          {/*
           */}

          <div className="mt-4 bg-slate-200 px-2 sm:px-4 py-1 sm:py-2 rounded-md">
            <div className="flex items-center justify-between  ">
              <div>
                <p className="text-slate-800 text-sm font-semibold ">@faisal</p>
              </div>
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <p className="text-slate-800 text-sm font-semibold ">
                    12/4/25
                  </p>
                  <p className="text-slate-800 text-sm font-semibold ">
                    8:10PM
                  </p>
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

          {/*  */}
        </div>

        {/* Write a comment section */}

        <div className="mt-8   ">
          <textarea
            className="w-full outline-none border-2 border-slate-200 px-2 py-4 rounded-md focus:border-slate-400 transition ease-in-out duration-75 "
            rows="4"
            placeholder="Write your thoughts here..."
            name="comment"
            id="comment"
          ></textarea>
          <button className="w-full mt-4 bg-black text-white font-semibold text-md  py-3 rounded-md   ">
            Submit
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default PostDetailsPage;
