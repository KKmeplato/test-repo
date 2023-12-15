import { forwardRef } from "react";

import { IconProps } from "components/icons";

export const BadgeIcon = {
  empty: forwardRef<SVGSVGElement, IconProps>((rest, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      ref={ref}
      {...rest}
    >
      <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )),
  full: forwardRef<SVGSVGElement, IconProps>((rest, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      ref={ref}
      {...rest}
    >
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  )),
  partial: forwardRef<SVGSVGElement, IconProps>((rest, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 8"
      fill="none"
      ref={ref}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM2 4H6C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4Z"
        fill="currentColor"
      />
    </svg>
  ))
};

BadgeIcon.empty.displayName = "BadgeIcon.empty";
BadgeIcon.full.displayName = "BadgeIcon.full";
BadgeIcon.partial.displayName = "BadgeIcon.partial";
