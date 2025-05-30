import { CardMode, MomType, PositionType } from "@/types/card";
import IngameCardWithoutTier from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: IngameCardWithoutTier,
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
    mode: {
      control: "select",
      options: ["ingame", "simulation"] as CardMode[],
    },
  },
  args: {
    playerName: { firstName: "Lionel", lastName: "Messi" },
    level: 9,
    leagueInfo: "LIGA BBVA MX",
    club: "FCB",
    ovr: 99,
    position: "RW",
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mode: "ingame",
  },
} satisfies Meta<typeof IngameCardWithoutTier>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalNoPlayer: Story = {
  args: {
    tier: "normal",
    playerName: { firstName: "J.", lastName: "Doe" },
    ovr: 75,
    playerImageSrc: "/images/img_ingame/img_no_player.svg",
    mode: "ingame",
  },
};

export const Normal: Story = {
  args: {
    tier: "normal",
    playerName: { firstName: "J.", lastName: "Doe" },
    ovr: 75,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mode: "simulation",
  },
};

export const NormalIngame: Story = {
  args: {
    tier: "normal",
    playerName: { firstName: "J.", lastName: "Doe" },
    ovr: 75,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mode: "ingame",
  },
};

export const Decent: Story = {
  args: {
    tier: "decent",
    playerName: { firstName: "A.", lastName: "Player" },
    ovr: 80,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Amazing: Story = {
  args: {
    tier: "amazing",
    playerName: { firstName: "S.", lastName: "Star" },
    ovr: 88,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Elite: Story = {
  args: {
    tier: "elite",
    playerName: { firstName: "K.", lastName: "Legend" },
    ovr: 92,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const Fantasy: Story = {
  args: {
    tier: "fantasy",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mom: "DE",
  },
};

export const Goat: Story = {
  args: {
    tier: "goat",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
  },
};

export const GoatWithMom: Story = {
  args: {
    tier: "goat",
    playerName: { firstName: "F.", lastName: "Wonder" },
    ovr: 95,
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    mom: "AM",
  },
};
