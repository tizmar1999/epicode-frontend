import type { Meta, StoryObj } from "@storybook/react";

import DsCard from "./ds-card";

const meta: Meta<typeof DsCard> = {
  title: "Design System/Card",
  component: DsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Container card with optional header and footer slots and an elevated variant.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated"],
    },
    header: { control: "text" },
    footer: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof DsCard>;

export const Default: Story = {
  args: {
    children: <p className="text-foreground text-sm">Simple card content</p>,
  },
};

export const WithHeaderFooter: Story = {
  args: {
    header: "Card Header",
    footer: "Footer note",
    children: "Body content goes here.",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    header: "Elevated Card",
    children: "With subtle shadow.",
  },
};

export const LongContent: Story = {
  args: {
    header: "Documentation",
    children:
      "This card demonstrates longer content to check padding and spacing across multiple lines. It should remain readable and consistent.",
    footer: "Updated 2 hours ago",
  },
};
