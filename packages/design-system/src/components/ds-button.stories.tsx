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
          "A branded button with primary, secondary, outline variants, optional icons, loading and disabled states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    leftIcon: { control: "text" },
    rightIcon: { control: "text" },
    children: { control: "text" },
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
    children: "Submitting...",
    isLoading: true,
  },
}

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled",
    disabled: true,
  },
}

export const WithIcons: Story = {
  args: {
    variant: "primary",
    children: "With Icons",
    leftIcon: "←",
    rightIcon: "→",
  },
}
