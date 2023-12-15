import type { VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";

import { Variant } from "lib/index";

import { actionBannerVariants } from "./utils";

export type ActionBannerVariants =
  | Extract<Variant, "default" | "critical" | "warning" | "highlight">
  | "upgrade";

export type ActionBannerVariantProps = (props?: {
  variant?: ActionBannerVariants;
}) => string;

interface BannerProps {
  variant?: ActionBannerVariants;
  children: ReactNode;
  action: {
    label: string;
    onClick?: () => void;
  };
}

export type ActionBannerProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof actionBannerVariants> &
  BannerProps;

export interface ActionBannerIconProps {
  variant?: ActionBannerVariants;
}
