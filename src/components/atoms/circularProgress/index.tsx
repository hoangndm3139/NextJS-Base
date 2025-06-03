import clsx from "clsx";
import Typography, { TypographyVariant } from "../typography";

type CircularProgressProps = {
  value: number;
  totalValue: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  isShowValue?: boolean;
  color?: string | [string, string];
  backgroundColor?: string;
};

export default function CircularProgress({
  value = 0,
  totalValue,
  size = 16,
  strokeWidth = 2,
  className = "",
  isShowValue = true,
  color = ["--color-fprogess-1", "--color-fprogess-2"],
  backgroundColor = "--color-fwhite-opacity80",
}: CircularProgressProps) {
  const calculatedProgress = totalValue > 0 ? (value / totalValue) * 100 : 0;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (calculatedProgress / 100) * circumference;

  const isGradient = Array.isArray(color);

  let gradientId: string | undefined = undefined;
  if (isGradient) {
    const randomSuffix = Math.random().toString(36).substring(2, 9);
    gradientId = `cg-${randomSuffix}`;
  }

  return (
    <div className={clsx("relative inline-flex items-center justify-center", className)}>
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
          stroke={
            isGradient && gradientId
              ? `url(#${gradientId})`
              : Array.isArray(color)
                ? color[0].startsWith("--")
                  ? `var(${color[0]})`
                  : color[0]
                : (color as string).startsWith("--")
                  ? `var(${color as string})`
                  : (color as string)
          }
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      {isShowValue && (
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
