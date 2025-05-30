import Toggle from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
  args: {
    enabled: false,
  },
};

export const CheckedToggle: Story = {
  args: {
    enabled: true,
  },
};
