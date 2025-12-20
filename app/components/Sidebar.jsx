"use client";

import React from "react";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { RiTelegram2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="text-black font-semibold mt-10 ml-4 flex flex-col gap-6">
      
      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
        <GoHomeFill size={22} />
        <span>Home</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
        <CiSearch size={22} />
        <span>Search</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <MdOutlineExplore size={22}/>
        <span>Explore</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <RiMovieLine size={22}/>
        <span>Reels</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <RiTelegram2Line size={22}/>
        <span>Messages</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <FaRegHeart size={22}/>
        <span>Notifications</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <IoIosAdd size={22}/>
        <span>Create</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
      <span>Profile</span>
      </button>

      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
        <span>More</span>
      </button>

    </div>
  );
};

export default Sidebar;
