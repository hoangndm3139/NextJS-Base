import BoxSearch from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Molecules/Header/Search/Box",
  component: BoxSearch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoxSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default search box with gold icon and input field.",
      },
    },
  },
};
