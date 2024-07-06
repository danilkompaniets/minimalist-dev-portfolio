"use client";

import React from "react";
import { CanvasRevealEffect } from "./ui/CardReveal";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Approach = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-20 font-bold text-white text-3xl">
        My <span className="text-purple ">Approach</span>
      </h2>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center:bg-black-100 w-full gap-6 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          desc="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          icon={<PhaseIcon num={1} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          desc="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          icon={<PhaseIcon num={2} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-rose-900"
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          desc="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          icon={<PhaseIcon num={3} />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border bg-gradient-to-t from-[#3637496E] to-[#3637497D] border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-10 w-10 -top-5 -left-5 text-black-300" />
      <Icon className="absolute h-10 w-10 -bottom-5 -left-5 text-black-300" />
      <Icon className="absolute h-10 w-10 -top-5 -right-5 text-black-300" />
      <Icon className="absolute h-10 w-10 -bottom-5 -right-5 text-black-300" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center absolute top-1/2 bottom-1/2 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ num }: { num: number }) => {
  return (
    <div className="border border-black-300 bg-[#161A31] px-4 py-2 rounded-xl bg-">
      <p className="text-purple font-semibold text-xl">Phase {num}</p>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
