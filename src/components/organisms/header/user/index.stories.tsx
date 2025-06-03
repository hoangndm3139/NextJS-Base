import UserHeader from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UserHeader> = {
  title: "Components/Organisms/Header/User",
  component: UserHeader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UserHeader>;

export const Default: Story = {};
