import ClubResult from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClubResult> = {
  title: "Components/Molecules/Header/Search/Club",
  component: ClubResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClubResult>;

const mockClubs = [
  {
    name: "Manchester United",
    league: "Premier League",
  },
  {
    name: "Real Madrid",
    league: "La Liga",
  },
  {
    name: "Bayern Munich",
    league: "Bundesliga",
  },
];

export const Default: Story = {
  args: {
    clubs: mockClubs,
  },
};

export const SingleClub: Story = {
  args: {
    clubs: [
      {
        name: "Manchester United",
        league: "Premier League",
      },
    ],
  },
};

export const EmptyClubs: Story = {
  args: {
    clubs: [],
  },
};

export const LongClubName: Story = {
  args: {
    clubs: [
      {
        name: "Borussia Mönchengladbach International Football Club",
        league: "Bundesliga",
      },
    ],
  },
};
