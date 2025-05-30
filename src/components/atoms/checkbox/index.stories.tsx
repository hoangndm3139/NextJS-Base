import Checkbox from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {
    checked: false,
  },
};

export const CheckedCheckbox: Story = {
  args: {
    checked: true,
  },
};

export const ErrorCheckbox: Story = {
  args: {
    checked: false,
    isError: true,
  },
};
