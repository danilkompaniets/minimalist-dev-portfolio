import React from "react";

const GridBg = () => {
  return (
    <div
      className="w-full h-screen  dark:bg-black-100 bg-black-100 dark:bg-grid-white/[0.03] bg-grid-white/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>
  );
};

export default GridBg;
