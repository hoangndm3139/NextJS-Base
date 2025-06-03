import Image from "next/image";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

type AddCardProps = {
  position: string;
  onClick: () => void;
};

const AddCard = ({ position, onClick }: AddCardProps) => {
  return (
    <div
      className="bg-fblack-opacity60 flex h-30 w-[90px] cursor-pointer flex-col items-center justify-center gap-1"
      onClick={onClick}
    >
      <Image
        src="/icons/ic_circle_add.svg"
        alt="ic_circle_add"
        width={20}
        height={20}
      />
      <Typography
        variant={TypographyVariant.DETAIL_B}
        className="text-white"
      >
        {position}
      </Typography>
    </div>
  );
};

export default AddCard;
