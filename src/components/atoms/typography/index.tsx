import { createElement } from "react";

export enum TypographyVariant {
  HEADLINE = "Headline",
  HEADING = "Heading",
  TITLE = "Title",
  TITLE_B = "Title B",
  SUBTITLE = "Subtitle",
  SUBTITLE_B = "Subtitle B",
  BODY_1 = "Body 1",
  BODY_1_B = "Body 1 B",
  BODY_2 = "Body 2",
  BODY_2_B = "Body 2 B",
  DETAIL = "Detail",
  DETAIL_B = "Detail B",
  CARD_NAME = "Card Name",
  CARD_INFO = "Card Info",
  CARD_LEVEL = "Card Level",
  CARD_LV = "Card Lv",
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
}
const typographyElements = {
  [TypographyVariant.HEADLINE]: "h1",
  [TypographyVariant.HEADING]: "h2",
  [TypographyVariant.TITLE]: "h3",
  [TypographyVariant.TITLE_B]: "h3",
  [TypographyVariant.SUBTITLE]: "h4",
  [TypographyVariant.SUBTITLE_B]: "h4",
  [TypographyVariant.BODY_1]: "p",
  [TypographyVariant.BODY_1_B]: "p",
  [TypographyVariant.BODY_2]: "p",
  [TypographyVariant.BODY_2_B]: "p",
  [TypographyVariant.DETAIL]: "p",
  [TypographyVariant.DETAIL_B]: "p",
  [TypographyVariant.CARD_NAME]: "p",
  [TypographyVariant.CARD_INFO]: "p",
  [TypographyVariant.CARD_LEVEL]: "p",
  [TypographyVariant.CARD_LV]: "p",
};

const typographyClass = {
  [TypographyVariant.HEADLINE]: "text-[32px] leading-[1.2] font-bold",
  [TypographyVariant.HEADING]: "text-2xl leading-[1.2] font-bold",
  [TypographyVariant.TITLE]: "text-lg leading-[1.2] font-normal",
  [TypographyVariant.TITLE_B]: "text-lg leading-[1.2] font-bold",
  [TypographyVariant.SUBTITLE]: "text-base leading-[1.2] font-normal",
  [TypographyVariant.SUBTITLE_B]: "text-base leading-[1.2] font-bold",
  [TypographyVariant.BODY_1]: "text-sm leading-[1.2] font-normal",
  [TypographyVariant.BODY_1_B]: "text-sm leading-[1.2] font-bold",
  [TypographyVariant.BODY_2]: "text-xs leading-[1.2] font-normal",
  [TypographyVariant.BODY_2_B]: "text-xs leading-[1.2] font-bold",
  [TypographyVariant.DETAIL]: "text-[10px] leading-[1.2] font-normal",
  [TypographyVariant.DETAIL_B]: "text-[10px] leading-[1.2] font-bold",
  [TypographyVariant.CARD_NAME]: "text-xs leading-[1.1] font-bold",
  [TypographyVariant.CARD_INFO]: "text-[10px] leading-none font-normal",
  [TypographyVariant.CARD_LEVEL]: "text-[34px] leading-none font-semibold",
  [TypographyVariant.CARD_LV]: "text-xs leading-none font-bold",
};
export default function Typography({ variant, children, className = "", ...props }: TypographyProps) {
  return createElement(
    typographyElements[variant] || "p",
    { className: `base-font ${typographyClass[variant]} ${className}`, ...props },
    children,
  );
}
