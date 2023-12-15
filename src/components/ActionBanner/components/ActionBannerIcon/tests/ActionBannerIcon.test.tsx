import { render } from "@testing-library/react";

import { ActionBannerIconProps } from "../../../types";
import { ActionBannerIcon } from "../ActionBannerIcon";

describe("<ActionBannerIcon />", () => {
  it.each<ActionBannerIconProps>([
    {
      variant: "default"
    },
    {
      variant: "critical"
    },
    {
      variant: "upgrade"
    },
    {
      variant: "warning"
    },
    {
      variant: "highlight"
    }
  ])("renders action banner icons (variant:$variant)", (props) => {
    const result = render(<ActionBannerIcon {...props} />);
    expect(result).toMatchSnapshot();
  });
});
