import UserNavigation from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UserNavigation> = {
  title: "Components/Molecules/Header/User/Navigation",
  component: UserNavigation,
  parameters: {
    layout: "centered",
    backgrounds: {
      //   default: "dark",
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
type Story = StoryObj<typeof UserNavigation>;
export const Default: Story = {};
