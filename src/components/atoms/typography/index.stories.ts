import { fn } from "@storybook/test";
import Typography, { TypographyVariant } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Atoms/Typography",
  component: Typography,
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
    variant: {
      control: { type: "select" },
      options: Object.values(TypographyVariant),
      description: "Typography variant",
      table: {
        type: { summary: "TypographyVariant" },
        defaultValue: { summary: "TypographyVariant.BODY_1" },
      },
    },
    children: {
      control: "text",
      description: "Text content",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      control: "text",
      description: "Custom CSS class",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: TypographyVariant.BODY_1,
    children: "This is default typography text",
  },
};

// Headline variants
export const Headline: Story = {
  args: {
    variant: TypographyVariant.HEADLINE,
    children: "Main Headline Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Headline variant (32px) - used for main page titles.",
      },
    },
  },
};

export const Heading: Story = {
  args: {
    variant: TypographyVariant.HEADING,
    children: "Section Heading Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading variant (24px) - used for section titles.",
      },
    },
  },
};

// Title variants
export const Title: Story = {
  args: {
    variant: TypographyVariant.TITLE,
    children: "Title Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Title variant (18px) - regular weight.",
      },
    },
  },
};

export const TitleBold: Story = {
  args: {
    variant: TypographyVariant.TITLE_B,
    children: "Bold Title Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Title B variant (18px) - bold weight.",
      },
    },
  },
};

// Subtitle variants
export const Subtitle: Story = {
  args: {
    variant: TypographyVariant.SUBTITLE,
    children: "Subtitle Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Subtitle variant (16px) - regular weight.",
      },
    },
  },
};

export const SubtitleBold: Story = {
  args: {
    variant: TypographyVariant.SUBTITLE_B,
    children: "Bold Subtitle Text",
  },
  parameters: {
    docs: {
      description: {
        story: "Subtitle B variant (16px) - bold weight.",
      },
    },
  },
};

// Body variants
export const Body1: Story = {
  args: {
    variant: TypographyVariant.BODY_1,
    children: "Body 1 text for main content",
  },
  parameters: {
    docs: {
      description: {
        story: "Body 1 variant (14px) - main content text.",
      },
    },
  },
};

export const Body1Bold: Story = {
  args: {
    variant: TypographyVariant.BODY_1_B,
    children: "Bold Body 1 text for emphasis",
  },
  parameters: {
    docs: {
      description: {
        story: "Body 1 B variant (14px) - semibold content text.",
      },
    },
  },
};

export const Body2: Story = {
  args: {
    variant: TypographyVariant.BODY_2,
    children: "Body 2 text for secondary content",
  },
  parameters: {
    docs: {
      description: {
        story: "Body 2 variant (12px) - secondary content text.",
      },
    },
  },
};

export const Body2Bold: Story = {
  args: {
    variant: TypographyVariant.BODY_2_B,
    children: "Bold Body 2 text for emphasis",
  },
  parameters: {
    docs: {
      description: {
        story: "Body 2 B variant (12px) - semibold secondary text.",
      },
    },
  },
};

// Detail variants
export const Detail: Story = {
  args: {
    variant: TypographyVariant.DETAIL,
    children: "Detail text for additional information",
  },
  parameters: {
    docs: {
      description: {
        story: "Detail variant (10px) - small text for additional info.",
      },
    },
  },
};

export const DetailBold: Story = {
  args: {
    variant: TypographyVariant.DETAIL_B,
    children: "Bold detail text for emphasis",
  },
  parameters: {
    docs: {
      description: {
        story: "Detail B variant (10px) - semibold small text.",
      },
    },
  },
};

// Card variants
export const CardName: Story = {
  args: {
    variant: TypographyVariant.CARD_NAME,
    children: "Card Name",
  },
  parameters: {
    docs: {
      description: {
        story: "Card Name variant (12px) - used for card titles.",
      },
    },
  },
};

export const CardInfo: Story = {
  args: {
    variant: TypographyVariant.CARD_INFO,
    children: "Card Info",
  },
  parameters: {
    docs: {
      description: {
        story: "Card Info variant (10px) - used for card descriptions.",
      },
    },
  },
};

export const CardLevel: Story = {
  args: {
    variant: TypographyVariant.CARD_LEVEL,
    children: "25",
  },
  parameters: {
    docs: {
      description: {
        story: "Card Level variant (34px) - used for large numbers in cards.",
      },
    },
  },
};

export const CardLv: Story = {
  args: {
    variant: TypographyVariant.CARD_LV,
    children: "LV",
  },
  parameters: {
    docs: {
      description: {
        story: "Card Lv variant (12px) - used for level labels in cards.",
      },
    },
  },
};
