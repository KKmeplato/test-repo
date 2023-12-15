import { Button } from "components/Button";
import { IconButton } from "components/IconButton";
import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { BannerIcon } from "./components/BannerIcon";
import type { BannerProps } from "./types";
import { bannerVariants } from "./utils";

export const Banner = ({
  hideIcon = false,
  isInsideCard = false,
  title,
  children,
  primaryAction,
  secondaryAction,
  variant = "default",
  className,
  onDismiss,
  ...rest
}: BannerProps) => {
  return (
    <div
      className={cn(
        bannerVariants({ variant, className }),
        isInsideCard ? "w-full rounded-level-2" : "w-full rounded-level-1"
      )}
      role={
        variant === "warning" || variant === "critical" ? "alert" : "status"
      }
      {...rest}
    >
      <div className="inline-flex flex-1 grow items-start gap-2 text">
        {!hideIcon && <BannerIcon variant={variant} />}

        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
          {!isInsideCard && title && (
            <div className="text-sm font-semibold text">{title}</div>
          )}
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            {children && (
              <div className="self-stretch text-xs font-normal text">
                {children}
              </div>
            )}

            <div className="flex items-center gap-2">
              {primaryAction && (
                <Button
                  variant={variant === "default" ? "basic" : variant}
                  size="small"
                  outline
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant={variant === "default" ? "basic" : variant}
                  size="small"
                  plain
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {onDismiss && (
        <IconButton
          variant={"default"}
          accessibilityLabel="Close button"
          onClick={onDismiss}
        >
          <Icon.close className="h-5 w-5 text-icon" />
        </IconButton>
      )}
    </div>
  );
};
