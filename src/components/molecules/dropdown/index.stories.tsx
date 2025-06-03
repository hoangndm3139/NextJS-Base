import Dropdown from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    options: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    title: "Select an option",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const PreselectedOption: Story = {
  render: args => <Dropdown {...args} />,
  args: {
    title: "Choose your favorite",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ],
  },
};
