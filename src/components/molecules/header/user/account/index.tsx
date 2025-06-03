import Avatar, { AvatarSize } from "@/components/atoms/avatar";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

export default function Account() {
  return (
    <div className="bg-fblack-th flex flex-col items-center rounded-t-lg p-4">
      <Avatar
        size={AvatarSize.XL}
        alt="avatar"
        src="/icons/icon_avatar/ic_avatar_default.png"
      />
      <Typography
        variant={TypographyVariant.SUBTITLE_B}
        className="mt-2 text-white"
      >
        Tweety
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-25 mt-0.5"
      >
        tweety@naver.com
      </Typography>
    </div>
  );
}
