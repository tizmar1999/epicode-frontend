import type { Meta, StoryObj } from "@storybook/react"

import DsCard from "./ds-card"

const meta: Meta<typeof DsCard> = {
  title: "Design System/Card",
  component: DsCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated"],
    },
  },
}

export default meta
type Story = StoryObj<typeof DsCard>

export const Default: Story = {
  args: {
    children: <p className="text-sm text-foreground">Simple card content</p>,
  },
}

export const WithHeaderFooter: Story = {
  args: {
    header: <div className="text-base font-semibold">Card Header</div>,
    footer: <div className="text-sm text-foreground-muted">Footer note</div>,
    children: <p className="text-sm text-foreground">Body content goes here.</p>,
  },
}

export const Elevated: Story = {
  args: {
    variant: "elevated",
    header: <div className="text-base font-semibold">Elevated Card</div>,
    children: <p className="text-sm text-foreground">With subtle shadow.</p>,
  },
}
