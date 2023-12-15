import { Button } from "components/Button";
import { cn } from "lib/utils";

import { ActionBannerIcon } from "./components/ActionBannerIcon";
import type { ActionBannerProps } from "./types";
import { actionBannerChildrenVariants, actionBannerVariants } from "./utils";

export const ActionBanner = ({
  variant = "default",
  action,
  children,
  ...rest
}: ActionBannerProps) => {
  return (
    <div
      className={cn(
        actionBannerVariants({ variant }),
        "w-full items-center rounded-level-2 p-1 pr-2.5 shadow-[0px_0px_0px_1px]"
      )}
      role={
        variant === "warning" || variant === "critical" ? "alert" : "status"
      }
      {...rest}
    >
      <div className="inline-flex flex-1 grow items-center gap-2 text">
        <div className="inline-flex h-5 w-5 flex-col items-center justify-center">
          <ActionBannerIcon variant={variant} />
        </div>

        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1">
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div className={actionBannerChildrenVariants({ variant })}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <Button
        variant={
          variant === "default"
            ? "primary"
            : variant === "upgrade"
              ? "basic"
              : variant
        }
        size="small"
        plain
        onClick={action.onClick}
      >
        {action.label}
      </Button>
    </div>
  );
};
