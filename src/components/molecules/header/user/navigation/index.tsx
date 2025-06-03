import Typography, { TypographyVariant } from "@/components/atoms/typography";

export default function UserNavigation() {
  return (
    <div className="bg-fblack-th rounded-b-lg p-4">
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 cursor-pointer hover:text-white"
      >
        History
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-4 cursor-pointer hover:text-white"
      >
        My card
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-4 cursor-pointer hover:text-white"
      >
        Album
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-4 cursor-pointer hover:text-white"
      >
        Payments
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-4 cursor-pointer hover:text-white"
      >
        My Account
      </Typography>
      <Typography
        variant={TypographyVariant.BODY_2}
        className="text-bw-gray-3 mt-4 cursor-pointer hover:text-white"
      >
        Logout
      </Typography>
    </div>
  );
}
