import { Input as UiInput } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import type React from "react";
import { useId } from "react";

/**
 * Props for DsInput component.
 * Form input with label, helper text, and error state.
 */
export type DsInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Optional label displayed above the input */
  label?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Toggles error styling */
  error?: boolean;
  /** Error message shown when in error state */
  errorMessage?: string;
};

/**
 * Form input with label, helper text, and error state.
 * Use for text fields across the LMS with consistent styling.
 */
function DsInput({
  className,
  id,
  label,
  helperText,
  error,
  errorMessage,
  ...props
}: DsInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = useId();
  const helpText = error ? (errorMessage ?? helperText) : helperText;

  return (
    <div className="flex w-full flex-col gap-2">
      {label ? (
        <label
          className="font-medium text-foreground text-sm"
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}
      <UiInput
        aria-describedby={helpText ? descriptionId : undefined}
        aria-invalid={error || undefined}
        className={cn(
          "border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        id={inputId}
        {...props}
      />
      {helpText ? (
        <p
          className={cn(
            "text-foreground-muted text-xs",
            error && "text-red-500"
          )}
          id={descriptionId}
        >
          {helpText}
        </p>
      ) : null}
    </div>
  );
}

export { DsInput };
export default DsInput;
