"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { FC, useEffect } from "react";
import {
  BgBanner,
  BgGradient,
  CodeSample,
  LaptopBg,
  SectionInput,
  TechStackBg,
} from "@/constants/images";
import Image from "next/image";
import { IconCopy } from "@tabler/icons-react";
import { Globe } from "./ui/Globe";
import { globeConfig, sampleArcs } from "@/constants/globeConfig";
import dynamic from "next/dynamic";

interface GridItemProps {
  children: React.ReactNode;
  bgSrc?: string;
  className?: string;
}

const GridItem: FC<GridItemProps> = ({ bgSrc, children, className }) => {
  return (
    <motion.div
      className={cn(
        "h-full w-full relative z-50 p-6 border border-white-100/20",
        className
      )}
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: "cover",
        borderRadius: "23px",
      }}
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1, }}
      transition={{ duration: 1}}
    >
      {children}
    </motion.div>
  );
};

const Portfolio = () => {
  const World = dynamic(
    () => import("../components/ui/Globe").then((m) => m.World),
    {
      ssr: false,
    }
  );

  return (
    <>
      <div className="grid md:auto-rows-[16rem] auto-rows-[10rem] grid-cols-1 md:grid-cols-5 md:gap-4 gap-y-4 max-w-7xl mx-auto">
        <GridItem
          bgSrc={LaptopBg}
          className="m-2 flex md:text-3xl text-2xl  font-bold justify-start items-end row-span-2 col-span-3 text-white"
        >
          <div className="h-full w-full bg-gradient-to-t rounded-3xl from-black-100 to-transparent absolute top-0 left-0" />
          <p className="z-40">
            I prioritize client <br /> collaboration, fostering <br /> open
            communication
          </p>
        </GridItem>

        <GridItem
          bgSrc={BgBanner}
          className="m-2 row-span-1 relative overflow-clip z-10 col-span-2 text-white"
        >
          <h3 className="text-2xl z-50 font-bold">
            I&apos;m very flexible with time <br /> zone communications
          </h3>
          <div className="h-[500px] w-[500px] -z-10 absolute top-0 right-0  overflow-hidden">
            <World globeConfig={globeConfig} data={sampleArcs} />
          </div>
        </GridItem>

        <GridItem className=" flex flex-col font-bold items-start justify-center m-2 row-span-1 col-span-2 relative bg-black-100 text-white">
          <Image
            src={TechStackBg}
            width={0}
            height={0}
            alt="techStack"
            className="absolute h-full w-auto right-0 top-0 rounded-r-3xl -z-10"
          />
          <p className="text-sm text-white-100 z-50">
            I constantly try to improve
          </p>
          <p className="text-white font-bold  md:text-3xl text-2xl">
            My Tech Stack
          </p>
        </GridItem>
      </div>

      <div className="grid md:auto-rows-[12rem] auto-rows-[10rem] mt-4 grid-cols-1 w-full md:grid-cols-7 md:gap-4 gap-y-4 max-w-7xl mx-auto">
        <GridItem
          bgSrc={BgGradient}
          className="m-2 row-span-1 col-span-2 text-white flex w-full items-center justify-center"
        >
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <p className="text-xl font-bold text-center">
              Do you want to start a poject together?
            </p>
            <button className="px-4 py-3 flex items-center gap-2 rounded-xl bg-black-200 border border-white-100/20">
              <IconCopy className="h-5" />
              Copy my email address
            </button>
          </div>
        </GridItem>

        <GridItem
          bgSrc={BgBanner}
          className="flex flex-col m-2 md:row-span-2 row-span-1 items-start justify-center relative col-span-5 text-white"
        >
          <Image
            src={CodeSample}
            width={100}
            height={100}
            alt="code"
            className="h-full w-auto right-0 bottom-0 absolute"
          />
          <p className="text-white-100 text-xs md:text-md uppercase">
            The Inside Scoop
          </p>
          <h2 className="text-white mt-2 font-bold text-2xl md:text-3xl ">
            Currently building a <br />
            JS Animation library
          </h2>
        </GridItem>

        <GridItem
          bgSrc={BgBanner}
          className="flex flex-col m-2 row-span-1 items-start justify-start relative col-span-2 text-white"
        >
          <Image
            src={SectionInput}
            width={100}
            height={100}
            alt="code"
            className="h-[100px] w-auto right-0 bottom-0 absolute"
          />
          <h2 className="text-white mt-2 font-bold text-xl">
            Tech enthusiast with a passion for development.
          </h2>
        </GridItem>
      </div>
    </>
  );
};

export default Portfolio;
