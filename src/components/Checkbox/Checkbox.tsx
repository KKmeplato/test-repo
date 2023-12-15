import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { useId } from "react";

import { cn } from "lib/utils";

import { Icon } from "./icons";
import { CheckboxProps } from "./types";

export const Checkbox = ({
  id,
  checked,
  className,
  disabled,
  error,
  hint,
  label,
  onChange,
  ...rest
}: CheckboxProps) => {
  const generatedId = useId();
  const itemId = id || generatedId;

  const isIndeterminate = checked === "indeterminate";
  const isChecked = checked && !isIndeterminate;
  const isUnchecked = !isChecked && !isIndeterminate;

  return (
    <div className="inline-flex flex-col items-start">
      <RadixCheckbox.Root
        {...rest}
        id={itemId}
        checked={checked}
        disabled={disabled}
        {...(error && { "aria-invalid": true, "data-error": true })}
        onCheckedChange={onChange}
        className={cn(
          "group flex items-start gap-2 py-1 focus-visible:outline-none focus-visible:ring-0",
          className
        )}
      >
        <RadixCheckbox.Indicator
          className={cn(
            "relative m-[1px] h-[18px] min-w-[18px] rounded-level-3 border-2 border-default bg-interactive-plain",
            "group-focus-visible:outline group-focus-visible:outline-1 group-focus-visible:outline-focus group-focus-visible:ring-1 group-focus-visible:ring-focus group-focus-visible:ring-offset-1",
            !disabled &&
              "group-hover:shadow-sm group-hover:shadow-[rgb(0,0,0,0.08)]",
            isIndeterminate &&
              "group-hover:border-hovered group-hover:bg-interactive-plain-hovered",
            isIndeterminate &&
              !disabled &&
              "border-interactive-primary bg-interactive-primary group-hover:border-interactive-primary-hovered group-hover:bg-interactive-primary-hovered",
            isChecked && "border-0 group-hover:border-hovered",
            isChecked &&
              !disabled &&
              "border-interactive-primary bg-interactive-primary group-hover:border-interactive-primary-hovered group-hover:bg-interactive-primary-hovered",
            disabled && "border-disabled bg-surface-disabled",
            disabled &&
              isChecked &&
              "border-interactive-disabled bg-interactive-disabled",
            disabled &&
              isIndeterminate &&
              "border-interactive-disabled group-hover:border-interactive-disabled group-hover:bg-interactive-disabled",
            !disabled &&
              error &&
              "border-critical bg-surface-critical group-hover:bg-surface-critical-hovered",
            !disabled &&
              error &&
              isIndeterminate &&
              "border-interactive-critical group-hover:border-interactive-critical-hovered group-hover:bg-interactive-critical-hovered",
            !disabled &&
              error &&
              isChecked &&
              "bg-interactive-critical group-hover:bg-interactive-critical-hovered"
          )}
          forceMount
        >
          {isIndeterminate ? (
            <Icon.indeterminate
              aria-hidden
              className={cn(
                "bg-interactive-primary text-icon-on-interactive",
                !disabled && "group-hover:bg-interactive-primary-hovered",
                disabled && "bg-interactive-disabled text-icon-disabled",
                !disabled &&
                  error &&
                  "bg-interactive-critical group-hover:bg-interactive-critical-hovered"
              )}
            />
          ) : (
            <Icon.checked
              aria-hidden
              className={cn(
                "absolute left-[4px] top-[5px] hidden text-icon-on-interactive",
                isChecked && "block",
                isUnchecked && "group-hover:left-[2px] group-hover:top-[3px]",
                !disabled &&
                  "group-hover:block group-hover:text-interactive-plain-hovered",
                disabled && "text-icon-disabled"
              )}
            />
          )}
        </RadixCheckbox.Indicator>
        {label && (
          <label
            htmlFor={itemId}
            className={cn(
              "text-left text-sm text",
              !disabled && "group-hover:cursor-pointer",
              disabled && "text-disabled"
            )}
            aria-disabled={disabled}
          >
            {label}
          </label>
        )}
      </RadixCheckbox.Root>
      {hint && (
        <p
          className={cn(
            "flex items-start ps-7 text-sm text-subdued",
            disabled && "text-disabled"
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
