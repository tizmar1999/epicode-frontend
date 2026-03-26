import {
  CardContent,
  Card as UiCard,
  CardFooter as UiCardFooter,
  CardHeader as UiCardHeader,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { cva } from "class-variance-authority";
import type * as React from "react";

/**
 * Variants for DsCard styling.
 */
const cardVariants = cva(
  "rounded-xl border border-border bg-background-secondary p-5 text-foreground",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-black/10 shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Props for DsCard component
 */
export type DsCardProps = {
  /** Optional header content displayed at the top */
  header?: React.ReactNode;

  /** Optional footer content displayed at the bottom */
  footer?: React.ReactNode;

  /** Main content of the card */
  children?: React.ReactNode;

  /** Visual variant of the card */
  variant?: "default" | "elevated";

  /** Additional CSS classes */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Container component used to group related content.
 *
 * Supports optional header and footer sections and a visual "elevated" variant.
 */
export function DsCard({
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
  );
}

export default DsCard;
