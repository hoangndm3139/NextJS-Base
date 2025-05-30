import LeagueResult from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LeagueResult> = {
  title: "Components/Molecules/Header/Search/League",
  component: LeagueResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LeagueResult>;

const mockLeagues = [
  {
    name: "Premier League",
    nation: "england",
  },
  {
    name: "La Liga",
    nation: "spain",
  },
  {
    name: "Bundesliga",
    nation: "germany",
  },
];

export const Default: Story = {
  args: {
    leagues: mockLeagues,
  },
};

export const SingleLeague: Story = {
  args: {
    leagues: [
      {
        name: "Premier League",
        nation: "england",
      },
    ],
  },
};

export const EmptyLeagues: Story = {
  args: {
    leagues: [],
  },
};

export const LongLeagueName: Story = {
  args: {
    leagues: [
      {
        name: "Campeonato Brasileiro Série A International Football League",
        nation: "brazil",
      },
    ],
  },
};
