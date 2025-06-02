import NoData from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NoData> = {
  title: "Components/Molecules/Header/Search/Box/NoData",
  component: NoData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NoData>;

export const Default: Story = {
  args: {
    value: "Messi",
  },
};

export const EmptySearch: Story = {
  args: {
    value: "",
  },
};

export const LongSearchTerm: Story = {
  args: {
    value: "Very long search term that might need to be truncated in the UI",
  },
};

export const SpecialCharacters: Story = {
  args: {
    value: "!@#$%^&*()",
  },
};
