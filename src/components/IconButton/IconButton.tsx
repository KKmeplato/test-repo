import { forwardRef } from "react";

import { cn } from "lib/utils";

import { IconButtonProps } from "./types";
import { iconButtonVariants } from "./utils";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      accessibilityLabel,
      active,
      children,
      className,
      variant = "default",
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(
          iconButtonVariants({ variant }),
          active && "bg-surface-neutral-pressed",
          className
        )}
        {...rest}
      >
        {children}
        <span className="sr-only">{accessibilityLabel}</span>
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
