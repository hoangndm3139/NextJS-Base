import Typography, { TypographyVariant } from "@/components/atoms/typography";
import { Locale } from "@/config/i18n-config";

export default function LanguageSwitcher() {
  const lang: Locale = "en";
  return (
    <div className="bg-fblack-bg5 cursor-pointer rounded-md px-3 py-1.5">
      <div className="flex h-6 w-6 items-center">
        <Typography
          variant={TypographyVariant.BODY_2}
          className={lang === "en" ? "text-fprimary-yellow" : "text-bw-gray-3 hover:text-white"}
        >
          ENG
        </Typography>
      </div>
      <div className="flex h-6 w-6 items-center">
        <Typography
          variant={TypographyVariant.BODY_2}
          className={
            //lang === "kor" ? "text-fprimary-yellow" :
            "text-bw-gray-3 hover:text-white"
          }
        >
          KOR
        </Typography>
      </div>
    </div>
  );
}
