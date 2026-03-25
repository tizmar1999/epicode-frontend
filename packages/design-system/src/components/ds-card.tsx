import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import {
  Card as UiCard,
  CardContent,
  CardFooter as UiCardFooter,
  CardHeader as UiCardHeader,
  CardTitle as UiCardTitle,
  CardDescription as UiCardDescription,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const cardVariants = cva(
  "bg-background-secondary border border-border rounded-xl text-foreground",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-lg shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type DsCardProps = React.ComponentProps<typeof UiCard> &
  VariantProps<typeof cardVariants> & {
    header?: React.ReactNode
    footer?: React.ReactNode
  }

function DsCard({
  className,
  children,
  header,
  footer,
  variant,
  ...props
}: DsCardProps) {
  return (
    <UiCard className={cn(cardVariants({ variant }), className)} {...props}>
      {header ? <UiCardHeader>{header}</UiCardHeader> : null}
      <CardContent>{children}</CardContent>
      {footer ? <UiCardFooter>{footer}</UiCardFooter> : null}
    </UiCard>
  )
}

export default DsCard
export const DsCardHeader = UiCardHeader
export const DsCardFooter = UiCardFooter
export const DsCardTitle = UiCardTitle
export const DsCardDescription = UiCardDescription
export const DsCardContent = CardContent