"use client";

import { ButtonHTMLAttributes } from "react";
import { useCountdown } from "@/hooks/useCountDown";
import { cn } from "@/utils";

interface ButtonMarketProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  targetDate?: Date;
  variant?: "Primary" | "Secondary";
  onExpire?: () => void;
}
interface UseCountdownProps {
  targetDate: Date;
  onExpire?: () => void;
  className?: string;
}

const TimeSubText = ({ targetDate, onExpire, className }: UseCountdownProps) => {
  const { formattedTime, formattedExpiredTime, isExpired } = useCountdown({
    targetDate,
    onExpire,
  });
  return <span className={className}>{isExpired ? formattedExpiredTime : formattedTime}</span>;
};

const ButtonMarket = ({
  text,
  targetDate,
  variant = "Primary",
  className = "",
  onExpire,
  disabled,
  ...props
}: ButtonMarketProps) => {
  const variantStyles = {
    Primary: "text-white",
    Secondary: "text-fprimary-yellow",
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        "bg-fblack-bg3 flex min-h-11 min-w-30 cursor-pointer flex-col items-center justify-center gap-1 rounded-md transition-all duration-200 hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] hover:bg-blend-overlay disabled:cursor-default",
        variantStyles[variant] || variantStyles.Primary,
        // hoverClass,
        className,
      )}
    >
      <span className={`text-xs font-semibold ${disabled ? "text-fgray-gray2" : ""}`}>{text}</span>
      {!!targetDate && (
        <TimeSubText
          targetDate={targetDate}
          onExpire={onExpire}
          className={`text-fgrade-grade text-xs ${disabled ? "text-fgray-gray2" : ""}`}
        />
      )}
    </button>
  );
};

export default ButtonMarket;
