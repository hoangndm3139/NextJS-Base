import Image from "next/image";
import React from "react";
import { MomType, PositionType, TierType, CardMode } from "@/types/card";

type IngameCardWithoutTierProps = {
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
  mode: CardMode;
};

const tierBackgroundImageConfig: Record<TierType, string> = {
  decent: "bg-[url('/images/img_ingame/img_card_without_label/img_decent_card.png')]",
  amazing: "bg-[url('/images/img_ingame/img_card_without_label/img_amazing_card.png')]",
  elite: "bg-[url('/images/img_ingame/img_card_without_label/img_elite_card.png')]",
  fantasy: "bg-[url('/images/img_ingame/img_card_without_label/img_fantasy_card.png')]",
  goat: "bg-[url('/images/img_ingame/img_card_without_label/img_goat_card.png')]",
  normal: "bg-[url('/images/img_ingame/img_card_without_label/img_normal_card.png')]",
};

const commonCardClasses =
  "w-[90px] h-[120px] rounded-lg flex flex-col justify-between items-center text-center bg-cover bg-center bg-no-repeat";

const momIcons: Record<MomType, string> = {
  AM: "/icons/icon_labels_mom/ic_AM.svg",
  DE: "/icons/icon_labels_mom/ic_DE.svg",
  EL: "/icons/icon_labels_mom/ic_EL.svg",
  FA: "/icons/icon_labels_mom/ic_FA.svg",
  GO: "/icons/icon_labels_mom/ic_GO.svg",
  NO: "/icons/icon_labels_mom/ic_NO.svg",
};

const FALLBACK_PLAYER_IMAGE = "images/img_ingame/img_no_player.svg";

const labelClassName = "text-center text-[5px] leading-none text-white uppercase";

const IngameCardWithoutTier: React.FC<IngameCardWithoutTierProps> = ({
  playerName,
  level,
  club,
  ovr,
  position,
  tier,
  playerImageSrc,
  mom,
  mode,
}) => {
  const isIngame = mode === "ingame";
  const positionTextColorClass =
    tier === "elite" || tier === "fantasy" || tier === "goat" ? "text-frating-58" : "text-white";

  const backgroundImageClass = tierBackgroundImageConfig[tier] || tierBackgroundImageConfig.normal;
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_PLAYER_IMAGE;
  };
  return (
    <div className={`${commonCardClasses} ${backgroundImageClass}`}>
      {/* Player Visual */}
      <div className="relative flex w-full flex-1 justify-center">
        {mom && (
          <Image
            className="absolute top-2.5 left-2"
            src={momIcons[mom]}
            alt="ic_mom"
            width={20}
            height={20}
          />
        )}
        <Image
          className="absolute bottom-0"
          src={playerImageSrc ?? FALLBACK_PLAYER_IMAGE}
          alt="player"
          width={58}
          height={58}
          onError={handleImageError}
        />
      </div>
      {/* Player Stats */}
      <div className="flex h-[54px] w-full flex-col items-center justify-start gap-1.5 px-2.5 pt-1.5 pb-[7.5px]">
        <div className="flex flex-col items-center justify-center">
          <p className="justify-start text-center text-[8px] leading-[9px] font-semibold text-white uppercase">
            {playerName.firstName}
          </p>
          <p className="justify-start text-center text-[10px] leading-[9px] font-bold text-white uppercase">
            {playerName.lastName}
          </p>
        </div>
        <div className="grid w-full grid-cols-3 justify-between">
          <div className="flex flex-col items-center justify-start gap-0.5">
            <p className={labelClassName}>club</p>
            <p className="text-[6px] leading-none font-bold text-white uppercase">{club}</p>
          </div>
          {isIngame ? (
            <div className="flex flex-col items-center gap-0.5">
              <p className={labelClassName}>lv</p>
              <p className="text-sm leading-[0.8] font-bold text-white">{level}</p>
            </div>
          ) : (
            <p className="text-base leading-[0.8] font-bold text-white">{ovr}</p>
          )}
          <div className="flex flex-col items-center gap-0.5">
            <p className={labelClassName}>pos</p>
            <p className={`text-[6px] leading-none font-bold text-white uppercase ${positionTextColorClass}`}>
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngameCardWithoutTier;
