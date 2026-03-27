import { Badge as UiBadge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const dsBadgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-0.5 font-medium text-xs uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground-muted",
        completed:
          "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
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
);

/**
 * Props for DsBadge component.
 */
export type DsBadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof dsBadgeVariants>;

/**
 * Small status indicator for states like completed, in-progress, or locked.
 */
function DsBadge({ className, variant, ...props }: DsBadgeProps) {
  return (
    <UiBadge
      className={cn(dsBadgeVariants({ variant }), className)}
      role="status"
      {...props}
    />
  );
}

export { DsBadge, dsBadgeVariants };
export default DsBadge;
