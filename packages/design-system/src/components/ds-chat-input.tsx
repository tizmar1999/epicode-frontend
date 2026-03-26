import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import DsButton from "./ds-button";

/**
 * Props for DsChatInput component.
 */
export interface DsChatInputProps {
  /** Optional container className */
  className?: string;
  /** Callback fired when sending a non-empty value */
  onSend?: (value: string) => void;
  /** Placeholder text for the textarea */
  placeholder?: string;
}

/**
 * Input area for sending chat messages with validation.
 * Prevents empty sends and clears after submit.
 */
export function DsChatInput({
  placeholder,
  onSend,
  className,
}: DsChatInputProps) {
  const [value, setValue] = useState("");

  function handleSend() {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }
    onSend?.(trimmed);
    setValue("");
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <textarea
        className="min-h-[80px] w-full rounded-md border border-border bg-background p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <DsButton
        className="mt-1 w-full"
        disabled={!value.trim()}
        onClick={handleSend}
      >
        Send
      </DsButton>
    </div>
  );
}

export default DsChatInput;
