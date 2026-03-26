import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type DsChatBubbleProps = {
  variant: "user" | "assistant"
  children: React.ReactNode
}

export function DsChatBubble({ variant, children }: DsChatBubbleProps) {
  const isUser = variant === "user"

  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[70%] px-4 py-2.5 rounded-xl text-sm",
          isUser ? "bg-primary text-white" : "bg-muted text-foreground"
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default DsChatBubble
