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
    <div className="w-full rounded px-1 py-4">
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3"
      >
        Leagues
      </Typography>
      <div className="mt-2">
        {leagues.map((league, index) => (
          <div
            key={index}
            className="text-bw-gray-3 flex cursor-pointer items-center justify-start hover:text-white"
          >
            <Image
              src={`/icons/icon_nations/ic_${league.nation}.svg`}
              height={16}
              width={16}
              alt={league.name}
            />
            <Typography
              variant={TypographyVariant.BODY_1}
              className="ml-1.75 w-full overflow-hidden py-2 text-ellipsis whitespace-nowrap"
            >
              {league.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
