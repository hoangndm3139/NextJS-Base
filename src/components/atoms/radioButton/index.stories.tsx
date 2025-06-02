import RadioButton from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    items: [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
    ],
    size: "Default",
    selectedValue: { id: 1, name: "Option 1" },
  },
} satisfies Meta<typeof RadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedValue: { id: 3, name: "Option 3" },
  },
};

export const Small: Story = {
  args: {
    size: "Small",
  },
};

export const Disabled: Story = {
  args: {
    disabledItems: [2],
  },
};
