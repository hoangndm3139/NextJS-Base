import { fn } from "@storybook/test";
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DisableButton: Story = {
  args: {
    disabled: false,
    children: "My Button",
  },
};

export const EnableButton: Story = {
  args: {
    disabled: true,
    children: "My Button",
  },
};
