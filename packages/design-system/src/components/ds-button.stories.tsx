import type { Meta, StoryObj } from "@storybook/react"

import DsButton from "./ds-button"

const meta: Meta<typeof DsButton> = {
  title: "Design System/Button",
  component: DsButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A branded button with primary, secondary, outline variants, optional icons, and loading state.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    isLoading: {
      control: "boolean",
    },
  },
}

export default meta

type Story = StoryObj<typeof DsButton>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
}

export const Loading: Story = {
  args: {
    variant: "primary",
    children: "Loading",
    isLoading: true,
  },
}

export const WithIcons: Story = {
  args: {
    variant: "primary",
    children: "With Icons",
    leftIcon: <span>←</span>,
    rightIcon: <span>→</span>,
  },
}
