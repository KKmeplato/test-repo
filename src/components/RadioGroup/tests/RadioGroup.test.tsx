import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { RadioGroup } from "../RadioGroup";
import { RadioGroupItemProps, RadioGroupProps } from "../types";

describe("<RadioGroup />", () => {
  const items: RadioGroupItemProps[] = [
    { label: <b>Email</b>, value: "email" },
    { label: "Phone", value: "phone" },
    { id: "content-fax", label: "Fax", value: "fax", disabled: true }
  ];

  it.each<RadioGroupProps>([
    { items },
    { items, orientation: "horizontal" },
    { items, disabled: true },
    { items, value: "phone" },
    { items, required: true }
  ])(
    "renders with $items.length items, orientation:$orientation, disabled:$disabled, value:$value, required:$required",
    (props) => {
      const result = render(<RadioGroup name="contact" {...props} />);

      expect(result).toMatchSnapshot();
    }
  );

  it("onChange invoked", async () => {
    const mockOnChange = vi.fn<[string]>();

    const { getByTestId, asFragment } = render(
      <RadioGroup
        name="contact"
        data-testid="test-contact"
        items={[
          {
            label: "Email",
            value: "email",
            hint: (
              <>
                Please provide your <b>Email</b>
              </>
            )
          },
          { label: "Phone", value: "phone" }
        ]}
        onChange={mockOnChange}
      />
    );

    const phoneButton =
      getByTestId("test-contact").querySelector<HTMLButtonElement>(
        "[value='phone']"
      );
    assert(phoneButton, "phoneButton is null");
    const emailButton =
      getByTestId("test-contact").querySelector<HTMLButtonElement>(
        "[value='email']"
      );
    assert(emailButton, "emailButton is null");

    await userEvent.click(phoneButton);
    await userEvent.click(emailButton);

    expect(mockOnChange).toBeCalledTimes(2);
    expect(mockOnChange).toHaveBeenCalledWith("phone");
    expect(mockOnChange).toHaveBeenCalledWith("email");
    expect(asFragment()).toMatchSnapshot();
  });
});
