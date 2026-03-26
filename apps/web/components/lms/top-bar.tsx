import DsInput from "@workspace/design-system/components/ds-input"

export function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4 bg-background shadow-sm">
      <div className="w-full max-w-sm">
        <DsInput placeholder="Search in course" />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
          🔔
        </div>
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
          U
        </div>
      </div>
    </div>
  )
}
