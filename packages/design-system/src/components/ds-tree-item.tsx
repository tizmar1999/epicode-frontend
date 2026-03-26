import { cn } from "@workspace/ui/lib/utils";
import * as React from "react";

type DsTreeItemProps = {
  label: string;
  level?: number;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: string;
  defaultOpen?: boolean;
  rightSlot?: React.ReactNode;
};

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
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const hasChildren = Boolean(children);

  function handleClick() {
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
    onClick?.();
  }

  return (
    <div className="mb-1">
      <button
        className={cn(
          "flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-[#3a2a59] text-[#d8dbe6]"
            : "text-[#9aa0b4] hover:bg-[#1a1d2b]",
        )}
        onClick={handleClick}
        style={{ paddingLeft: `${level * 12}px` }}
        type="button"
      >
        <i className={`fas fa-${icon} text-[#9aa0b4] text-[11px]`} />
        <span className="truncate text-left text-[#d8dbe6]">{label}</span>
        {rightSlot && <div className="mr-2 ml-auto text-xs">{rightSlot}</div>}
        {hasChildren && (
          <i
            className={cn(
              "fas ml-auto text-[#5c5f73] text-[10px] transition-transform",
              isOpen ? "fa-chevron-down" : "fa-chevron-right",
            )}
          />
        )}
      </button>

      {hasChildren && isOpen && (
        <div className="ml-2 border-[#242739] border-l pl-2">{children}</div>
      )}
    </div>
  );
}

export default DsTreeItem;
