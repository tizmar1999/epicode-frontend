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
  /** Optional leading icon */
  icon?: React.ReactNode
  /** Highlights the item as active/selected */
  isActive?: boolean
  /** Whether child content is expanded */
  isOpen?: boolean
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
  icon,
  isActive = false,
  isOpen = false,
  onClick,
  rightSlot,
  children,
}: DsTreeItemProps) {
  const isClickable = Boolean(onClick)
  const hasChildren = !!children

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onClick}
        style={{ paddingLeft: `${level * 12}px` }}
        className={cn(
          "flex w-full items-center justify-between px-2 py-1.5 rounded-md text-left transition-colors",
          isActive
            ? "bg-[#3a2a59] text-foreground font-medium"
            : isClickable && "hover:bg-muted cursor-pointer text-foreground-muted"
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          {hasChildren ? <span>{isOpen ? "▾" : "▸"}</span> : null}
          {icon ? <span className="shrink-0">{icon}</span> : null}
          <span className="truncate">{label}</span>
        </div>
        {rightSlot ? <div className="ml-2 shrink-0">{rightSlot}</div> : null}
      </button>

      {children ? <div className="mt-1 ml-3 border-l border-border pl-2">{children}</div> : null}
    </div>
  )
}
