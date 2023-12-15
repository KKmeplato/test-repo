import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { useId } from "react";

import { RadioGroupItemProps } from "../types";

export const RadioGroupItem = ({
  id,
  disabled,
  hint,
  label,
  ...rest
}: RadioGroupItemProps) => {
  const generatedId = useId();
  const itemId = id || generatedId;

  return (
    <div className="inline-flex flex-col items-start">
      <RadixRadioGroup.Item
        id={itemId}
        className="group peer inline-flex items-center gap-2 py-1 focus-visible:outline-none focus-visible:ring-0"
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      >
        <RadixRadioGroup.Indicator
          className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-default bg-interactive-plain after:block after:h-[10px] after:w-[10px] after:rounded-full after:content-[''] group-hover:border-hovered group-hover:bg-interactive-plain-hovered group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-focus group-focus-visible:ring-1 group-focus-visible:ring-focus group-focus-visible:ring-offset-1 group-disabled:border-disabled group-disabled:bg-surface-disabled data-[state=checked]:border-interactive-primary data-[state=checked]:after:bg-interactive-primary group-hover:data-[state=checked]:after:bg-interactive-primary-hovered group-enabled:group-hover:data-[state=checked]:border-interactive-primary-hovered group-disabled:data-[state=checked]:border-[5px] group-disabled:data-[state=checked]:after:hidden md:m-[1px] md:h-[18px] md:w-[18px] md:after:h-[8px] md:after:w-[8px]"
          forceMount
        />
        <label
          htmlFor={itemId}
          className="text-sm text group-enabled:cursor-pointer group-disabled:text-disabled"
          aria-disabled={disabled}
        >
          {label}
        </label>
      </RadixRadioGroup.Item>
      {hint && (
        <p
          className="flex items-start ps-7 text-sm text-subdued peer-disabled:text-disabled"
          aria-disabled={disabled}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

RadioGroupItem.displayName = "RadioGroupItem";
