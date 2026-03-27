import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DsTreeItem } from "./ds-tree-item";

const meta: Meta<typeof DsTreeItem> = {
  title: "Design System/Navigation/DsTreeItem",
  component: DsTreeItem,
  args: {
    label: "Module 1",
    isActive: false,
  },
  parameters: {
    chromatic: { viewports: [360, 1024] },
  },
};

export default meta;

type Story = StoryObj<typeof DsTreeItem>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    label: "Active Lesson",
    isActive: true,
  },
};

export const WithChildren: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="w-64">
        <DsTreeItem
          {...args}
          defaultOpen={open}
          onClick={() => setOpen((prev) => !prev)}
          label="Section 1"
        >
          <DsTreeItem label="Lesson 1" />
          <DsTreeItem label="Lesson 2" />
        </DsTreeItem>
      </div>
    );
  },
};
