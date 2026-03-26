import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

type DsTreeItemProps = {
  label: string
  level?: number
  isActive?: boolean
  onClick?: () => void
  children?: React.ReactNode
  icon?: string
  defaultOpen?: boolean
  rightSlot?: React.ReactNode
}

export function DsTreeItem({
  label,
  level = 0,
  isActive = false,
  onClick,
  children,
  icon = "cube",
  defaultOpen = true,
  rightSlot,
}: DsTreeItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const hasChildren = Boolean(children)

  function handleClick() {
    if (hasChildren) setIsOpen((prev) => !prev)
    onClick?.()
  }

  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={handleClick}
        style={{ paddingLeft: `${level * 12}px` }}
        className={cn(
          "flex w-full items-center gap-2 py-2 px-3 rounded-md text-sm cursor-pointer transition-colors",
          isActive
            ? "bg-[#3a2a59] text-[#d8dbe6]"
            : "text-[#9aa0b4] hover:bg-[#1a1d2b]"
        )}
      >
        <i className={`fas fa-${icon} text-[11px] text-[#9aa0b4]`} />
        <span className="truncate text-left text-[#d8dbe6]">{label}</span>
        {rightSlot && <div className="ml-auto mr-2 text-xs">{rightSlot}</div>}
        {hasChildren && (
          <i
            className={cn(
              "fas text-[10px] ml-auto text-[#5c5f73] transition-transform",
              isOpen ? "fa-chevron-down" : "fa-chevron-right"
            )}
          />
        )}
      </button>

      {hasChildren && isOpen && (
        <div className="ml-2 border-l border-[#242739] pl-2">{children}</div>
      )}
    </div>
  )
}

export default DsTreeItem
