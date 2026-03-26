import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import DsButton from "./ds-button"

/**
 * Props for DsChatInput component.
 */
export type DsChatInputProps = {
  /** Placeholder text for the textarea */
  placeholder?: string
  /** Callback fired when sending a non-empty value */
  onSend?: (value: string) => void
  /** Optional container className */
  className?: string
}

/**
 * Input area for sending chat messages with validation.
 * Prevents empty sends and clears after submit.
 */
export function DsChatInput({ placeholder, onSend, className }: DsChatInputProps) {
  const [value, setValue] = React.useState("")

  function handleSend() {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend?.(trimmed)
    setValue("")
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[80px] rounded-md border border-border bg-background p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <DsButton onClick={handleSend} disabled={!value.trim()} className="w-full mt-1">
        Send
      </DsButton>
    </div>
  )
}

export default DsChatInput
