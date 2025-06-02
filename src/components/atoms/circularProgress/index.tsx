"use client";

import { useId } from "react";
import Typography, { TypographyVariant } from "../typography";

type CircularProgressProps = {
  value: number;
  totalValue: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  color?: string | [string, string];
  backgroundColor?: string;
};

export default function CircularProgress({
  value = 0,
  totalValue,
  size = 16,
  strokeWidth = 2,
  className = "",
  showValue = true,
  color = ["--color-fprogess-1", "--color-fprogess-2"],
  backgroundColor = "--color-fwhite-opacity80",
}: CircularProgressProps) {
  const calculatedProgress = totalValue > 0 ? (value / totalValue) * 100 : 0;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (calculatedProgress / 100) * circumference;

  const isGradient = Array.isArray(color);
  const reactGeneratedId = useId();
  const gradientId = isGradient ? `cg-${reactGeneratedId}` : undefined;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="-rotate-90 transform"
      >
        {isGradient && gradientId && (
          <defs>
            <linearGradient
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor={
                  (color as [string, string])[0].startsWith("--")
                    ? `var(${(color as [string, string])[0]})`
                    : (color as [string, string])[0]
                }
              />
              <stop
                offset="100%"
                stopColor={
                  (color as [string, string])[1].startsWith("--")
                    ? `var(${(color as [string, string])[1]})`
                    : (color as [string, string])[1]
                }
              />
            </linearGradient>
          </defs>
        )}
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor && backgroundColor.startsWith("--") ? `var(${backgroundColor})` : backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={isGradient && gradientId ? `url(#${gradientId})` : (color as string)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Typography
            variant={TypographyVariant.DETAIL_B}
            className="text-black"
          >
            {value}
          </Typography>
        </div>
      )}
    </div>
  );
}
