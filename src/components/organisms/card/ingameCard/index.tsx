import Image from "next/image";
import React from "react";
import Button from "@/components/atoms/Button";
import ButtonCard from "@/components/atoms/ButtonCard";
import { MomType, PositionType, TierType } from "@/types/card";

type IngameCardProps = {
  playerName: {
    firstName: string;
    lastName: string;
  };
  level: number;
  leagueInfo: string;
  club: string;
  ovr: number;
  position: PositionType;
  tier: TierType;
  playerImageSrc?: string;
  mom?: MomType;
  isDisabledBurn?: boolean;
};

const tierBackgroundImageConfig: Record<TierType, string> = {
  decent: "bg-[url('/images/img_ingame/img_card_label/img_decent_card.png')]",
  amazing: "bg-[url('/images/img_ingame/img_card_label/img_amazing_card.png')]",
  elite: "bg-[url('/images/img_ingame/img_card_label/img_elite_card.png')]",
  fantasy: "bg-[url('/images/img_ingame/img_card_label/img_fantasy_card.png')]",
  goat: "bg-[url('/images/img_ingame/img_card_label/img_goat_card.png')]",
  normal: "bg-[url('/images/img_ingame/img_card_label/img_normal_card.png')]",
};

const tierColorConfig: Record<TierType, string> = {
  normal: "text-white/45",
  decent: "text-white/65",
  amazing: "text-white/65",
  elite: "text-fcard-elite/65",
  fantasy: "text-fcard-fantasy/85",
  goat: "bg-gradient-fcard-goat text-transparent !bg-clip-text opacity-85 ",
};

const commonCardClasses =
  "w-30 h-47 rounded-lg flex flex-col justify-between items-center text-center bg-cover bg-center bg-no-repeat";

const labelClassName = "text-center text-[7px] leading-[7px] text-white/60 uppercase";

const momIcons: Record<MomType, string> = {
  AM: "/icons/icon_labels_mom/ic_AM.svg",
  DE: "/icons/icon_labels_mom/ic_DE.svg",
  EL: "/icons/icon_labels_mom/ic_EL.svg",
  FA: "/icons/icon_labels_mom/ic_FA.svg",
  GO: "/icons/icon_labels_mom/ic_GO.svg",
  NO: "/icons/icon_labels_mom/ic_NO.svg",
};

const FALLBACK_PLAYER_IMAGE = "images/img_ingame/img_no_player.svg";

const IngameCard: React.FC<IngameCardProps> = ({
  playerName,
  level,
  leagueInfo,
  club,
  ovr,
  position,
  tier,
  playerImageSrc,
  mom,
  isDisabledBurn = false,
}) => {
  const backgroundImageClass = tierBackgroundImageConfig[tier] || tierBackgroundImageConfig.normal;
  const tierColor = tierColorConfig[tier] || "text-white";

  const positionTextColorClass =
    tier === "elite" || tier === "fantasy" || tier === "goat" ? "text-frating-58" : "text-white/80";

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_PLAYER_IMAGE;
  };

  return (
    <div className={`${commonCardClasses} ${backgroundImageClass} group relative`}>
      {/* Player Visual */}
      <div className="relative flex w-full flex-1 justify-center">
        {mom && (
          <Image
            className="absolute top-2.5 left-2"
            src={momIcons[mom]}
            alt="mom_icon"
            width={20}
            height={20}
          />
        )}
        <Image
          className="absolute bottom-0"
          src={playerImageSrc ?? FALLBACK_PLAYER_IMAGE}
          alt="player"
          width={86}
          height={86}
          onError={handleImageError}
        />
        <div className="absolute top-2.5 right-2.5 flex flex-col items-start justify-start gap-1.5">
          <div className="flex flex-col items-center justify-start self-stretch">
            <div className="justify-start text-center text-[26px] leading-[26px] font-extrabold text-white uppercase">
              {level}
            </div>
            <div className="justify-start self-stretch text-center text-[8px] leading-[8px] font-bold text-white uppercase">
              LV
            </div>
          </div>
          {/* TODO: Implement the player gem*/}
          <div className="flex gap-[1px]">
            <Image
              src="icons/ic_gem.svg"
              alt="ic_gem"
              width={5}
              height={6}
            />
            <Image
              src="icons/ic_gem.svg"
              alt="ic_gem"
              width={5}
              height={6}
            />
            <Image
              src="icons/ic_gem.svg"
              alt="ic_gem"
              width={5}
              height={6}
            />
          </div>
        </div>
        <div className="absolute bottom-0 flex h-[13px] w-full items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <div className="flex items-center justify-center opacity-60">
            <span className="text-[7px] leading-[1.2] font-semibold tracking-tight text-white uppercase">
              {leagueInfo}
            </span>
          </div>
        </div>
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
              <p className={`text-[10px] leading-4 font-bold uppercase ${positionTextColorClass}`}>{position}</p>
            </div>
          </div>
        </div>
        <div
          className={`justify-start text-[8px] leading-[9.60px] font-semibold tracking-[5.20px] uppercase ${tierColor}`}
        >
          {tier}
        </div>
      </div>

      {/* Actions */}
      <div className="absolute inset-0 hidden flex-col items-center justify-end p-2 group-hover:flex">
        <div className="flex w-full flex-col gap-1">
          <ButtonCard disabled={isDisabledBurn}>Burn</ButtonCard>
          <Button
            variant="Primary"
            size="Small"
            className="w-full"
          >
            Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IngameCard;
