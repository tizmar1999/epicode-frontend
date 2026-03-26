import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Badge as UiBadge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const dsBadgeVariants = cva(
  "rounded-full px-2 py-0.5 text-xs font-medium inline-flex items-center gap-1 border border-transparent uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground-muted",
        completed: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
        "in-progress":
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200",
        locked: "bg-muted text-foreground-muted opacity-70",
        new: "bg-primary text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type DsBadgeProps = React.ComponentProps<typeof UiBadge> &
  VariantProps<typeof dsBadgeVariants>

/**
 * Small status indicator for states like completed, in-progress, or locked.
 */
function DsBadge({ className, variant, ...props }: DsBadgeProps) {
  return (
    <UiBadge
      role="status"
      className={cn(dsBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { DsBadge, dsBadgeVariants }
export default DsBadge
