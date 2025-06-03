import Notification from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Notification> = {
  title: "Components/Molecules/Header/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Unread: Story = {
  args: {
    title: "New Achievement Unlocked",
    description: "Congratulations! You've reached Level 10 in FIFA Ultimate Team",
    time: "2 hours ago",
    isReaded: false,
  },
};

export const Read: Story = {
  args: {
    title: "New Achievement Unlocked",
    description: "Congratulations! You've reached Level 10 in FIFA Ultimate Team",
    time: "2 hours ago",
    isReaded: true,
  },
};

export const LongContent: Story = {
  args: {
    title: "Very Long Notification Title That Might Need Truncation in Some Cases",
    description:
      "This is a very long notification description that contains a lot of text to test how the component handles long content and whether it wraps correctly or needs truncation",
    time: "2 days ago",
    isReaded: false,
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Update",
    description: "Brief notification",
    time: "Just now",
    isReaded: false,
  },
};
