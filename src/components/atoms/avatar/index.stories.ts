import { fn } from "@storybook/test";
import Avatar, { AvatarSize } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: Object.values(AvatarSize).filter(value => typeof value === "number"),
      mapping: {
        [AvatarSize.S]: AvatarSize.S,
        [AvatarSize.M]: AvatarSize.M,
        [AvatarSize.L]: AvatarSize.L,
        [AvatarSize.XL]: AvatarSize.XL,
      },
      description: "Avatar size",
      table: {
        type: { summary: "AvatarSize" },
        defaultValue: { summary: "AvatarSize.M" },
      },
    },
    src: {
      control: "text",
      description: "Image source path",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      description: "Accessibility description text",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      control: "text",
      description: "Custom CSS class",
      table: {
        type: { summary: "string" },
      },
    },
    priority: {
      control: "boolean",
      description: "Prioritize image loading (Next.js Image prop)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: { type: "select" },
      options: ["blur", "empty"],
      description: "Placeholder while loading",
      table: {
        type: { summary: "'blur' | 'empty'" },
      },
    },
    onLoad: {
      action: "loaded",
      description: "Callback when the image has loaded",
    },
    onError: {
      action: "error",
      description: "Callback when image loading fails",
    },
  },
  args: {
    onLoad: fn(),
    onError: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    size: AvatarSize.M,
    src: "/icons/icon_avatar/ic_avatar_default.png",
    alt: "User Avatar",
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: AvatarSize.S,
    src: "/icons/icon_avatar/ic_avatar_default.png",
    alt: "Small Avatar",
  },
  parameters: {
    docs: {
      description: {
        story: "Small avatar (20x20px) - commonly used in compact lists.",
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: AvatarSize.M,
    src: "/icons/icon_avatar/ic_avatar_default.png",
    alt: "Medium Avatar",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium avatar (24x24px) - default size.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: AvatarSize.L,
    src: "/icons/icon_avatar/ic_avatar_default.png",
    alt: "Large Avatar",
  },
  parameters: {
    docs: {
      description: {
        story: "Large avatar (36x36px) - used in headers or profile cards.",
      },
    },
  },
};

export const ExtraLarge: Story = {
  args: {
    size: AvatarSize.XL,
    src: "/icons/icon_avatar/ic_avatar_default.png",
    alt: "Extra Large Avatar",
  },
  parameters: {
    docs: {
      description: {
        story: "Extra large avatar (70x70px) - used in profile pages.",
      },
    },
  },
};
