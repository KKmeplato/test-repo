import type { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { Size, Variant } from "lib/index";

import { buttonVariants } from "./utils";

export type ButtonVariantProps = (props?: {
  variant?: Exclude<Variant, "default" | "attention" | "info">;
  size?: Size;
  className: string | undefined;
}) => string;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  disclosure?: "up" | "down";
  plain?: boolean;
  outline?: boolean;
  accessibilityLabel?: string;
  loading?: boolean;
}
