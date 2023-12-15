import * as RadixRadioGroup from "@radix-ui/react-radio-group";

import { cn } from "lib/utils";

import { RadioGroupItem } from "./components/RadioGroupItem";
import { RadioGroupProps } from "./types";

export const RadioGroup = ({
  className,
  items,
  orientation = "vertical",
  onChange,
  ...rest
}: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root
      orientation={orientation}
      onValueChange={onChange}
      {...rest}
      className={cn(
        "flex flex-col",
        orientation && orientation === "horizontal" && "flex-row gap-6",
        className
      )}
    >
      {items?.map((item, index) => <RadioGroupItem key={index} {...item} />)}
    </RadixRadioGroup.Root>
  );
};

RadioGroup.displayName = "RadioGroup";
