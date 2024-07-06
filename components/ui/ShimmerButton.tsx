import React, { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ShimmerButton: FC<ButtonProps> = (props) => {
  const { className, onClick, children, ...otherProps } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-[15px] border border-slate-800 bg-[linear-gradient(110deg,#06091F,45%,#161A31,55%,#06091F)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ShimmerButton;
