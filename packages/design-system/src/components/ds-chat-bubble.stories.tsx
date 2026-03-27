import type { Meta, StoryObj } from "@storybook/react";

import { DsChatBubble } from "./ds-chat-bubble";

const meta: Meta<typeof DsChatBubble> = {
  title: "Design System/Chat/DsChatBubble",
  component: DsChatBubble,
  args: {
    children: "Hello from the assistant",
    variant: "assistant",
  },
};

export default meta;

type Story = StoryObj<typeof DsChatBubble>;

export const Assistant: Story = {};

export const User: Story = {
  args: {
    children: "Hi! This is a user message",
    variant: "user",
  },
};
