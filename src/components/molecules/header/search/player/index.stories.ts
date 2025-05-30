import PlayerResult from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PlayerResult> = {
  title: "Components/Molecules/Header/Search/Player",
  component: PlayerResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PlayerResult>;

const mockPlayers = [
  {
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
  },
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
  },
];

export const Default: Story = {
  args: {
    players: mockPlayers,
  },
};

export const SinglePlayer: Story = {
  args: {
    players: [mockPlayers[0]],
  },
};

export const EmptyPlayers: Story = {
  args: {
    players: [],
  },
};

export const LongPlayerName: Story = {
  args: {
    players: [
      {
        name: "Jan Vennegoor of Hesselink International Football Player",
        team: "PSV Eindhoven",
        avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
      },
    ],
  },
};
