import ButtonCard from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/ButtonCard",
  component: ButtonCard,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ButtonCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "Button",
  },
};

export const DisbledButton: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
