import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

import { Size } from "lib/types";

import { stepperInputVariants, stepperVariants } from "./utils";

export interface StepperProps
  extends Omit<ComponentPropsWithoutRef<"div">, "onChange">,
    VariantProps<typeof stepperVariants> {
  disabled?: boolean;
  max?: number;
  min?: number;
  size?: Exclude<Size, "large">;
  value: number;
  onChange?: (value: number) => void;
}

export interface StepperInputProps
  extends Omit<
      ComponentPropsWithoutRef<"input">,
      "onChange" | "size" | "type" | "min" | "max"
    >,
    VariantProps<typeof stepperInputVariants> {
  min: number;
  max: number;
  size?: Exclude<Size, "large">;
  onChange?: (value: number) => void;
}
