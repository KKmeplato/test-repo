import { useStepperControl } from "src/hooks";

import { cn } from "lib/utils";

import { StepperControlProps } from "../../types";
import { StepperIcon } from "../StepperIcon";

export const StepperControl = ({
  min,
  max,
  disabled,
  value,
  onChange
}: StepperControlProps) => {
  const { increment, decrement, isIncrementDisabled, isDecrementDisabled } =
    useStepperControl({
      min,
      max,
      value,
      onChange
    });
  const className = cn(
    "h-[14px] w-[18px] cursor-pointer rounded-level-3 bg-surface-neutral text-icon select-none",
    disabled && "bg-transparent"
  );
  return (
    <div className="relative left-[6px] flex flex-col gap-0.5">
      <div
        className={cn(
          className,
          isIncrementDisabled || disabled
            ? "pointer-events-none text-icon-disabled"
            : "group-hover:bg-surface-neutral-hovered group-hover:text-icon-hovered"
        )}
        role="button"
        tabIndex={-1}
        aria-disabled={disabled || isIncrementDisabled}
        data-testid="increment"
        onClick={increment}
      >
        <StepperIcon.caretUpMinor
          className={cn(
            "rounded-level-3",
            !isIncrementDisabled && "active:bg-surface-neutral-pressed"
          )}
        />
      </div>
      <div
        className={cn(
          className,
          isDecrementDisabled || disabled
            ? "pointer-events-none text-icon-disabled"
            : "group-hover:bg-surface-neutral-hovered group-hover:text-icon-hovered"
        )}
        role="button"
        tabIndex={-1}
        aria-disabled={disabled || isDecrementDisabled}
        data-testid="decrement"
        onClick={decrement}
      >
        <StepperIcon.caretDownMinor
          className={cn(
            "rounded-level-3",
            !isDecrementDisabled && "active:bg-surface-neutral-pressed"
          )}
        />
      </div>
    </div>
  );
};
