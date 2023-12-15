import { forwardRef } from "react";

import { IconButton } from "components/IconButton";
import { cn } from "lib/utils";

import { FilterBadgeProps } from "./types";
import { getFilterBadgeIcon } from "./utils";

export const FilterBadge = forwardRef<HTMLButtonElement, FilterBadgeProps>(
  (
    { type, active, direction, disabled, onClick, children, ...rest },
    forwardRef
  ) => {
    const BadgeIcon = getFilterBadgeIcon(
      type,
      type === "disclosure" ? direction : undefined
    );

    return type === "toggle" ? (
      <button
        className={cn(
          "inline-flex items-start justify-start gap-1 rounded-level-negative-2 border border-default bg-surface px-4 py-1 hover:border-hovered hover:bg-surface-hovered active:border-pressed active:bg-surface-pressed disabled:border-disabled disabled:bg-surface-disabled disabled:text-disabled sm:px-2 sm:py-0.5",
          "text-sm font-medium leading-tight text",
          "enabled:focus-visible:outline enabled:focus-visible:outline-1 enabled:focus-visible:outline-focus enabled:focus-visible:ring-1 enabled:focus-visible:ring-focus enabled:focus-visible:ring-offset-1",
          {
            "bg-interactive-primary text-on-interactive hover:border-subdued hover:bg-interactive-primary-hovered focus-visible:bg-interactive-primary-pressed active:border-pressed active:bg-interactive-primary-pressed":
              active
          }
        )}
        disabled={disabled}
        onClick={onClick}
        ref={forwardRef}
        {...rest}
      >
        {children}
      </button>
    ) : (
      <div className="relative inline-flex items-center justify-center">
        <div className="inline-flex items-center justify-start rounded-level-negative-2 bg-surface">
          <div
            className={cn(
              "z-0 inline-flex items-center justify-start gap-1 rounded-level-negative-2 outline-dashed outline-1  outline-offset-0 outline-outline-default",
              {
                "hover:outline-outline-hovered active:outline-outline-pressed [&:has(button:first-child:focus-visible)]:[&:first-child]:outline-outline-pressed":
                  type !== "remove"
              },
              {
                "cursor-default py-1 pl-3 pr-2 sm:py-0.5 sm:pl-2 sm:pr-1":
                  type === "remove"
              }
            )}
          >
            {type === "remove" ? (
              <>
                <span className="text-sm font-medium leading-tight text">
                  {children}
                </span>

                <span className="z-20 inline-flex items-center">
                  <IconButton
                    accessibilityLabel="remove icon"
                    disabled={disabled}
                    onClick={onClick}
                  >
                    {BadgeIcon && <BadgeIcon className="h-5 w-5 text-icon" />}
                  </IconButton>
                </span>
              </>
            ) : (
              <button
                className={cn(
                  "inline-flex items-center justify-start gap-1 text-sm font-medium leading-tight text focus:outline-none",
                  "rounded-level-negative-2 hover:bg-surface-hovered  active:bg-surface-pressed",
                  !BadgeIcon
                    ? "h-6 px-2"
                    : "py-1 pl-3 pr-2 sm:py-0.5 sm:pl-2 sm:pr-1",
                  "enabled:focus-visible:outline enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-0  enabled:focus-visible:outline-focus enabled:focus-visible:ring-2 enabled:focus-visible:ring-focus enabled:focus-visible:ring-offset-1"
                )}
                onClick={onClick}
                ref={forwardRef}
                {...rest}
              >
                {children}
                {BadgeIcon && <BadgeIcon className="h-5 w-5 text-icon" />}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

FilterBadge.displayName = "FilterBadge";
