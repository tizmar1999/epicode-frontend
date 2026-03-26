import type { Meta, StoryObj } from "@storybook/react"

import DsProgress from "./ds-progress"

const meta: Meta<typeof DsProgress> = {
  title: "Design System/Progress",
  component: DsProgress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 100, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof DsProgress>

export const Default: Story = {
  args: {
    value: 40,
  },
}

export const WithLabel: Story = {
  args: {
    value: 70,
    label: "Course completion",
  },
}

export const EdgeCases: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <DsProgress value={0} label="Start" />
      <DsProgress value={100} label="Complete" />
    </div>
  ),
}
