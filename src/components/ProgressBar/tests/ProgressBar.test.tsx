import { render } from "@testing-library/react";
import { expect } from "vitest";

import { ProgressBar } from "../ProgressBar";
import { ProgressBarProps } from "../types";

describe("<ProgressBar />", () => {
  it.each<Pick<ProgressBarProps, "variant" | "size">>([
    { variant: "highlight", size: "small" },
    { variant: "highlight", size: "medium" },
    { variant: "highlight", size: "large" },
    { variant: "success", size: "small" },
    { variant: "success", size: "medium" },
    { variant: "success", size: "large" },
    { variant: "critical", size: "small" },
    { variant: "critical", size: "medium" },
    { variant: "critical", size: "large" },
    { variant: "primary", size: "small" },
    { variant: "primary", size: "medium" },
    { variant: "primary", size: "large" }
  ])("renders with $variant / $size", (props) => {
    const result = render(
      <ProgressBar
        value={80}
        max={100}
        accessibilityLabel="ProgressBar"
        {...props}
      />
    );

    expect(result).toMatchSnapshot();
  });

  it("renders a progress bar with the currect progress", () => {
    const { getByRole } = render(
      <ProgressBar value={80} max={100} accessibilityLabel="ProgressBar" />
    );

    expect(
      getByRole("progressbar", { name: "ProgressBar" })
    ).toBeInTheDocument();
    expect(getByRole("progressbar", { name: "ProgressBar" })).toHaveAttribute(
      "aria-valuenow",
      "80"
    );
  });
});
