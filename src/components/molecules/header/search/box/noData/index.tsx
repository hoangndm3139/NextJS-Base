import Image from "next/image";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

interface NoDataProps {
  value: string;
}
export default function NoData({ value }: NoDataProps) {
  return (
    <div className="flex w-full flex-col items-center justify-between py-15">
      <Image
        src="/icons/icon_no_data/ic_no_data.svg"
        height={54}
        width={54}
        alt="no data"
      />
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-1.5"
      >
        No results found for "{value}"
      </Typography>
    </div>
  );
}
