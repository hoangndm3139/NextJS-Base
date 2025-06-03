import GameParticipating from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GameParticipating> = {
  title: "Components/Molecules/Header/User/GamesParticipating",
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
export const Default: Story = {};
