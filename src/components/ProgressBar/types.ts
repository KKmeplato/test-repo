import * as RadixProgress from "@radix-ui/react-progress";

import { Size, Variant } from "lib/index";

export interface ProgressBarProps
  extends Omit<RadixProgress.ProgressProps, "value"> {
  variant?: Extract<Variant, "highlight" | "primary" | "success" | "critical">;
  size?: Size;
  accessibilityLabel: string;
  value: number;
  max: number;
  noAnimation?: boolean;
}
