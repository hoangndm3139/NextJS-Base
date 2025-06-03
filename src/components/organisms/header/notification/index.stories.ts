import Notifications from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Notifications> = {
  title: "Components/Organisms/Header/Notifications",
  component: Notifications,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Notifications>;
export const Default: Story = {};
