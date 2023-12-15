import { cn } from "lib/utils";

import { BadgeIcon } from "../BadgeIcon";
import { BadgeAtomProps } from "./types";
import { badgeAtomVariants } from "./utils";

export const BadgeAtom = ({
  className,
  progress,
  variant = "default",
  ...rest
}: BadgeAtomProps) => {
  let icon = <></>;
  switch (progress) {
    case "partial":
      icon = <BadgeIcon.partial className="h-2 w-2" />;
      break;
    case "incomplete":
      icon = <BadgeIcon.empty className="h-2 w-2" />;
      break;
    default:
      icon = <BadgeIcon.full className="h-2 w-2" />;
      break;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-level-0 p-0.5",
        badgeAtomVariants({ variant }),
        className
      )}
      {...rest}
    >
      {icon}
    </span>
  );
};
