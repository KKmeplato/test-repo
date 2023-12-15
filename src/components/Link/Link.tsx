import { ForwardedRef, forwardRef } from "react";

import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { LinkProps } from "./types";
import { linkVariants } from "./utils";

export const Link = forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>(
  (props, forwardedRef) => {
    const { children, className, disabled, external, size } = props;
    if (props.as === "button") {
      const buttonProps = {
        ...props,
        "aria-disabled": disabled || undefined,
        as: undefined,
        className: cn(
          linkVariants(props),
          "focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1",
          className
        ),
        disabled,
        variant: undefined,
        external: undefined,
        size: undefined,
        monochrome: undefined
      };
      return (
        <button
          type="button"
          ref={forwardedRef as ForwardedRef<HTMLButtonElement>}
          {...buttonProps}
        >
          {children}
          {external && (
            <div
              className={cn(
                "h-5 w-5",
                size === "small" && "h-[0.875rem] w-[0.875rem]"
              )}
            >
              <Icon.externalLink />
            </div>
          )}
        </button>
      );
    }

    const anchorProps = {
      ...props,
      "aria-disabled": disabled || undefined,
      as: undefined,
      className: cn(
        linkVariants(props),
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus-link focus-visible:ring-1 focus-visible:ring-focus-link",
        className
      ),
      rel: external ? "noopener noreferrer" : undefined,
      target: external ? "_blank" : undefined,
      variant: undefined,
      external: undefined,
      size: undefined,
      monochrome: undefined
    };
    return (
      <a ref={forwardedRef as ForwardedRef<HTMLAnchorElement>} {...anchorProps}>
        {children}
        {external && (
          <div
            className={cn(
              "h-5 w-5",
              size === "small" && "h-[0.875rem] w-[0.875rem]"
            )}
          >
            <Icon.externalLink />
          </div>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";