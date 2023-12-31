import { SVGProps, forwardRef } from "react";

import { Icon as AllIcons } from "../icons";

/**
 * Subset of the icons used in the Checkbox component.
 */
export const Icon = {
  checked: forwardRef<
    SVGSVGElement,
    Omit<Partial<SVGProps<SVGSVGElement>>, "ref">
  >((props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72318 0.237414C10.0707 0.574491 10.0942 1.14584 9.77561 1.51356L4.40976 7.70711C4.25243 7.88871 4.03181 7.99443 3.79903 7.99979C3.56625 8.00514 3.3415 7.90965 3.17686 7.73545L0.250031 4.63868C-0.0833435 4.28595 -0.0833435 3.71406 0.250031 3.36133C0.583405 3.00859 1.12391 3.00859 1.45729 3.36133L3.75367 5.79105L8.51706 0.292899C8.83564 -0.0748211 9.37564 -0.0996624 9.72318 0.237414Z"
        fill="currentColor"
      />
    </svg>
  )),
  indeterminate: AllIcons.subtract
};

Icon.checked.displayName = "Icon.checked";
Icon.indeterminate.displayName = "Icon.indeterminate";
