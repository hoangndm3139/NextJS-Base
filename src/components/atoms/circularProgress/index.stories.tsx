import CircularProgress from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    totalValue: { control: { type: "number", defaultValue: 3 } },
    size: { control: "number" },
    strokeWidth: { control: "number" },
    isShowValue: { control: "boolean" },
    color: { control: "object" },
    backgroundColor: { control: "color" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    totalValue: 3,
    showPercentage: true,
  },
};

export const GradientColor: Story = {
  args: {
    value: 60,
    size: 150,
    strokeWidth: 10,
    showPercentage: true,
    className: "m-4",
  },
};

export const ZeroProgress: Story = {
  args: {
    value: 0,
    size: 120,
    strokeWidth: 8,
    showPercentage: true,
    className: "m-4",
  },
};

export const FullProgress: Story = {
  args: {
    value: 100,
    size: 120,
    strokeWidth: 8,
    showPercentage: true,
    className: "m-4",
  },
};
