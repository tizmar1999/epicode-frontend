import * as React from "react"

import { Progress as UiProgress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

type DsProgressProps = {
  value: number
  label?: string
  className?: string
}

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
