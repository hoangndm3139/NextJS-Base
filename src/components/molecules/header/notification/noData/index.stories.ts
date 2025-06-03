import NoNotification from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NoNotification> = {
  title: "Components/Molecules/Header/Notification/NoNotification",
  component: NoNotification,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NoNotification>;

export const Default: Story = {};
