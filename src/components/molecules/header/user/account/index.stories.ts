import Account from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Account> = {
  title: "Components/Molecules/Header/User/Account",
  component: Account,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Account>;

export const Default: Story = {};
