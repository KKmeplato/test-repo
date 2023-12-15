import { forwardRef } from "react";

import { IconProps } from "components/icons";

export const StepperIcon = {
  caretDownMinor: forwardRef<SVGSVGElement, IconProps>((rest, ref) => (
    <svg
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...rest}
    >
      <path
        d="M12.0983 5L5.90169 5C5.15069 5 4.73001 5.75351 5.19399 6.2676L8.29231 9.70055C8.65265 10.0998 9.34735 10.0998 9.70769 9.70055L12.806 6.2676C13.27 5.75351 12.8493 5 12.0983 5Z"
        fill="currentColor"
      />
    </svg>
  )),
  caretUpMinor: forwardRef<SVGSVGElement, IconProps>((rest, ref) => (
    <svg
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...rest}
    >
      <path
        d="M5.90169 9H12.0983C12.8493 9 13.27 8.24649 12.806 7.7324L9.70769 4.29945C9.34735 3.90018 8.65265 3.90018 8.29231 4.29945L5.19399 7.7324C4.73001 8.24649 5.15069 9 5.90169 9Z"
        fill="currentColor"
      />
    </svg>
  ))
};

StepperIcon.caretDownMinor.displayName = "StepperIcon.caretDownMinor";
StepperIcon.caretUpMinor.displayName = "StepperIcon.caretUpMinor";
