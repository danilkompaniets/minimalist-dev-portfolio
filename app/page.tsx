import Approach from "@/components/Approach";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Portfolio />
        <Projects />
        <Approach />
      </div>
    </div>
  );
};

export default page;
