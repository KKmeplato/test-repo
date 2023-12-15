import { render } from "@testing-library/react";

import { IconButton } from "components/IconButton";

const DummyIcon = () => <>SVGIcon</>;

describe("<IconButton />", () => {
  test("renders a button with an icon", async () => {
    const { getByRole, getByText } = render(
      <IconButton accessibilityLabel="Click me" variant="default">
        {<DummyIcon />}
      </IconButton>
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText("SVGIcon")).toBeInTheDocument();
    expect(getByText("Click me")).toBeInTheDocument();
    expect(getByRole("button")).not.toHaveAttribute("disabled");
  });

  test("renders a disabled button based on the `disabled` prop", async () => {
    const { getByRole } = render(
      <IconButton accessibilityLabel="Click me" disabled>
        {<DummyIcon />}
      </IconButton>
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toHaveAttribute("disabled");
  });
});
