import LanguageSwitcher from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "Components/Organisms/Header/Lang",
  component: LanguageSwitcher,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};
