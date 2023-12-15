import { cn } from "lib/utils";

import { BadgeAtom } from "./components/BadgeAtom";
import { BadgeProps } from "./types";
import { badgeVariants } from "./utils";

export const Badge = ({
  as,
  children,
  className,
  progress,
  variant,
  prefixIcon,
  ...rest
}: BadgeProps) => {
  if (as === "dot") {
    return (
      <BadgeAtom
        progress={progress}
        variant={variant}
        className={className}
        {...rest}
      />
    );
  }

  if (as === "notification") {
    return (
      <span
        className={cn(
          "flex min-w-[1.3125rem] items-center justify-center gap-1 rounded-level-0 border border-solid px-1 py-0.5",
          badgeVariants({ variant }),
          className
        )}
        {...rest}
      >
        {progress && (
          <BadgeAtom
            progress={progress}
            variant={variant}
            className="p-0 !text"
          />
        )}
        <span
          className={cn(
            "truncate text-[0.625rem] font-bold leading-[0.875rem] tracking-[0.03125rem] text [&>*]:truncate"
          )}
        >
          {children}
        </span>
      </span>
    );
  }

  // Default badge
  let icon = prefixIcon;
  if (!icon && progress) {
    icon = (
      <BadgeAtom
        progress={progress}
        variant={variant}
        className="shrink-0 p-0 !text"
      />
    );
  }

  return (
    <span
      className={cn(
        "flex min-w-[1.875rem] items-center gap-1 rounded-level-0 border border-solid px-2 py-0.5",
        badgeVariants({ variant }),
        prefixIcon && "min-w-[3.0625rem] gap-0.5 py-0 pl-[0.3125rem] pr-2",
        className
      )}
      {...rest}
    >
      {icon}
      <span className="truncate text-xs font-semibold text [&>*]:truncate">
        {children}
      </span>
    </span>
  );
};
