import { cva } from "class-variance-authority";

import { BadgeVariantProps } from "components/Badge/types";

export const badgeAtomVariants: BadgeVariantProps = cva("", {
  variants: {
    variant: {
      attention: "text-icon-attention bg-surface-attention-subdued",
      critical: "text-icon-critical bg-surface-critical-subdued",
      default: "text-icon bg-surface-neutral-subdued",
      info: "text-icon-highlight bg-surface-highlight-subdued",
      success: "text-icon-success bg-surface-success-subdued",
      warning: "text-icon-warning bg-surface-warning-subdued"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
