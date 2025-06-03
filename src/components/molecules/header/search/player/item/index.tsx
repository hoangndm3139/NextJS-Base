import Avatar, { AvatarSize } from "@/components/atoms/avatar";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

interface PlayerResultProps {
  name: string;
  team: string;
  avatarSrc?: string;
}

export default function PlayerItem({
  name,
  team,
  avatarSrc = "/icons/icon_player/ic_player_avatar.svg",
}: PlayerResultProps) {
  return (
    <div className="text-bw-gray-3 mt-2 flex h-14.75 w-full cursor-pointer py-3 hover:text-white">
      <Avatar
        src={avatarSrc}
        alt={name}
        size={AvatarSize.L}
      />
      <div className="ml-2 flex flex-col items-start justify-between">
        <Typography
          variant={TypographyVariant.BODY_1}
          className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {name}
        </Typography>
        <Typography
          variant={TypographyVariant.BODY_2}
          className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {team}
        </Typography>
      </div>
    </div>
  );
}
