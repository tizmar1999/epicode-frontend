import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

type DsTreeItemProps = {
  label: string
  level?: number
  isActive?: boolean
  onClick?: () => void
  children?: React.ReactNode
  icon?: string
}

export function DsTreeItem({
  label,
  level = 0,
  isActive = false,
  onClick,
  children,
  icon = "cube",
}: DsTreeItemProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const hasChildren = Boolean(children)

  function handleClick() {
    if (hasChildren) setIsOpen((prev) => !prev)
    onClick?.()
  }

  return (
    <div className="mb-1">
      <div
        onClick={handleClick}
        style={{ paddingLeft: `${level * 12}px` }}
        className={cn(
          "flex items-center gap-2 py-1.5 px-2 rounded-md text-sm cursor-pointer transition-colors",
          isActive
            ? "bg-[var(--color-active)] text-[var(--color-foreground)]"
            : "text-[var(--color-foreground-muted)] hover:bg-[#1a1d2b]"
        )}
      >
        {/* ICON */}
        <i className={`fas fa-${icon} text-xs`} />

        {/* LABEL */}
        <span className="truncate">{label}</span>

        {/* CHEVRON */}
        {hasChildren && (
          <i
            className={cn(
              "fas text-[10px] ml-auto transition-transform",
              isOpen ? "fa-chevron-down" : "fa-chevron-right"
            )}
          />
        )}
      </div>

      {/* CHILDREN */}
      {hasChildren && isOpen && (
        <div className="ml-3 border-l border-[var(--color-border)] pl-2">
          {children}
        </div>
      )}
    </div>
  )
}

export default DsTreeItem