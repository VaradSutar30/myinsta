import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import About from "./components/About";

const Page = () => {
  return (
    <div className="w-full min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex w-50">

        {/* Sidebar */}
        <div className="w-50">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 gap-4 p-4">
          <Hero />
          <Feed />
          <About />
        </div>

      </div>
    </div>
  );
};

export default Page;
