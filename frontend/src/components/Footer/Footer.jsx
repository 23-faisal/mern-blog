import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-zinc-200  py-10 px-2 lg:px-0">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 item-start sm:items-center justify-between mb-8">
        {/* left */}
        <div>
          <p>Featured Blog</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>

        {/* middle */}

        <div>
          <p>Forum</p>
          <p>Support </p>
          <p>Recent Post</p>
        </div>

        {/* right */}

        <div>
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Condition</p>
          <p>Terms of Service</p>
        </div>

        {/*  */}
      </div>
      <div>
        <p className="text-center ">
          All rights reserved to @
          <span className="text-teal-500 underline">faisal</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
