import * as RadixCheckbox from "@radix-ui/react-checkbox";

export type CheckState = RadixCheckbox.CheckedState;

export interface CheckboxProps
  extends Omit<
    RadixCheckbox.CheckboxProps,
    "aria-invalid" | "value" | "onCheckedChange" | "onChange" | "asChild"
  > {
  error?: boolean;
  hint?: string;
  label?: React.ReactNode;
  value: string;
  onChange?: (value: CheckState) => void;
}
