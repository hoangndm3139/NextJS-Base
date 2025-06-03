import Typography, { TypographyVariant } from "@/components/atoms/typography";
import GameParticipating from "./item";

export default function GamesParticipating() {
  const game: {
    name: string;
    status: "view" | "live";
    index: number;
  }[] = [
    {
      name: "FIFA World Cup 2022",
      status: "live",
      index: 0,
    },
    {
      name: "UEFA Champions League",
      status: "view",
      index: 1,
    },
    {
      name: "English Premier League",
      status: "live",
      index: 2,
    },
  ];
  return (
    <div className="max-h-23.25">
      {game.length ? (
        game.map((item, index) => (
          <GameParticipating
            key={index}
            name={item.name}
            status={item.status}
            index={item.index}
          />
        ))
      ) : (
        <div className="flex h-7.5 items-center justify-center">
          <Typography
            variant={TypographyVariant.BODY_2}
            className="text-bw-gray-3"
          >
            No special games participating
          </Typography>
        </div>
      )}
    </div>
  );
}
