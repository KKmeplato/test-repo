import { cva } from "class-variance-authority";

import { BadgeVariantProps } from "./types";

export const badgeVariants: BadgeVariantProps = cva("", {
  variants: {
    variant: {
      attention:
        "text-icon-attention bg-surface-attention-subdued border-interactive-attention",
      critical:
        "text-icon-critical bg-surface-critical-subdued border-interactive-critical",
      default: "text-icon bg-surface-neutral-subdued border-icon",
      info: "text-icon-highlight bg-surface-highlight-subdued border-interactive-highlight",
      success:
        "text-icon-success bg-surface-success-subdued border-interactive-success",
      warning:
        "text-icon-warning bg-surface-warning-subdued border-interactive-warning"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
