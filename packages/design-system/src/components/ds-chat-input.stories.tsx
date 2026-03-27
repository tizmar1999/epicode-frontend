import type { Meta, StoryObj } from "@storybook/react";

import { DsChatInput } from "./ds-chat-input";

const meta: Meta<typeof DsChatInput> = {
  title: "Design System/Chat/DsChatInput",
  component: DsChatInput,
  args: {
    placeholder: "Scrivi un messaggio...",
  },
};

export default meta;

type Story = StoryObj<typeof DsChatInput>;

export const Default: Story = {};
