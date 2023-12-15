import { cva } from "class-variance-authority";

import { IconButtonVariantProps } from "./types";

export const iconButtonVariants: IconButtonVariantProps = cva(
  "rounded enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        default:
          "enabled:hover:bg-surface-neutral-hovered enabled:active:bg-surface-neutral-pressed",
        critical:
          "enabled:hover:bg-interactive-critical-hovered enabled:active:bg-interactive-critical-pressed",
        highlight: "",
        success: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
