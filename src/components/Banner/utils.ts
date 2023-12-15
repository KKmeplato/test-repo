import { cva } from "class-variance-authority";

import { BannerVariantProps } from "./types";

export const bannerVariants: BannerVariantProps = cva(
  "inline-flex h-auto items-start justify-start gap-2 p-4 border",
  {
    variants: {
      variant: {
        default: "bg-surface border-default",
        success: "bg-surface-success border-success",
        critical: "bg-surface-critical border-critical",
        warning: "bg-surface-warning border-warning",
        highlight: "bg-surface-highlight border-highlight"
      }
    },

    defaultVariants: {
      variant: "default"
    }
  }
);
