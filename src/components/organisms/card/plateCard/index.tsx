import Image from "next/image";
import React from "react";
import Button from "@/components/atoms/button";
import CircularProgress from "@/components/atoms/circularProgress";
import { GradeType, PositionType } from "@/types/card";

type PlateCardProps = {
  playerName: {
    firstName: string;
    lastName: string;
  };
  club: string;
  ovr: number;
  position: PositionType;
  playerImageSrc?: string;
  price?: {
    amount: number;
    currency: string;
  };
  grade?: {
    value: number;
    type: GradeType;
  };
  type: "buy" | "upgrade";
  isShowLevel?: boolean;
};

const commonCardClasses =
  "w-[120px] h-[188px] rou nded-lg flex flex-col justify-between items-center text-center bg-cover bg-center bg-no-repeat group relative bg-[url('/images/img_ingame/img_plate_card.png')]";

const gradeIcons: Record<GradeType, string> = {
  AM: "/icons/icon_card_grade/ic_grade_card_AM.svg",
  DE: "/icons/icon_card_grade/ic_grade_card_DE.svg",
  EL: "/icons/icon_card_grade/ic_grade_card_EL.svg",
  FA: "/icons/icon_card_grade/ic_grade_card_FA.svg",
  GO: "/icons/icon_card_grade/ic_grade_card_GO.svg",
  NO: "/icons/icon_card_grade/ic_grade_card_NO.svg",
  plate: "/icons/icon_card_grade/ic_grade_card_platecard.svg",
};

const FALLBACK_PLAYER_IMAGE = "images/img_ingame/img_no_player.svg";

const labelClassName = "text-center text-[7px] leading-[7px] text-white/60 uppercase";

const PlateCard: React.FC<PlateCardProps> = ({
  playerName,
  club,
  ovr,
  position,
  playerImageSrc,
  price,
  grade,
  type,
  isShowLevel,
}) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_PLAYER_IMAGE;
  };

  return (
    <div className={commonCardClasses}>
      {/* Player Visual */}
      <div className="relative flex w-full flex-1 justify-center">
        <Image
          className="absolute bottom-0"
          src={playerImageSrc ?? FALLBACK_PLAYER_IMAGE}
          alt="player"
          width={80}
          height={80}
          onError={handleImageError}
        />
        {grade && (
          <div className="bg-fblack-th absolute top-[9px] right-2 flex h-4 items-center justify-center gap-1 rounded-[10px] px-1 backdrop-blur-[2px]">
            <Image
              src={gradeIcons[grade.type]}
              alt="grade_icon"
              width={10}
              height={10}
            />
            <p className="text-[10px] leading-3 font-semibold text-white">{grade.value}</p>
          </div>
        )}

        {isShowLevel && (
          <div className="absolute top-[9px] right-2 flex h-4 items-center justify-center">
            <CircularProgress
              value={1}
              totalValue={3}
            />
          </div>
        )}
      </div>

      {/* Player Stats */}
      <div className="flex h-[91px] flex-col items-center justify-start gap-2 px-[9px] pt-2">
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col items-center justify-center">
            <p className="justify-start text-center text-[9px] leading-3 font-semibold text-white/85 uppercase">
              {playerName.firstName}
            </p>
            <p className="justify-start text-center text-xs leading-3 font-bold text-white/80 uppercase">
              {playerName.lastName}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex w-[26px] flex-col items-center gap-0.5">
              <p className={labelClassName}>club</p>
              <p className="text-[10px] leading-4 font-bold text-white/80 uppercase">{club}</p>
            </div>
            <div className="flex w-[26px] flex-col items-center gap-0.5">
              <p className={labelClassName}>ovr</p>
              <p className="text-base leading-none font-extrabold text-white/80">{ovr}</p>
            </div>
            <div className="flex w-[26px] flex-col items-center gap-0.5">
              <p className={labelClassName}>pos</p>
              <p className="text-[10px] leading-4 font-bold text-white/80 uppercase">{position}</p>
            </div>
          </div>
        </div>
        <div className="justify-start text-[8px] leading-[9.60px] font-semibold tracking-[5.20px] text-white/45 uppercase">
          plate
        </div>
      </div>

      {/* Price */}
      {price && (
        <div className="absolute bottom-0 w-full">
          <div className="flex h-6 w-full items-center justify-center gap-0.5 rounded-br-lg rounded-bl-lg bg-black/40 backdrop-blur-sm">
            <div className="text-[10px] leading-3 font-semibold text-white">{price.amount}</div>
            <div className="text-[10px] leading-3 font-semibold text-white uppercase">{price.currency}</div>
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="absolute inset-0 hidden flex-col items-center justify-end rounded-lg bg-black/50 p-2 group-hover:flex">
        <div className="bg-gradient-faded-to-black absolute inset-0 rounded-b-lg" />
        <div className="relative flex w-full flex-col gap-1">
          <Button
            variant="Primary"
            size="Small"
            className="w-full"
          >
            {type === "buy" ? "Buy now" : "Upgrade"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlateCard;
