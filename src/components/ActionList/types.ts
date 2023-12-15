import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ComponentPropsWithoutRef } from "react";

import { Variant } from "lib/types";

export interface ActionItemProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onClick"> {
  active?: boolean;
  variant?: Extract<Variant, "critical">;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  sideHelpText?: string | React.ReactNode;
  bottomHelpText?: string | React.ReactNode;
  onClick?: () => void;
}

export interface ActionListSection {
  title?: string;
  items: ActionItemProps[];
}

export interface ActionListProps
  extends Pick<DropdownMenuProps, "onOpenChange"> {
  items?: ActionItemProps[];
  sections?: ActionListSection[];
  activator?: React.ReactNode;
}
