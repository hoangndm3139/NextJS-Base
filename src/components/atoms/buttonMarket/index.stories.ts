import ButtonMarket from ".";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
  title: "components/atoms/ButtonMarket",
  component: ButtonMarket,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ButtonMarket>;
export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date();
const futureDate1 = new Date(now.getTime() + 3661000); // 1 hour, 1 minute, 1 second from now

const pastDate = new Date(2024, 7, 26, 1, 2); // August 26, 2024, 01:02

export const OpenBidButton: Story = {
  args: {
    text: "Open Bid",
    variant: "Primary",
    targetDate: futureDate1,
  },
};

export const BlindBidButton: Story = {
  args: {
    text: "Blind Bid",
    variant: "Primary",
    targetDate: futureDate1,
  },
};

export const BidOnButton: Story = {
  args: {
    text: "Bid On",
    variant: "Primary",
    targetDate: futureDate1,
  },
};

export const BiddingButton: Story = {
  args: {
    text: "Bidding",
    variant: "Primary",
    targetDate: futureDate1,
  },
};

export const SoldOutButton: Story = {
  args: {
    text: "Sold Out",
    variant: "Secondary",
    targetDate: pastDate,
  },
};

export const ExpiredButton: Story = {
  args: {
    text: "Expired",
    variant: "Primary",
    targetDate: pastDate,
  },
};

export const ExpiredDisabledButton: Story = {
  args: {
    text: "Expired",
    variant: "Primary",
    disabled: true,
    targetDate: pastDate,
  },
};

export const CancelDisabledButton: Story = {
  args: {
    text: "Cancel",
    variant: "Primary",
    disabled: true,
    targetDate: pastDate,
  },
};

export const PurchasedButton: Story = {
  args: {
    text: "Purchased",
    variant: "Secondary",
    targetDate: pastDate,
  },
};

export const SuccessButton: Story = {
  args: {
    text: "Success",
    variant: "Secondary",
    targetDate: pastDate,
  },
};

export const FailDisabledButton: Story = {
  args: {
    text: "Fail",
    variant: "Secondary",
    disabled: true,
    targetDate: pastDate,
  },
};

export const RegisterButton: Story = {
  args: {
    text: "Register",
    variant: "Secondary",
  },
};
