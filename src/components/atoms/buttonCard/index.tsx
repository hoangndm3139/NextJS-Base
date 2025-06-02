import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const ButtonCard = ({ children = "", className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "border-fprimary-yellow text-fprimary-yellow disabled:bg-fblack-bg3 disabled:text-fgray-gray2 flex h-[26px] w-[104px] cursor-pointer items-center justify-center rounded-sm border text-[10px] font-semibold hover:bg-white/10 disabled:cursor-default disabled:border-0",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonCard;
