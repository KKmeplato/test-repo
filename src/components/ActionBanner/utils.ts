import { cva } from "class-variance-authority";

import { ActionBannerVariantProps } from "./types";

export const actionBannerVariants: ActionBannerVariantProps = cva(
  "inline-flex h-auto items-start justify-start gap-2 p-4 border",
  {
    variants: {
      variant: {
        default: "bg-surface border border-default shadow-[#EAEAEA]",
        critical: "bg-surface-critical border border-critical shadow-[#FCE4E4]",
        warning: "bg-surface-warning border border-warning shadow-[#FEF1DA]",
        highlight:
          "bg-surface-highlight border border-highlight shadow-[#C6EDF6]",
        upgrade:
          "bg-attention border-2 border-dashed border-[#2D2D2D] shadow-[0px_0px_0px_1px] shadow-[#EBEF0F]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export const actionBannerChildrenVariants: ActionBannerVariantProps = cva(
  "line-clamp-2 self-stretch text-xs font-normal",
  {
    variants: {
      variant: {
        default: "text",
        critical: "text-critical",
        warning: "text-warning",
        highlight: "text-highlight",
        upgrade: "text"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
