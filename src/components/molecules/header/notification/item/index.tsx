import Typography, { TypographyVariant } from "@/components/atoms/typography";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  time: string;
  isReaded: boolean;
  index: number;
}
export default function Notification({ time, description, title, isReaded, index }: NotificationProps) {
  return (
    <div
      className={`cursor-pointer px-4 py-4 ${index % 2 ? "bg-fblack-bg5" : "bg-fblack-bg2"} ${isReaded ? "opacity-20" : "border-l-fprimary-yellow border-l border-solid"}`}
    >
      <div className="flex items-start justify-between">
        <Typography
          variant={TypographyVariant.BODY_2_B}
          className={`flex-1 text-white`}
        >
          {title}
        </Typography>
        <Typography
          variant={TypographyVariant.BODY_2}
          className={`text-fgrade-grade min-w-14 text-end`}
        >
          {time}
        </Typography>
      </div>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-1.5"
      >
        {description}
      </Typography>
    </div>
  );
}
