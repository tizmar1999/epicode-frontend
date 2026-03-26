import type { Meta, StoryObj } from "@storybook/react"

import DsInput from "./ds-input"

const meta: Meta<typeof DsInput> = {
  title: "Design System/Input",
  component: DsInput,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof DsInput>

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helperText: "Use 3-20 characters.",
    placeholder: "epicode-user",
  },
}

export const ErrorState: Story = {
  args: {
    label: "Password",
    type: "password",
    error: true,
    errorMessage: "Password is too short",
    placeholder: "••••••••",
  },
}
