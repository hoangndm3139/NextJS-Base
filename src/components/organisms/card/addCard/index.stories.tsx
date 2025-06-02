import AddCard from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: AddCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: { control: "text" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof AddCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: "GK",
    onClick: () => {},
  },
};
