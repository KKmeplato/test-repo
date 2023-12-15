import { cva } from "class-variance-authority";

export const stepperVariants = cva(
  "inline-flex justify-center rounded-interactive-elements-default bg-surface-neutral items-center gap-1",
  {
    variants: {
      size: {
        small: "",
        medium: ""
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);

export const stepperInputVariants = cva(
  "uikit-hide-number-spin-controls rounded-interactive-elements-default inline-flex justify-center items-center border border-solid border-default bg-interactive-plain text-xs font-semibold font-display text text-center hover:border-hovered hover:bg-interactive-plain-hovered active:border-pressed active:bg-interactive-plain-pressed disabled:border-disabled disabled:bg-surface-disabled disabled:text-disabled enabled:focus-visible:outline-focus focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      size: {
        small: "py-0.5 px-[3px] h-5 w-10",
        medium: "py-1 px-[7px] h-5 w-12"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
);
