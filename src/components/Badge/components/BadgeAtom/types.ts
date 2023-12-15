import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";

import { Progress } from "components/Badge/types";

import { badgeAtomVariants } from "./utils";

export type BadgeAtomProps = Omit<ComponentPropsWithRef<"span">, "children"> &
  VariantProps<typeof badgeAtomVariants> & {
    progress: Progress;
  };
