import NoCard from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: NoCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
