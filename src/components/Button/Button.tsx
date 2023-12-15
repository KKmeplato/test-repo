import { forwardRef } from "react";

import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { ButtonProps } from "./types";
import {
  buttonVariants,
  outlineButtonVariants,
  plainButtonVariants
} from "./utils";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "basic",
      plain = false,
      outline = false,
      size = "medium",
      disabled,
      className,
      icon,
      disclosure,
      loading = false,
      accessibilityLabel,
      onClick,
      ...rest
    },
    forwardedRef
  ) => {
    let buttonClasses = "";
    if (plain) {
      buttonClasses = plainButtonVariants({ variant, size, className });
    } else if (outline) {
      buttonClasses = outlineButtonVariants({ variant, size, className });
    } else {
      buttonClasses = buttonVariants({ variant, size, className });
    }

    return (
      <button
        data-size={size}
        data-variant={variant}
        data-plain={plain}
        data-outline={outline}
        className={cn(
          buttonClasses,
          {
            "disabled:text-transparent": loading
          },
          {
            "pr-2": disclosure && size === "small" && !plain,
            "pr-3": disclosure && size === "medium" && !plain,
            "pr-5": disclosure && size === "large" && !plain
          },
          {
            "pl-2": icon && size === "small" && !plain,
            "pl-3": icon && size === "medium" && !plain,
            "pl-5": icon && size === "large" && !plain
          },
          className
        )}
        ref={forwardedRef}
        disabled={disabled || loading}
        onClick={onClick}
        aria-busy={loading || undefined}
        aria-disabled={loading || disabled}
        {...rest}
      >
        {loading && (
          <Icon.loading
            className={
              "absolute inline-flex h-5 w-5 animate-spin flex-col items-center justify-center rounded-sm text-interactive-highlight"
            }
          />
        )}
        <>
          {icon && (
            <span
              className={cn(
                "inline-flex h-5 w-5 flex-col items-center justify-center rounded-sm",
                {
                  "text-icon-disabled": disabled,
                  "text-transparent": loading
                }
              )}
            >
              {icon}
            </span>
          )}
          {children}
          {disclosure && (
            <Icon.sort
              className={cn(
                "inline-flex h-5 w-5 flex-col items-center justify-center rounded-sm p-0.5",
                {
                  "rotate-180": disclosure === "up"
                }
              )}
            />
          )}
          {!children && accessibilityLabel && (
            <span className="sr-only">{accessibilityLabel}</span>
          )}
        </>
      </button>
    );
  }
);

Button.displayName = "Button";
