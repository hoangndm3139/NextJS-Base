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

export default function Avatar({ size, ...props }: AvatarProps) {
  return (
    <Image
      height={size}
      width={size}
      {...props}
    />
  );
}
