import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Stepper } from "../Stepper";

describe("<Stepper />", () => {
  test("renders correctly", () => {
    const component = render(<Stepper value={42} />);

    expect(component).toMatchSnapshot();
  });

  test("disabled", () => {
    const component = render(<Stepper value={42} disabled />);

    expect(component).toMatchSnapshot();
  });

  test("default min value reached", () => {
    const component = render(<Stepper value={0} />);

    expect(component).toMatchSnapshot();
  });

  test("default max value reached", () => {
    const component = render(<Stepper value={9999} />);

    expect(component).toMatchSnapshot();
  });

  test("custom min value reached", () => {
    const component = render(<Stepper value={500} min={500} />);

    expect(component).toMatchSnapshot();
  });

  test("custom max value reached", () => {
    const component = render(<Stepper value={500} max={500} />);

    expect(component).toMatchSnapshot();
  });

  test("onChange invoked on subtract button click", () => {
    const mockOnChange = vi.fn<[number]>();

    const { getByTestId } = render(
      <Stepper value={42} onChange={mockOnChange} data-testid="test-stepper" />
    );

    getByTestId("test-stepper")
      .querySelector<HTMLButtonElement>("#stepper-subtract")
      ?.click();
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(41);
  });

  test("onChange invoked on add button click", () => {
    const mockOnChange = vi.fn<[number]>();

    const { getByTestId } = render(
      <Stepper value={42} onChange={mockOnChange} data-testid="test-stepper" />
    );

    getByTestId("test-stepper")
      .querySelector<HTMLButtonElement>("#stepper-add")
      ?.click();
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(43);
  });

  test("onChange invoked on input change", async () => {
    const mockOnChange = vi.fn<[number]>();

    const { getByTestId } = render(
      <Stepper value={42} onChange={mockOnChange} data-testid="test-stepper" />
    );

    const inputElement =
      getByTestId("test-stepper").querySelector<HTMLInputElement>(
        "#stepper-input"
      );
    expect(inputElement).toBeInTheDocument();
    if (!inputElement) return;

    await userEvent.type(inputElement, "1");
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(421);
  });
});
