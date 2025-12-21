"use client";

import React from "react";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { RiMovieLine, RiTelegram2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col gap-2 fixed top-0 left-0 h-screen w-60 border-r border-gray-200 p-4 bg-white text-black font-semibold">

      {/* Instagram Logo */}
      <div className="mb-6">
        <Image
          src="/images/my-insta1.png"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Menu Buttons */}
      <SidebarButton icon={<GoHomeFill size={22} />} text="Home" />
      <SidebarButton icon={<CiSearch size={22} />} text="Search" />
      <SidebarButton icon={<MdOutlineExplore size={22} />} text="Explore" />
      <SidebarButton icon={<RiMovieLine size={22} />} text="Reels" />
      <SidebarButton icon={<RiTelegram2Line size={22} />} text="Messages" />
      <SidebarButton icon={<FaRegHeart size={22} />} text="Notifications" />
      <SidebarButton icon={<IoIosAdd size={22} />} text="Create" />

      {/* Profile */}
      <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
        <Image
          src="/images/varad.jpeg"
          alt="profile"
          width={24}
          height={24}
          className="rounded-full"
        />
        <span>Profile</span>
      </button>

      {/* Bottom */}
      <div className="mt-auto gap-3">
        <SidebarButton icon={<IoMenu size={24} />} text="More" />
      </div>
    </div>
  );
};

const SidebarButton = ({ icon, text }) => (
  <button className="flex items-center gap-3 hover:bg-gray-100 px-4 py-2 rounded-lg">
    {icon}
    <span>{text}</span>
  </button>
);

export default Sidebar;
