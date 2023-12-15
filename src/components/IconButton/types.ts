import type { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { Variant } from "lib/types";

import { iconButtonVariants } from "./utils";

export type IconButtonVariantProps = (props?: {
  variant?: Extract<Variant, "default" | "critical" | "highlight" | "success">;
}) => string;

export interface IconButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<"button">>,
    VariantProps<typeof iconButtonVariants> {
  accessibilityLabel: string;
  active?: boolean;
}
