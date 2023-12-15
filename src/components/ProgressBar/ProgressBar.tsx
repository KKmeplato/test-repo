import * as Progress from "@radix-ui/react-progress";

import { cn } from "lib/utils";

import { ProgressBarProps } from "./types";
import { progressBarIndicatorVariants, progressBarRootVariants } from "./utils";

export const ProgressBar = ({
  variant = "highlight",
  size = "medium",
  accessibilityLabel,
  value,
  max,
  className,
  noAnimation,
  ...rest
}: ProgressBarProps) => {
  const progressBarRootClassName = progressBarRootVariants({ size });
  const progressBarIndicatorClassName = progressBarIndicatorVariants({
    variant,
    noAnimation
  });
  const progressPercentage = 100 - (value / max) * 100;

  return (
    <Progress.Root
      max={max}
      className={cn(progressBarRootClassName, className)}
      style={{
        // Recommended by radix-ui example
        // https://www.radix-ui.com/primitives/docs/components/progress
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)"
      }}
      value={value}
      aria-label={accessibilityLabel}
      {...rest}
    >
      <Progress.Indicator
        className={cn(progressBarIndicatorClassName)}
        style={{ transform: `translateX(-${progressPercentage}%)` }}
      />
    </Progress.Root>
  );
};

ProgressBar.displayName = "ProgressBar";
