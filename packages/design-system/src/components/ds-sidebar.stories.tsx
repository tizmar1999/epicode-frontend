import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { DsSidebar } from "./ds-sidebar";

const sampleModules = [
  {
    id: "m1",
    title: "Modulo 1",
    sections: [
      {
        id: "s1",
        title: "Sezione 1",
        groups: [
          {
            id: "g1",
            title: "Video",
            lessons: [
              {
                id: "l1",
                title: "Introduzione",
                status: "completed" as const,
                type: "video",
              },
              {
                id: "l2",
                title: "Installazione",
                status: "in-progress" as const,
                type: "video",
              },
            ],
          },
          {
            id: "g2",
            title: "Teoria",
            lessons: [
              {
                id: "l3",
                title: "Concetti base",
                status: "locked" as const,
                type: "article",
                icon: "file",
              },
            ],
          },
        ],
      },
    ],
  },
];

const meta: Meta<typeof DsSidebar> = {
  title: "Design System/Navigation/DsSidebar",
  component: DsSidebar,
  parameters: {
    chromatic: { viewports: [360, 1024] },
  },
};

export default meta;

type Story = StoryObj<typeof DsSidebar>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>("l2");
    return (
      <div className="w-72">
        <DsSidebar
          modules={sampleModules}
          selectedLessonId={selected}
          onSelectLesson={setSelected}
        />
      </div>
    );
  },
};
