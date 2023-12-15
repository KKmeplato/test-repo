import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";

import { Checkbox } from "../Checkbox";
import { CheckState, CheckboxProps } from "../types";

describe("<Checkbox />", () => {
  it.each<CheckboxProps>([
    { value: "confirmed", name: "confirmed", label: "I agree to TOS" },
    {
      value: "confirmed",
      name: "confirmed",
      label: "I agree to TOS",
      disabled: true
    },
    {
      value: "confirmed",
      name: "confirmed",
      label: "I agree to TOS",
      error: true
    },
    {
      value: "confirmed",
      name: "confirmed",
      label: "I agree to TOS",
      checked: true
    },
    {
      value: "confirmed",
      name: "confirmed",
      label: "I agree to TOS",
      checked: "indeterminate"
    },
    {
      value: "confirmed",
      name: "confirmed",
      label: "I agree to TOS",
      checked: true,
      disabled: true
    }
  ])("renders with ", (props) => {
    const result = render(<Checkbox {...props} />);

    expect(result).toMatchSnapshot();
  });

  it.each([
    {
      value: "confirmed",
      name: "terms",
      label: "I agree to TOS",
      checked: false
    },
    {
      value: "confirmed",
      name: "terms",
      label: "I agree to TOS",
      checked: true
    }
  ])("onChange invoked", async (props) => {
    const mockOnChange = vi.fn<[CheckState]>();

    const { getByTestId, asFragment } = render(
      <Checkbox
        onChange={mockOnChange}
        {...props}
        data-testid="test-checkbox"
      />
    );

    const checkbox = getByTestId("test-checkbox") as HTMLButtonElement;
    assert(checkbox, "checkbox is null");

    await userEvent.click(checkbox);

    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(!props.checked);
    expect(asFragment()).toMatchSnapshot();
  });

  it("onChange not invoked when disabled", async () => {
    const mockOnChange = vi.fn<[CheckState]>();

    const { getByTestId, asFragment } = render(
      <Checkbox
        onChange={mockOnChange}
        value="confirmed"
        name="confirmed"
        label="I agree to TOS"
        checked={false}
        disabled={true}
        data-testid="test-checkbox"
      />
    );

    const checkbox = getByTestId("test-checkbox") as HTMLButtonElement;
    assert(checkbox, "checkbox is null");

    await userEvent.click(checkbox);

    expect(mockOnChange).toBeCalledTimes(0);
    expect(asFragment()).toMatchSnapshot();
  });
});
