import PlayerResult from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PlayerResult> = {
  title: "Components/Molecules/Header/Search/Player/Item",
  component: PlayerResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PlayerResult>;

export const Default: Story = {
  args: {
    name: "Cristiano RonaldoCristiano RonaldoCristiano Ronaldo",
    team: "Al NassrAl NassrAl NassrAl Nassr",
    avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
  },
};

export const WithCustomAvatar: Story = {
  args: {
    name: "Lionel Messi",
    team: "Inter Miami",
    avatarSrc: "/icons/icon_player/ic_player_avatar.svg",
  },
};

export const WithoutAvatar: Story = {
  args: {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
  },
};
