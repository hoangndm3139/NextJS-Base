import Image from "next/image";
import Typography, { TypographyVariant } from "@/components/atoms/typography";
interface League {
  name: string;
  nation: string;
}

interface LeagueResultProps {
  leagues: League[];
}

export default function LeagueResult({ leagues }: LeagueResultProps) {
  return (
    <div className="mt-4 w-full rounded px-4">
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3"
      >
        League
      </Typography>
      <div className="mt-2">
        {leagues.map((league, index) => (
          <div
            key={index}
            className="flex items-center justify-start"
          >
            <Image
              src={`/icons/icon_nations/ic_${league.nation}.svg`}
              height={16}
              width={16}
              alt={league.name}
            />
            <Typography
              variant={TypographyVariant.BODY_1}
              className="text-bw-gray-3 ml-[7px] w-full overflow-hidden py-2 text-ellipsis whitespace-nowrap hover:text-white"
            >
              {league.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
