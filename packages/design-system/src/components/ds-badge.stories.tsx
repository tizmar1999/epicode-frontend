import type { Meta, StoryObj } from "@storybook/react"

import DsBadge from "./ds-badge"

const meta: Meta<typeof DsBadge> = {
  title: "Design System/Badge",
  component: DsBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Status badge for course and lesson states with multiple semantic color variants.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "completed", "in-progress", "locked", "new"],
    },
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof DsBadge>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Completed: Story = {
  args: {
    variant: "completed",
    children: "Completed",
  },
}

export const InProgress: Story = {
  args: {
    variant: "in-progress",
    children: "In Progress",
  },
}

export const Locked: Story = {
  args: {
    variant: "locked",
    children: "Locked",
  },
}

export const New: Story = {
  args: {
    variant: "new",
    children: "New",
  },
}
