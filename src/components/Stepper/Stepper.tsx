import { forwardRef } from "react";

import { Button } from "components/Button";
import { Icon } from "components/icons";
import { useStepperControl } from "hooks";
import { cn } from "lib/utils";

import { StepperInput } from "./components/StepperInput";
import { StepperProps } from "./types";
import { stepperVariants } from "./utils";

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      disabled,
      max = 9999,
      min = 0,
      size = "medium",
      value,
      onChange,
      ...rest
    },
    forwardedRef
  ) => {
    const { increment, decrement, isIncrementDisabled, isDecrementDisabled } =
      useStepperControl({
        value,
        min,
        max,
        onChange
      });

    const incrementDisabled = isIncrementDisabled || disabled;
    const decrementDisabled = isDecrementDisabled || disabled;

    return (
      <div
        className={cn(stepperVariants({ size }), className)}
        ref={forwardedRef}
        {...rest}
      >
        <Button
          id="stepper-subtract"
          variant="primary"
          size={size}
          icon={<Icon.subtract />}
          disabled={decrementDisabled}
          {...(decrementDisabled && { "aria-disabled": true })}
          className={cn(
            "min-w-0",
            size === "small" && "p-1",
            size === "medium" && "p-2"
          )}
          accessibilityLabel="Decrement value"
          onClick={decrement}
        />
        <StepperInput
          id="stepper-input"
          value={value}
          max={max}
          min={min}
          size={size}
          disabled={disabled}
          {...(disabled && { "aria-disabled": true })}
          onChange={onChange}
        />
        <Button
          id="stepper-add"
          variant="primary"
          size={size}
          icon={<Icon.add />}
          disabled={incrementDisabled}
          {...(incrementDisabled && { "aria-disabled": true })}
          className={cn(
            "min-w-0",
            size === "small" && "p-1",
            size === "medium" && "p-2"
          )}
          accessibilityLabel="Increment value"
          onClick={increment}
        />
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
