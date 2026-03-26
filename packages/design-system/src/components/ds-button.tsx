import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Button as UiButton } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const dsButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:opacity-90 border border-primary",
        secondary:
          "bg-background-secondary text-foreground hover:bg-muted border border-border",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-muted",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type DsButtonProps = Omit<React.ComponentProps<typeof UiButton>, "variant" | "size"> &
  VariantProps<typeof dsButtonVariants> & {
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }

function DsButton({
  className,
  children,
  variant,
  size,
  isLoading,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: DsButtonProps) {
  return (
    <UiButton
      aria-busy={isLoading}
      type="button"
      className={cn(dsButtonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <span className="inline-flex items-center">{children}</span>
      )}
      {rightIcon && (
        <span className="inline-flex items-center">{rightIcon}</span>
      )}
    </UiButton>
  )
}

export { DsButton, dsButtonVariants }
export default DsButton
