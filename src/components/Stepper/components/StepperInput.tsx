import { forwardRef } from "react";

import { cn } from "lib/utils";

import { StepperInputProps } from "../types";
import { stepperInputVariants } from "../utils";

export const StepperInput = forwardRef<HTMLInputElement, StepperInputProps>(
  ({ className, size = "medium", onChange, ...rest }, forwardedRef) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number.parseInt(e.target.value);

      // Don't trigger onChange if the value is out of bounds
      if (newValue < rest.min) return;
      if (newValue > rest.max) return;

      onChange?.(newValue);
    };

    return (
      <input
        type="number"
        ref={forwardedRef}
        className={cn(stepperInputVariants({ size }), className)}
        onChange={handleChange}
        {...rest}
      />
    );
  }
);

StepperInput.displayName = "StepperInput";
