import Image from "next/image";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonResponsiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  open: boolean;
}

const ButtonResponsive = ({ children, open, className = "", ...props }: ButtonResponsiveProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-fgray-normal flex h-10 min-w-[110px] shrink-0 -rotate-90 cursor-pointer items-center justify-center gap-2 rounded-t-lg px-6 text-xs font-semibold shadow-[4px_0px_24px_0px_rgba(0,0,0,0.80)] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] hover:bg-blend-overlay",
        className,
      )}
    >
      {children}
      <span>
        <Image
          className={clsx("transition-transform duration-300", open ? "rotate-90" : "-rotate-90")}
          width={6}
          height={6}
          alt="arrow icon"
          src={"/icons/icon_arrows/ic_arrow-triangle-sharp.svg"}
        />
      </span>
    </button>
  );
};

export default ButtonResponsive;
