import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, ReactNode } from "react";

import { Variant } from "lib/types";

import { badgeVariants } from "./utils";

export type Progress = "complete" | "partial" | "incomplete";

interface DefaultProps {
  as?: "default";
  prefixIcon?: ReactNode;
  progress?: Progress;
}

interface NotificationProps {
  as: "notification";
  progress?: Progress;
  prefixIcon?: never;
}

interface DotProps {
  as: "dot";
  progress: Progress;
  prefixIcon?: never;
}

export type BadgeVariant = Extract<
  Variant,
  "attention" | "critical" | "default" | "info" | "success" | "warning"
>;

export type BadgeVariantProps = (props?: { variant?: BadgeVariant }) => string;

export type BadgeProps = ComponentPropsWithRef<"span"> &
  VariantProps<typeof badgeVariants> &
  (DefaultProps | NotificationProps | DotProps);
