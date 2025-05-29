import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const ButtonCard = ({ children = "", className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`border-fprimary-yellow text-fprimary-yellow flex h-[26px] w-[104px] cursor-pointer items-center justify-center rounded-sm border text-[10px] font-semibold hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCard;
