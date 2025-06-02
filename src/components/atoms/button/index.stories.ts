import Button from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { variant: "Primary", size: "Large" },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryButtonLarge: Story = {
  args: {
    variant: "Primary",
    size: "Large",
    children: "Primary Button",
  },
};

export const PrimaryButtonMedium: Story = {
  args: {
    variant: "Primary",
    size: "Medium",
    children: "Primary Button",
  },
};

export const PrimaryButtonSmall: Story = {
  args: {
    variant: "Primary",
    size: "Small",
    children: "Primary Button",
  },
};

export const Secondary1ButtonLarge: Story = {
  args: {
    variant: "Secondary1",
    size: "Large",
    children: "Secondary1 Button",
  },
};

export const Secondary1ButtonMedium: Story = {
  args: {
    variant: "Secondary1",
    size: "Medium",
    children: "Secondary1 Button",
  },
};

export const Secondary1ButtonSmall: Story = {
  args: {
    variant: "Secondary1",
    size: "Small",
    children: "Secondary1 Button",
  },
};

export const Secondary2ButtonLarge: Story = {
  args: {
    variant: "Secondary2",
    size: "Large",
    children: "Secondary2 Button",
  },
};

export const Secondary2ButtonMedium: Story = {
  args: {
    variant: "Secondary2",
    size: "Medium",
    children: "Secondary2 Button",
  },
};

export const Secondary2ButtonSmall: Story = {
  args: {
    variant: "Secondary2",
    size: "Small",
    children: "Secondary2 Button",
  },
};

export const Secondary3ButtonLarge: Story = {
  args: {
    variant: "Secondary3",
    size: "Large",
    children: "Secondary3 Button",
  },
};

export const Secondary3ButtonMedium: Story = {
  args: {
    variant: "Secondary3",
    size: "Medium",
    children: "Secondary3 Button",
  },
};

export const Secondary3ButtonSmall: Story = {
  args: {
    variant: "Secondary3",
    size: "Small",
    children: "Secondary3 Button",
  },
};

// Negative Button
export const Negative1ButtonLarge: Story = {
  args: {
    variant: "Negative1",
    size: "Large",
    children: "Negative1 Button",
  },
};

export const Negative1ButtonMedium: Story = {
  args: {
    variant: "Negative1",
    size: "Medium",
    children: "Negative1 Button",
  },
};

export const Negative1ButtonSmall: Story = {
  args: {
    variant: "Negative1",
    size: "Small",
    children: "Negative1 Button",
  },
};

export const Negative2ButtonLarge: Story = {
  args: {
    variant: "Negative2",
    size: "Large",
    children: "Negative2 Button",
  },
};

export const Negative2ButtonMedium: Story = {
  args: {
    variant: "Negative2",
    size: "Medium",
    children: "Negative2 Button",
  },
};

export const Negative2ButtonSmall: Story = {
  args: {
    variant: "Negative2",
    size: "Small",
    children: "Negative2 Button",
  },
};

export const Negative3ButtonLarge: Story = {
  args: {
    variant: "Negative3",
    size: "Large",
    children: "Negative3 Button",
  },
};

export const Negative3ButtonMedium: Story = {
  args: {
    variant: "Negative3",
    size: "Medium",
    children: "Negative3 Button",
  },
};

export const Negative3ButtonSmall: Story = {
  args: {
    variant: "Negative3",
    size: "Small",
    children: "Negative3 Button",
  },
};
