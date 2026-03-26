import type { Meta, StoryObj } from "@storybook/react";

import DsProgress from "./ds-progress";

const meta: Meta<typeof DsProgress> = {
  title: "Design System/Progress",
  component: DsProgress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A labeled progress indicator for completion percentages, with optional labels and clamped values.",
      },
    },
  },
  argTypes: {
    value: { control: { type: "number", min: 0, max: 100, step: 1 } },
    label: { control: "text" },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof DsProgress>;

export const Default: Story = {
  args: {
    value: 40,
  },
};

export const WithLabel: Story = {
  args: {
    value: 70,
    label: "Course completion",
  },
};

export const EdgeCases: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <DsProgress label="Start" value={0} />
      <DsProgress label="Complete" value={100} />
    </div>
  ),
};

export const Midpoint: Story = {
  args: {
    value: 50,
    label: "Halfway there",
  },
};
