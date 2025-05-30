import { TierType } from "@/types/card";
import BackOfCard from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: BackOfCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    tier: "normal" as TierType,
    skill: "Pass Master",
    league: "PL",
    season: "23-24",
    round: "10",
    homeClub: { name: "Home United", score: 2 },
    awayClub: { name: "Away FC", score: 1 },
  },
  argTypes: {
    tier: {
      control: { type: "select" },
      options: ["normal", "decent", "amazing", "elite", "fantasy", "goat"],
    },
    skill: { control: { type: "text" } },
    league: { control: { type: "text" } },
    season: { control: { type: "text" } },
    round: { control: { type: "text" } },
    homeClub: { control: { type: "object" } },
    awayClub: { control: { type: "object" } },
  },
} satisfies Meta<typeof BackOfCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tier: "normal",
    skill: "Pass Master",
    league: "PL",
    season: "23-24",
    round: "10",
    homeClub: { name: "Home United", score: 2 },
    awayClub: { name: "Away FC", score: 1 },
  },
};

export const TierElite: Story = {
  args: {
    tier: "elite",
    skill: "Pass Master",
    league: "PL",
    season: "23-24",
    round: "10",
    homeClub: { name: "Home United", score: 2 },
    awayClub: { name: "Away FC", score: 1 },
  },
};

export const TierGoat: Story = {
  args: {
    tier: "goat",
    skill: "Pass Master",
    league: "PL",
    season: "23-24",
    round: "10",
    homeClub: { name: "Home United", score: 2 },
    awayClub: { name: "Away FC", score: 1 },
  },
};
