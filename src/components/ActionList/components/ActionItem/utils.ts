import { cva } from "class-variance-authority";

export const itemVariants = cva(
  "flex group w-full items-start gap-4 rounded-lg px-2 py-2.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1 disabled:text-disabled justify-between relative focus-visible:z-10 hover:z-10",
  {
    variants: {
      variant: {
        default: "text",
        critical:
          "text-critical enabled:hover:bg-surface-critical-hovered enabled:active:bg-surface-critical-pressed"
      },
      active: { true: "", false: "" }
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className:
          "enabled:bg-surface-selected enabled:hover:bg-surface-selected-hovered enabled:active:bg-surface-selected-pressed"
      },
      {
        variant: "default",
        active: false,
        className:
          "enabled:hover:bg-surface-hovered enabled:active:bg-surface-pressed"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: false
    }
  }
);

export const iconVariants = cva(
  "w-5 h-5 flex-shrink-0 group-disabled:text-icon-disabled",
  {
    variants: {
      variant: {
        default: "text-icon",
        critical: "text-icon-critical"
      },
      active: { true: "", false: "" }
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className:
          "group-enabled:text-interactive-primary group-enabled:group-hover:text-interactive-primary-hovered"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: false
    }
  }
);
