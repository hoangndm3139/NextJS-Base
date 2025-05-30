import { PositionType } from "@/types/card";

const mockPositions: { index: number; position: PositionType; ovr: number }[] = [
  { index: 0, position: "ST", ovr: 83 },
  { index: 1, position: "CAM", ovr: 85 },
  { index: 2, position: "CB", ovr: 80 },
];

interface PositionTagProps {
  index: number;
  position: PositionType;
  ovr: number;
}

const forwardPositions: PositionType[] = ["ST", "CF", "RF", "LF", "RW", "LW"];
const midfielderPositions: PositionType[] = ["CAM", "CM", "CDM", "RM", "LM"];
const defenderPositions: PositionType[] = ["CB", "LB", "RB", "LWB", "RWB", "GK"];

const positionConfig = {
  FW: { tagColor: "bg-fcard-FW", textColor: "text-fcard-FW" },
  MF: { tagColor: "bg-fcard-MF", textColor: "text-fcard-MF" },
  DF: { tagColor: "bg-fcard-DF", textColor: "text-fcard-DF" },
  NORMAL: { tagColor: "bg-fgray-gray2", textColor: "text-fgray-gray2" },
};

const getPositionCategory = (position: PositionType): keyof typeof positionConfig => {
  if (forwardPositions.includes(position)) return "FW";
  if (midfielderPositions.includes(position)) return "MF";
  if (defenderPositions.includes(position)) return "DF";
  return "NORMAL";
};

const PositionTag = ({ index, position, ovr }: PositionTagProps) => {
  const positionCategory = getPositionCategory(position);
  const { tagColor: categoryTagColor, textColor: categoryTextColor } = positionConfig[positionCategory];

  let tagColor;
  let determinedPositionColor;

  if (index === 0) {
    tagColor = categoryTagColor;
    determinedPositionColor = "text-white";
  } else {
    tagColor = "bg-fgray-gray2";
    determinedPositionColor = categoryTextColor;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${tagColor} flex h-2.5 w-[21px] items-center justify-center rounded-t-[2px]`}>
        <p className={`text-[7px] leading-2 font-semibold ${determinedPositionColor}`}>{position}</p>
      </div>
      <div className="h-[14px] w-[21px] bg-[url(/images/img_ingame/img_back_of_card/img_bg_tag.svg)] bg-cover bg-center bg-no-repeat">
        <div className="flex h-[14px] w-[21px] justify-center pt-0.5">
          <p className="text-fgray-gray2 text-[7px] leading-2 font-semibold">{ovr}</p>
        </div>
      </div>
    </div>
  );
};

const PositionStats = () => {
  return (
    <div className="grid grid-cols-3 gap-x-1">
      {mockPositions.map(pos => (
        <PositionTag
          key={pos.index}
          index={pos.index}
          position={pos.position}
          ovr={pos.ovr}
        />
      ))}
    </div>
  );
};

export default PositionStats;
