import Image from "next/image";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

interface GameParticipatingProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  status: "view" | "live";
  index: number;
}

export default function GameParticipating({ name, status, index, ...props }: GameParticipatingProps) {
  return (
    <div
      className={`text-bw-gray-3 ${index % 2 ? "bg-fblack-bg6" : "bg-fblack-bg2"} flex cursor-pointer items-center justify-between px-4 py-2 hover:text-white`}
      {...props}
    >
      <Typography
        variant={TypographyVariant.BODY_2}
        className="w-40 overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {name}
      </Typography>
      <Image
        alt="status match"
        width={37}
        height={15}
        src={`/icons/icon_status_match/${status}.svg`}
      />
    </div>
  );
}
