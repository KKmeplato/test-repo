import { cva } from "class-variance-authority";

import { ButtonVariantProps } from "./types";

export const buttonVariants: ButtonVariantProps = cva(
  "rounded-interactive-elements-default justify-center items-center gap-1 inline-flex text-sm font-medium leading-tight enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic:
          "border border-default hover:border-hovered active:border-pressed text disabled:text-disabled bg-interactive-plain hover:bg-interactive-plain-hovered active:bg-interactive-plain-pressed disabled:bg-interactive-disabled disabled:border-disabled",
        primary:
          "bg-primary text-on-interactive hover:bg-interactive-primary-hovered active:bg-interactive-primary-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        critical:
          "bg-interactive-critical text-on-interactive hover:bg-interactive-critical-hovered active:bg-interactive-critical-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        success:
          "bg-interactive-success text-on-interactive hover:bg-interactive-success-hovered active:bg-interactive-success-pressed disabled:text-disabled disabled:bg-interactive-disabled",
        outline: "",
        warning: "",
        highlight: ""
      },
      size: {
        small: "h-7 px-3 py-1",
        medium: "h-9 px-4 py-2",
        large: "h-11 px-6 py-3"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "medium"
    }
  }
);

export const plainButtonVariants: ButtonVariantProps = cva(
  "rounded-interactive-elements-default justify-center items-center gap-1 inline-flex leading-5 font-medium enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic:
          "text disabled:text-disabled hover:bg-surface-neutral-hovered active:bg-surface-neutral-pressed disabled:hover:bg-inherit",
        primary:
          "text-interactive-primary hover:text-interactive-primary-hovered active:text-interactive-primary-pressed disabled:text-disabled hover:bg-surface-selected-hovered active:bg-surface-selected-pressed disabled:hover:bg-inherit",
        critical:
          "text-interactive-critical hover:text-interactive-critical-hovered active:text-interactive-critical-pressed disabled:text-disabled hover:bg-surface-critical-hovered active:bg-surface-critical-pressed disabled:hover:bg-inherit",
        success:
          "text-interactive-success hover:text-interactive-success-hovered active:text-interactive-success-pressed disabled:text-disabled hover:bg-surface-success-hovered active:bg-surface-success-pressed disabled:hover:bg-inherit",
        warning:
          "text-interactive-warning hover:text-interactive-warning-hovered active:text-interactive-warning-pressed disabled:text-disabled hover:bg-surface-warning-hovered active:bg-surface-warning-pressed disabled:hover:bg-inherit",
        highlight:
          "text-interactive-highlight hover:text-interactive-highlight-hovered active:text-interactive-highlight-pressed disabled:text-disabled hover:bg-surface-highlight-hovered active:bg-surface-highlight-pressed disabled:hover:bg-inherit"
      },
      size: {
        small: "px-2 py-0.5 text-sm",
        medium: "px-2 py-0.5 text-sm",
        large: "px-2 py-0.5 text-base"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "small"
    }
  }
);

export const outlineButtonVariants: ButtonVariantProps = cva(
  "border rounded-interactive-elements-default justify-center items-center gap-1 inline-flex text-sm leading-5 font-medium enabled:focus-visible:outline-focus enabled:focus-visible:outline-1 enabled:focus-visible:outline enabled:focus-visible:ring-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        basic:
          "border-default text hover:border-hovered active:border-pressed disabled:text-disabled",
        primary:
          "text-interactive-primary border-interactive-primary hover:border-interactive-primary-hovered active:border-interactive-primary-pressed hover:text-interactive-primary-hovered active:text-interactive-primary-pressed disabled:border-disabled disabled:text-disabled",
        critical:
          "text-interactive-critical border-interactive-critical hover:border-interactive-critical-hovered active:border-interactive-critical-pressed hover:text-interactive-critical-hovered active:text-interactive-critical-pressed disabled:border-disabled disabled:text-disabled",
        success:
          "text-interactive-success border-interactive-success hover:border-interactive-success-hovered active:border-interactive-success-pressed hover:text-interactive-success-hovered active:text-interactive-success-pressed disabled:border-disabled disabled:text-disabled",
        warning:
          "text-interactive-warning border-interactive-warning hover:border-interactive-warning-hovered active:border-interactive-warning-pressed hover:text-interactive-warning-hovered active:text-interactive-warning-pressed disabled:border-disabled disabled:text-disabled",
        highlight:
          "text-interactive-highlight border-interactive-highlight hover:border-interactive-highlight-hovered active:border-interactive-highlight-pressed hover:text-interactive-highlight-hovered active:text-interactive-highlight-pressed disabled:border-disabled disabled:text-disabled"
      },
      size: {
        small: "py-1 px-3",
        medium: "py-1 px-3",
        large: "py-3 px-6"
      }
    },
    defaultVariants: {
      variant: "basic",
      size: "medium"
    }
  }
);
