import { PositionType } from "@/types/card";
import PlateCard from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: PlateCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    playerName: {
      control: "object",
    },
    club: {
      control: "text",
    },
    ovr: {
      control: "number",
    },
    position: {
      control: "select",
      options: [
        "GK",
        "CB",
        "LB",
        "RB",
        "LWB",
        "RWB",
        "CDM",
        "CM",
        "CAM",
        "LM",
        "RM",
        "LW",
        "RW",
        "LF",
        "RF",
        "CF",
        "ST",
      ] as PositionType[],
    },
    playerImageSrc: {
      control: "text",
    },
    grade: {
      control: "object",
    },
    type: {
      control: "select",
      options: ["buy", "upgrade"],
    },
  },
} satisfies Meta<typeof PlateCard>;

export default meta;
type Story = StoryObj<typeof PlateCard>;

export const Default: Story = {
  args: {
    playerName: {
      firstName: "Heung-Min",
      lastName: "Son",
    },
    club: "Tot",
    ovr: 95,
    position: "LW",
    playerImageSrc: "/images/img_ingame/img_mock_player.png",
    grade: {
      value: 20,
      type: "plate",
    },
    type: "buy",
  },
};

export const NoPlayerImage: Story = {
  args: {
    ...Default.args,
    playerImageSrc: undefined,
  },
};

export const TypeUpgrade: Story = {
  args: {
    ...Default.args,
    type: "upgrade",
  },
};

export const LongName: Story = {
  args: {
    ...Default.args,
    playerName: {
      firstName: "Jan Vennegoor",
      lastName: "of Hesselink",
    },
  },
};

export const WithPrice: Story = {
  args: {
    ...Default.args,
    price: { amount: 50000, currency: "Gold" },
  },
};
