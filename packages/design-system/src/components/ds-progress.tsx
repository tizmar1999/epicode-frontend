import * as React from "react"

import { Progress as UiProgress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

/**
 * Props for DsProgress component.
 */
export type DsProgressProps = {
  /** Progress value from 0 to 100 */
  value: number
  /** Optional label displayed above the bar */
  label?: string
  /** Optional className for custom layout control */
  className?: string
}

/**
 * Progress bar with optional label and percentage display.
 * Use to visualize completion for modules, lessons, or tasks.
 */
function DsProgress({ value, label, className }: DsProgressProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value ?? 0)))

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {label ? (
        <div className="flex items-center justify-between text-sm">
          <span className="text-foreground-muted">{label}</span>
          <span className="text-foreground">{clamped}%</span>
        </div>
      ) : (
        <div className="flex items-center justify-end text-sm">
          <span className="text-foreground">{clamped}%</span>
        </div>
      )}
      <UiProgress
        role="progressbar"
        value={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        className="bg-muted [&>*]:bg-primary"
      />
    </div>
  )
}

export { DsProgress }
export default DsProgress
