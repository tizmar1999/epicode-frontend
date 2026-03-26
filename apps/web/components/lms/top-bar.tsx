export function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-background shadow-sm">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            className="w-full bg-[var(--color-muted)] border border-border rounded-lg px-4 py-2.5 pl-10 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-foreground-muted)] focus:outline-none"
            placeholder="Search in course"
          />
          <span className="absolute left-3 top-3 text-[var(--color-foreground-muted)] text-sm">🔍</span>
          <span className="absolute right-3 top-2.5 text-xs bg-[var(--color-background-secondary)] border border-border text-[var(--color-foreground-muted)] px-2 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[var(--color-foreground-muted)]">
        <div className="relative">
          <span className="w-9 h-9 rounded-full bg-[var(--color-muted)] flex items-center justify-center text-sm">
            🔔
          </span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff4d6d] text-[10px] rounded-full flex items-center justify-center text-white">
            1
          </span>
        </div>
        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
          U
        </div>
      </div>
    </div>
  )
}
