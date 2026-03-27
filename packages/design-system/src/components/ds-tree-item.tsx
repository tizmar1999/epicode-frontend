import { cn } from "@workspace/ui/lib/utils";
import * as React from "react";

interface DsTreeItemProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  icon?: string;
  isActive?: boolean;
  label: string;
  level?: number;
  onClick?: () => void;
  rightSlot?: React.ReactNode;
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
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const hasChildren = Boolean(children);

  function handleClick() {
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
    onClick?.();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight" && hasChildren) {
      setIsOpen(true);
      event.preventDefault();
    } else if (event.key === "ArrowLeft" && hasChildren) {
      setIsOpen(false);
      event.preventDefault();
    } else if (event.key === "Home") {
      const first = document.querySelector<HTMLButtonElement>(
        "button[role='treeitem']"
      );
      first?.focus();
      event.preventDefault();
    } else if (event.key === "End") {
      const items = document.querySelectorAll<HTMLButtonElement>(
        "button[role='treeitem']"
      );
      items[items.length - 1]?.focus();
      event.preventDefault();
    } else if (event.key === "ArrowDown") {
      const items = Array.from(
        document.querySelectorAll<HTMLButtonElement>("button[role='treeitem']")
      );
      const idx = items.indexOf(event.currentTarget);
      const next = items[idx + 1];
      if (next) {
        next.focus();
        event.preventDefault();
      }
    } else if (event.key === "ArrowUp") {
      const items = Array.from(
        document.querySelectorAll<HTMLButtonElement>("button[role='treeitem']")
      );
      const idx = items.indexOf(event.currentTarget);
      const prev = items[idx - 1];
      if (prev) {
        prev.focus();
        event.preventDefault();
      }
    } else if (event.key === "Enter" || event.key === " ") {
      handleClick();
      event.preventDefault();
    }
  }

  return (
    <div className="mb-1">
      <button
        className={cn(
          "flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
          isActive
            ? "bg-[var(--color-active)] text-[var(--color-foreground)]"
            : "text-[var(--color-foreground-muted)] hover:bg-[var(--color-muted)]"
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={hasChildren ? isOpen : undefined}
        aria-selected={isActive}
        aria-level={level + 1}
        role="treeitem"
        style={{ paddingLeft: `${level * 12}px` }}
        type="button"
      >
        <i
          className={`fas fa-${icon} text-[var(--color-foreground-muted)] text-[11px]`}
        />
        <span className="truncate text-left text-[var(--color-foreground)]">
          {label}
        </span>
        {rightSlot && <div className="mr-2 ml-auto text-xs">{rightSlot}</div>}
        {hasChildren && (
          <i
            className={cn(
              "fas ml-auto text-[var(--color-foreground-muted)] text-[10px] transition-transform",
              isOpen ? "fa-chevron-down" : "fa-chevron-right"
            )}
          />
        )}
      </button>

      {hasChildren && isOpen && (
        <div className="ml-2 border-l border-[var(--color-border)] pl-2 transition-all">
          {children}
        </div>
      )}
    </div>
  );
}

export default DsTreeItem;
