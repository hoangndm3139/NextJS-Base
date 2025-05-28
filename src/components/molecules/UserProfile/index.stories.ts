import { getFixture } from "@/services/apis/user/getUserInfo";
import UserProfile from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof UserProfile>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...getFixture("666"),
  },
};
