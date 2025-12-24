import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import About from "./components/About";
import RightSidebar from "./components/RightSidebar";

function Page() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <div className="flex w-full">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-[240px] sticky top-0 h-screen">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6 md:p-4">
          <Hero />
          <Feed />
          <About />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-[320px] sticky top-0 h-screen">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Page;