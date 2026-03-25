import * as React from "react"
import { Input as UiInput } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

type DsInputProps = React.ComponentProps<typeof UiInput> & {
  label?: string
  helperText?: string
  error?: boolean
  errorMessage?: string
}

function DsInput({
  className,
  id,
  label,
  helperText,
  error,
  errorMessage,
  ...props
}: DsInputProps) {
  const inputId = id ?? React.useId()
  const descriptionId = React.useId()
  const helpText = error ? errorMessage ?? helperText : helperText

  return (
    <div className="flex w-full flex-col gap-2">
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}
      <UiInput
        id={inputId}
        aria-invalid={error || undefined}
        aria-describedby={helpText ? descriptionId : undefined}
        className={cn(
          "bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:border-primary",
          error && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
      {helpText ? (
        <p
          id={descriptionId}
          className={cn(
            "text-xs text-foreground-muted",
            error && "text-red-500"
          )}
        >
          {helpText}
        </p>
      ) : null}
    </div>
  )
}

export { DsInput }
export default DsInput
