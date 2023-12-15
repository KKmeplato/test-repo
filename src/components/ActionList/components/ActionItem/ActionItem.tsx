import React from "react";

import { cn } from "lib/utils";

import { ActionItemProps } from "../../types";
import { iconVariants, itemVariants } from "./utils";

export const ActionItem = React.forwardRef<HTMLButtonElement, ActionItemProps>(
  (
    {
      children,
      prefixIcon,
      suffixIcon,
      active,
      variant,
      sideHelpText,
      bottomHelpText,
      ...props
    },
    forwardRef
  ) => {
    return (
      <div className="relative px-2">
        {active && !variant && (
          <div className="absolute left-0 h-full w-[3px] rounded bg-interactive-primary" />
        )}
        <button
          className={cn(itemVariants({ variant, active }), {
            "items-center": !bottomHelpText
          })}
          ref={forwardRef}
          {...props}
        >
          <span className="flex gap-4">
            {prefixIcon && (
              <div className={iconVariants({ variant, active })}>
                {prefixIcon}
              </div>
            )}

            {sideHelpText && (
              <span className="text-sm text-subdued">{sideHelpText}</span>
            )}

            <span className="flex flex-col items-start text-sm font-normal">
              {children}
              {bottomHelpText && (
                <span className="text-subdued">{bottomHelpText}</span>
              )}
            </span>
          </span>

          {suffixIcon && (
            <span className={iconVariants({ variant, active })}>
              {suffixIcon}
            </span>
          )}
        </button>
      </div>
    );
  }
);

ActionItem.displayName = "ActionItem";
