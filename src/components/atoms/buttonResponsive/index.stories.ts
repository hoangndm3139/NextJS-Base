import ButtonResponsive from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/ButtonResponsive",
  component: ButtonResponsive,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { open: true, children: "Button" },
} satisfies Meta<typeof ButtonResponsive>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonOpen: Story = {
  args: {
    children: "Match",
  },
};

export const ButtonClose: Story = {
  args: {
    open: false,
    children: "Close",
  },
};
