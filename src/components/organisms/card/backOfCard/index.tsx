import PositionStats from "@/components/molecules/card/backOfCard/positionStats";
import { TierType } from "@/types/card";

interface BackOfCardProps {
  tier: TierType;
  skill: string;
  league: string;
  season: string;
  round: string;
  homeClub: {
    name: string;
    score: number;
  };
  awayClub: {
    name: string;
    score: number;
  };
}

const tierBackgroundImageConfig: Record<TierType, string> = {
  normal: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_normal.png')]",
  decent: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_normal.png')]",
  amazing: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_normal.png')]",
  elite: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_elite.png')]",
  fantasy: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_fantasy.png')]",
  goat: "bg-[url('/images/img_ingame/img_back_of_card/img_back_of_fantasy.png')]",
};

const commonCardClasses = "w-[90px] h-30 px-2 flex flex-col gap-1.5 items-center bg-cover bg-center bg-no-repeat";

const BackOfCard = ({ tier, skill, league, awayClub, homeClub, round, season }: BackOfCardProps) => {
  const backgroundImageClass = tierBackgroundImageConfig[tier] || tierBackgroundImageConfig.normal;

  return (
    <div className={`${commonCardClasses} ${backgroundImageClass} bg-cover bg-center bg-no-repeat`}>
      <div className="w-full border-b border-[#7F7F7F]/20 pt-4 pb-1.5">
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-[3px]">
              <p className="text-fcard-brown justify-start text-[8px] leading-1.5 font-semibold">{league}</p>
              <p className="text-bw-gray-25 text-[8px] leading-1.5 font-normal">{season}</p>
            </div>
            <p className="text-bw-gray-25 text-[8px] leading-1.5 font-normal">{round}R</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <p className="text-fgray-gray2 justify-start text-[8px] leading-[9px] font-semibold">{homeClub.name}</p>
              <p className="text-fgray-gray2 justify-start text-[8px] leading-[9px] font-semibold">{homeClub.score}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-bw-gray-25 text-[8px] leading-1.5 font-normal">{awayClub.name}</p>
              <p className="text-bw-gray-25 text-[8px] leading-1.5 font-normal">{awayClub.score}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#7F7F7F]/20 pb-1.5">
        <PositionStats />
      </div>
      <div className="flex w-full justify-between">
        <p className="text-bw-gray-25 text-[8px] leading-[9px] font-normal">Skill</p>
        <p className="bg-gradient-fcard-skill !bg-clip-text text-[8px] leading-[9px] font-semibold text-transparent">
          {skill}
        </p>
      </div>
    </div>
  );
};

export default BackOfCard;
