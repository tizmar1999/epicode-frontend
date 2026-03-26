import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

/**
 * Props for DsTreeItem component.
 */
export type DsTreeItemProps = {
  /** Display label for the tree node */
  label: string
  /** Nesting level used for indentation */
  level?: number
  /** Highlights the item as active/selected */
  isActive?: boolean
  /** Click handler, typically toggles or selects the node */
  onClick?: () => void
  /** Optional content aligned to the right (e.g., badges) */
  rightSlot?: React.ReactNode
  /** Nested children items */
  children?: React.ReactNode
}

/**
 * Recursive tree item for hierarchical navigation structures.
 * Provides indentation, active state, and optional right slot content.
 */
export function DsTreeItem({
  label,
  level = 0,
  isActive = false,
  onClick,
  rightSlot,
  children,
}: DsTreeItemProps) {
  const isClickable = Boolean(onClick)

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onClick}
        style={{ paddingLeft: `${level * 12}px` }}
        className={cn(
          "flex w-full items-center justify-between px-2 py-1 rounded-md text-left transition-colors",
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : isClickable && "hover:bg-muted cursor-pointer"
        )}
      >
        <span className="truncate">{label}</span>
        {rightSlot}
      </button>

      {children ? <div className="mt-1">{children}</div> : null}
    </div>
  )
}
