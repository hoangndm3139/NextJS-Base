import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "Primary" | "Secondary1" | "Secondary2" | "Secondary3" | "Negative1" | "Negative2" | "Negative3";
  size: "Large" | "Medium" | "Small";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "Primary",
  size = "Large",
  className = "",
  disabled = false,
  ...props
}) => {
  const hoverClass =
    "hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] hover:bg-blend-overlay";
  const ButtonVariants: { [key: string]: string } = {
    Primary: "bg-fprimary-yellow text-black hover:bg-fprimary-yellow-1",
    Secondary1: `bg-fblack-bg3 text-white ${hoverClass}`,
    Secondary2: `bg-fgray-normal text-white ${hoverClass}`,
    Secondary3: `bg-fblack-bg2 text-white ${hoverClass}`,
    Negative1: `bg-fblack-bg3 text-bw-gray-3 ${hoverClass}`,
    Negative2: `bg-fgray-normal text-bw-gray-3 ${hoverClass}`,
    Negative3: `bg-fblack-bg2 text-bw-gray-25 ${hoverClass}`,
  };

  const SizeVariants: { [key: string]: string } = {
    Large: "h-10 w-30 text-xs",
    Medium: "h-8 w-25 text-xs rounded-sm",
    Small: "h-6 w-15 text-[10px] rounded-md",
  };
  return (
    <button
      {...props}
      disabled={disabled}
      className={`disabled:bg-fblack-bg3 disabled:text-fgray-gray2 flex flex-shrink-0 cursor-pointer items-center justify-center rounded-md font-semibold disabled:cursor-default ${ButtonVariants[variant]} ${SizeVariants[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
