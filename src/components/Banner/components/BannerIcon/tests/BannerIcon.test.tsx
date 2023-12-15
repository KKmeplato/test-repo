import { render } from "@testing-library/react";

import { BannerIconProps } from "../../../types";
import { BannerIcon } from "../BannerIcon";

describe("<BannerIcon />", () => {
  it.each<BannerIconProps>([
    {
      variant: "default"
    },
    {
      variant: "critical"
    },
    {
      variant: "success"
    },
    {
      variant: "warning"
    },
    {
      variant: "highlight"
    }
  ])("renders banner icons (variant:$variant)", (props) => {
    const result = render(<BannerIcon {...props} />);
    expect(result).toMatchSnapshot();
  });
});
