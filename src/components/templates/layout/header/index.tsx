import Image from "next/image";
import Avatar, { AvatarSize } from "@/components/atoms/avatar";
import Button from "@/components/atoms/button";
import Typography, { TypographyVariant } from "@/components/atoms/typography";

export default function Header() {
  return (
    <header className="flex h-17 w-full items-center justify-between">
      <Image
        src="/icons/icon_logo/logo_header.svg"
        width={143}
        height={24}
        alt="logo"
      />
      {/* This content is displayed when you are logged in. */}
      <div className="flex h-7 items-center justify-end">
        <div className="flex items-center justify-between">
          <div className="l-3 flex items-center">
            <Image
              src="/icons/icon_color/ic_cash.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <Typography
              variant={TypographyVariant.BODY_2_B}
              className="ml-1 text-white"
            >
              500,154
            </Typography>
            <div className="bg-fprimary-yellow ml-1.5 flex h-4 w-12.75 items-center justify-center rounded-full">
              <Typography
                variant={TypographyVariant.DETAIL_B}
                className="text-fblack-th"
              >
                Charge
              </Typography>
            </div>
          </div>
          <div className="ml-3 flex items-center">
            <Image
              src="/icons/icon_color/ic_gold.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <Typography
              variant={TypographyVariant.BODY_2_B}
              className="ml-1 text-white"
            >
              9,999,999,999
            </Typography>
          </div>
          <div className="ml-3 flex items-center">
            <Image
              src="/icons/icon_color/ic_incineration-point.svg"
              width={16}
              height={16}
              alt="logo"
            />
            <Typography
              variant={TypographyVariant.BODY_2_B}
              className="ml-1 text-white"
            >
              9,999,999,999
            </Typography>
          </div>
        </div>
        <div className="ml-4 flex w-61 items-center justify-end">
          <div className="ml-4">
            <Image
              src="/icons/icon_outline/ic_search.svg"
              width={16}
              height={16}
              alt="logo"
            />
          </div>
          <div className="ml-4">
            <Image
              src="/icons/icon_outline/ic_alarm_1.svg"
              width={16}
              height={16}
              alt="logo"
            />
            {/* <Image
              src="/icons/icon_outline/ic_alarm_2.svg"
              width={16}
              height={16}
              alt="logo"
            /> */}
          </div>
          <div className="ml-4">
            <Image
              src="/icons/icon_outline/ic_global.svg"
              width={16}
              height={16}
              alt="logo"
            />
          </div>
          <div className="ml-4">
            <Avatar
              size={AvatarSize.S}
              src="/icons/icon_avatar/ic_avatar_default.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      {/* This content is displayed when you are not logged in. */}
      <div className="flex items-center">
        <div>
          <Image
            src="/icons/icon_outline/ic_global.svg"
            width={16}
            height={16}
            alt="logo"
          />
        </div>
        <div className="ml-4 flex items-center">
          <Button
            variant="Outline"
            size="Small"
            className="!rounded-full"
          >
            Sign in
          </Button>
          <Button
            variant="Primary"
            size="Small"
            className="ml-2 !rounded-full"
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
