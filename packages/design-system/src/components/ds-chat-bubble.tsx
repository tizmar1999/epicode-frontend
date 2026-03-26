import { cn } from "@workspace/ui/lib/utils";
import type * as React from "react";

/**
 * Props for DsChatBubble component.
 */
export interface DsChatBubbleProps {
  /** Message content */
  children: React.ReactNode;
  /** Choose the alignment and color scheme */
  variant: "user" | "assistant";
}

/**
 * Chat message bubble supporting user (right) and assistant (left) variants.
 */
export function DsChatBubble({ variant, children }: DsChatBubbleProps) {
  const isUser = variant === "user";

  return (
    <div
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[70%] rounded-xl px-4 py-2.5 text-sm",
          isUser ? "bg-primary text-white" : "bg-muted text-foreground"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default DsChatBubble;
