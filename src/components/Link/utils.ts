import { cva } from "class-variance-authority";

import { LinkVariantProps } from "./types";

export const linkVariants: LinkVariantProps = cva(
  "rounded-level-3 items-center inline-flex underline",
  {
    variants: {
      disabled: {
        false: "cursor-pointer",
        true: "cursor-default"
      },
      monochrome: {
        false: "",
        true: ""
      },
      size: {
        small: "text-[0.625rem] leading-[0.875rem] font-medium tracking-wide",
        large: "text-sm"
      },
      variant: {
        default: "",
        critical: "",
        success: ""
      }
    },
    compoundVariants: [
      {
        disabled: true,
        monochrome: [false, true],
        variant: ["default", "success", "critical"],
        className:
          "text-interactive-disabled hover:text-interactive-disabled active:text-interactive-disabled pointer-events-none"
      },
      {
        monochrome: true,
        disabled: false,
        variant: ["default", "success", "critical"],
        className: "text hover:text active:text"
      },
      {
        disabled: false,
        monochrome: false,
        variant: "success",
        className:
          "text-interactive-success hover:text-interactive-success-hovered active:text-interactive-success-pressed"
      },
      {
        disabled: false,
        monochrome: false,
        variant: "critical",
        className:
          "text-interactive-critical hover:text-interactive-critical-hovered active:text-interactive-critical-pressed"
      },
      {
        disabled: false,
        monochrome: false,
        variant: "default",
        className:
          "text-interactive-primary hover:text-interactive-primary-hovered active:text-interactive-primary-pressed"
      }
    ],
    defaultVariants: {
      disabled: false,
      monochrome: false,
      size: "large",
      variant: "default"
    }
  }
);
