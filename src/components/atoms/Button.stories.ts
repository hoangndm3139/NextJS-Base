import { fn } from "@storybook/test";
import Button from "./button";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    disabled: false,
    children: "My Button",
  },
};

export const DisableButton: Story = {
  args: {
    disabled: true,
    children: "My Button",
  },
};
