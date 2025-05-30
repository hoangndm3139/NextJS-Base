import { MomType, PositionType } from "@/types/card";
import IngameCard from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IngameCard> = {
  component: IngameCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tier: {
      control: "select",
      options: ["normal", "decent", "amazing", "elite", "fantasy", "goat"],
    },
    playerName: { control: "object" },
    level: { control: "number" },
    leagueInfo: { control: "text" },
    club: { control: "text" },
    ovr: { control: "number" },
    position: {
      control: "select",
      options: [
        "GK",
        "CB",
        "LB",
        "RB",
        "LWB",
        "RWB",
        "CDM",
        "CM",
        "CAM",
        "LM",
        "RM",
        "LW",
        "RW",
        "LF",
        "RF",
        "CF",
        "ST",
      ] as PositionType[],
    },
    playerImageSrc: { control: "text" },
    mom: {
      control: "select",
      options: ["AM", "DE", "EL", "FA", "GO", "NO"] as MomType[],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
  playerName: { firstName: "Lionel", lastName: "Messi" },
  level: 9,
  leagueInfo: "LIGA BBVA MX",
  club: "FCB",
  ovr: 99,
  position: "RW",
  playerImageSrc: "/images/img_ingame/img_mock_player.png",
};

export const NormalNoPlayer: Story = {
  args: {
    ...defaultArgs,
    tier: "normal",
    playerName: { firstName: "J.", lastName: "Doe" },
    ovr: 75,
    playerImageSrc: "/images/img_ingame/img_no_player.svg",
  },
};

export const Normal: Story = {
  args: {
    ...defaultArgs,
    tier: "normal",
    playerName: { firstName: "J.", lastName: "Doe" },
    ovr: 75,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Decent: Story = {
  args: {
    ...defaultArgs,
    tier: "decent",
    playerName: { firstName: "A.", lastName: "Player" },
    ovr: 80,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Amazing: Story = {
  args: {
    ...defaultArgs,
    tier: "amazing",
    playerName: { firstName: "S.", lastName: "Star" },
    ovr: 88,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Elite: Story = {
  args: {
    ...defaultArgs,
    tier: "elite",
    playerName: { firstName: "K.", lastName: "Legend" },
    ovr: 92,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Fantasy: Story = {
  args: {
    ...defaultArgs,
    tier: "fantasy",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mom: "DE",
  },
};

export const Goat: Story = {
  args: {
    ...defaultArgs,
    tier: "goat",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const GoatWithMom: Story = {
  args: {
    ...defaultArgs,
    tier: "goat",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mom: "AM",
  },
};
