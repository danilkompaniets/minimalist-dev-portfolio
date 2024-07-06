import React from "react";
import { PinContainer, PinPerspective } from "./ui/CardPin";
import { LaptopBg, Technologies1 } from "@/constants/images";
import Image from "next/image";
import { IconLink } from "@tabler/icons-react";

const PinItem = ({
  title,
  link,
  imageSrc,
  heading,
  desc,
  techStackImg,
}: {
  title: string;
  link: string;
  imageSrc: string;
  heading: string;
  desc: string;
  techStackImg: string;
}) => {
  return (
    <div className="h-full w-full flex row-span-1 col-span-1 items-center justify-center ">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[38rem] w-[20rem] md:h-[30rem] h-[30rem] ">
          <div className="flex items-end justify-center flex-1 w-full rounded-xl mt-4 bg-[#13162D]">
            {" "}
            <Image
              alt="tech1"
              src={imageSrc}
              width={0}
              height={0}
              className="w-[25rem] h-auto"
            />{" "}
          </div>
          <h3 className="max-w-xs mt-6 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base mt-4 font-normal">
            <span className="text-slate-500 ">{desc}</span>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-y-2  items-start md:items-center mt-2">
            <Image
              alt="tech1"
              src={techStackImg}
              width={0}
              height={0}
              className="w-auto h-10"
            />
            <a className="flex gap-x-2 font-normal text-purple" href="#">
              <p>Check website</p>
              <IconLink />
            </a>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mt-20 font-bold flex flex-col z-50 items-center justify-center">
      <h2 className="text-center text-white text-3xl">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>
      <div className="grid md:auto-rows-[31rem] md:mt-20 mt-20 auto-rows-[32rem] grid-cols-1 w-full lg:grid-cols-2 md:gap-4 gap-y-4 max-w-7xl mx-auto">
        <PinItem
          title="/ui.aceternity.com"
          link="https://twitter.com/mannupaaji"
          imageSrc={"/assets/earth.svg"}
          heading="3D Solar System Planets to Explore"
          desc="Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js."
          techStackImg={Technologies1}
        />
        <PinItem
          title="/ui.aceternity.com"
          link="https://twitter.com/mannupaaji"
          imageSrc={"/assets/earth.svg"}
          heading="3D Solar System Planets to Explore"
          desc="Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js."
          techStackImg={Technologies1}
        />
        <PinItem
          title="/ui.aceternity.com"
          link="https://twitter.com/mannupaaji"
          imageSrc={"/assets/earth.svg"}
          heading="3D Solar System Planets to Explore"
          desc="Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js."
          techStackImg={Technologies1}
        />
        <PinItem
          title="/ui.aceternity.com"
          link="https://twitter.com/mannupaaji"
          imageSrc={"/assets/earth.svg"}
          heading="3D Solar System Planets to Explore"
          desc="Explore the wonders of our solar system with this captivating
                  3D simulation of the planets using Three.js."
          techStackImg={Technologies1}
        />
      </div>
    </div>
  );
};

export default Projects;
