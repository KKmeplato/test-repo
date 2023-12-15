import { cva } from "class-variance-authority";

export const progressBarRootVariants = cva(
  "bg-interactive-plain rounded-level-2 overflow-hidden shadow-xs",
  {
    variants: {
      size: {
        small: "h-2",
        medium: "h-4",
        large: "h-8"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);

export const progressBarIndicatorVariants = cva("h-full w-full", {
  variants: {
    noAnimation: {
      false:
        "ease-[cubic-bezier(0.65,0,0.35,1)] transition-transform duration-[660ms] motion-reduce:transition-none",
      true: "transition-none"
    },
    variant: {
      highlight: "bg-interactive-highlight",
      primary: "bg-interactive-primary",
      success: "bg-interactive-success",
      critical: "bg-interactive-critical"
    }
  },
  defaultVariants: {
    variant: "highlight",
    noAnimation: false
  }
});
