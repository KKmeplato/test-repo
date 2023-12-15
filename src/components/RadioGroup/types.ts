import * as RadixRadioGroup from "@radix-ui/react-radio-group";

export interface RadioGroupItemProps
  extends RadixRadioGroup.RadioGroupItemProps {
  label: React.ReactNode;
  hint?: React.ReactNode;
}

export interface RadioGroupProps
  extends Omit<
    RadixRadioGroup.RadioGroupProps,
    "onValueChange" | "onChange" | "asChild"
  > {
  items: RadioGroupItemProps[];
  onChange?: (value: string) => void;
}
