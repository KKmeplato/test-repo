import type { VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";

import { Variant } from "lib/index";

import { bannerVariants } from "./utils";

export type BannerVariants = Extract<
  Variant,
  "default" | "success" | "critical" | "warning" | "highlight"
>;

export type BannerVariantProps = (props?: {
  variant?: BannerVariants;
  className: string | undefined;
}) => string;

export interface DefaultBannerProps {
  variant?: BannerVariants;
  hideIcon?: boolean;
  title?: string;
  children?: ReactNode;
  primaryAction?: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
  };
  onDismiss?: () => void;
  isInsideCard?: boolean;
}

export type BannerProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof bannerVariants> &
  DefaultBannerProps;

export interface BannerIconProps {
  variant?: BannerVariants;
}
