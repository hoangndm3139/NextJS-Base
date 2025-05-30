import Typography, { TypographyVariant } from "@/components/atoms/typography";
import PlayerItem from "./item";

interface Player {
  name: string;
  team: string;
  avatarSrc: string;
}

interface PlayerResultProps {
  players: Player[];
}
export default function PlayerResult({ players }: PlayerResultProps) {
  return (
    <div className="mt-4 w-full rounded px-4">
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3"
      >
        Players
      </Typography>
      <div className="mt-2">
        {players.map((player, index) => (
          <PlayerItem
            key={index}
            name={player.name}
            team={player.team}
            avatarSrc={player.avatarSrc}
          />
        ))}
      </div>
    </div>
  );
}
