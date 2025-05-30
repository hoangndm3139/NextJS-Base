import HeaderSearch from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeaderSearch> = {
  title: "Components/Organisms/Header/Search",
  component: HeaderSearch,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeaderSearch>;

// Mock data
const mockResults = {
  withAllData: {
    players: [
      { name: "Cristiano Ronaldo", team: "Al Nassr", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
      { name: "Lionel Messi", team: "Inter Miami", avatarSrc: "/icons/icon_player/ic_player_avatar.svg" },
    ],
    clubs: [
      { name: "Manchester United", league: "Premier League" },
      { name: "Real Madrid", league: "La Liga" },
    ],
    leagues: [
      { name: "Premier League", nation: "england" },
      { name: "La Liga", nation: "spain" },
    ],
  },
  empty: {
    players: [],
    clubs: [],
    leagues: [],
  },
};

export const Default: Story = {
  parameters: {
    mockData: mockResults.empty,
  },
};

export const WithResults: Story = {
  parameters: {
    mockData: mockResults.withAllData,
  },
};

export const Loading: Story = {
  parameters: {
    mockData: undefined,
  },
};

export const NoResults: Story = {
  parameters: {
    mockData: mockResults.empty,
  },
};
