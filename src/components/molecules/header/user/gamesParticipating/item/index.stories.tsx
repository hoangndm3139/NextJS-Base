import GameParticipating from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GameParticipating> = {
  title: "Components/Molecules/Header/User/GamesParticipating/Item",
  component: GameParticipating,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div className="w-61">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GameParticipating>;

export const LiveGame: Story = {
  args: {
    name: "Premier League 2024",
    status: "live",
    index: 1,
  },
};

export const ViewGame: Story = {
  args: {
    name: "Champions League",
    status: "view",
    index: 2,
  },
};

export const LongGameName: Story = {
  args: {
    name: "UEFA Champions League Final 2024 - Real Madrid vs Manchester City",
    status: "live",
    index: 3,
  },
};

export const WithClickHandler: Story = {
  args: {
    name: "La Liga",
    status: "view",
    index: 4,
  },
};
