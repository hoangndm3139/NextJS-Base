import Image, { ImageProps } from "next/image";

export enum AvatarSize {
  S = 20,
  M = 24,
  L = 36,
  XL = 70,
}

interface AvatarProps extends Omit<ImageProps, "width" | "height"> {
  size: AvatarSize;
}

export default function Avatar({ size, src = "/icons/icon_avatar/ic_avatar_default.png", ...props }: AvatarProps) {
  return (
    <Image
      height={size}
      width={size}
      src={src}
      {...props}
    />
  );
}
