import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { StepperControlProps } from "../../../types";
import { StepperControl } from "../StepperControl";

const mockOnChange = vi.fn();

describe("<StepperControl />", () => {
  it.each<StepperControlProps>([
    { min: 0, max: 10, value: 5, disabled: false },
    { min: 0, max: 10, value: 5, disabled: false }
  ])("renders when min: $min, max: $max, disabled: $disabled", (props) => {
    const component = render(<StepperControl {...props} />);

    expect(component).toMatchSnapshot();
  });

  it("has increment and decrement button enabled", () => {
    const { getByTestId } = render(
      <StepperControl value={2} min={0} max={5} />
    );
    const incrementButton = getByTestId("increment");
    const decrementButton = getByTestId("decrement");

    expect(incrementButton).toHaveAttribute("aria-disabled", "false");
    expect(decrementButton).toHaveAttribute("aria-disabled", "false");
  });

  it("disables increment button when max value has reached", () => {
    const { getByTestId } = render(
      <StepperControl value={5} min={0} max={5} />
    );
    const incrementButton = getByTestId("increment");

    expect(incrementButton).toHaveAttribute("aria-disabled", "true");
  });

  it("disables decrement button when min value has reached", () => {
    const { getByTestId } = render(
      <StepperControl value={0} min={0} max={5} />
    );
    const incrementButton = getByTestId("increment");

    expect(incrementButton).toHaveAttribute("aria-disabled", "false");
  });

  it("increments the value when clicking increment spinner button", async () => {
    const { getByTestId } = render(
      <StepperControl value={0} min={0} max={5} onChange={mockOnChange} />
    );
    const incrementButton = getByTestId("increment");

    await userEvent.click(incrementButton);

    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it("decrements the value when clicking decrement spinner button", async () => {
    const { getByTestId } = render(
      <StepperControl value={5} min={0} max={5} onChange={mockOnChange} />
    );
    const decrementButton = getByTestId("decrement");

    await userEvent.click(decrementButton);

    expect(mockOnChange).toHaveBeenCalledWith(4);
  });
});
