import type { VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { Size, Variant } from "lib/index";

import { linkVariants } from "./utils";

type LinkVariant = Extract<Variant, "default" | "critical" | "success">;

type LinkSize = Exclude<Size, "medium">;

export type LinkVariantProps = (props?: {
  variant?: LinkVariant;
  size?: LinkSize;
  disabled?: boolean;
  monochrome?: boolean;
}) => string;

interface AnchorProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "target" | "rel" | "href" | "aria-disabled"
  > {}

interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "aria-disabled"
  > {}

export type LinkProps =
  | (AnchorProps &
      VariantProps<typeof linkVariants> & {
        as: "a";
        external?: boolean;
        href: string;
      })
  | (ButtonProps &
      VariantProps<typeof linkVariants> & {
        as: "button";
        external?: boolean;
      });
