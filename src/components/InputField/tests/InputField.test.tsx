import { fireEvent, render, screen } from "@testing-library/react";

import { InputField } from "../InputField";

const DummyPrefixIcon = () => <>SVGPrefixIcon</>;
const DummySuffixIcon = () => <>SVGSuffixIcon</>;

describe("<InputField />", () => {
  interface Props {
    label?: string;
    prefix?: string;
    suffix?: string;
    suffixIcon?: React.ReactElement;
    prefixIcon?: React.ReactElement;
    showCharacterCount?: boolean;
    valid?: boolean | undefined;
    hint?: string;
    showHintIcon?: boolean;
    errorMessage?: string;
    successMessage?: string;
    preview?: boolean;
    onChange?: () => void;
  }

  test("shows success messages", async () => {
    const { rerender } = render(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        onChange={vi.fn()}
      />
    );

    const textInputElementWrapper =
      await screen.findByTestId("test-text-input");
    expect(textInputElementWrapper).toBeInTheDocument();
    expect(screen.queryByText("Error message")).toBeNull();
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue("Test input text field")
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test input text field")).toHaveAttribute(
      "id",
      "test-text-input-field"
    );

    rerender(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        onChange={vi.fn()}
        success="Success message"
        prefixIcon={<i className="fa-solid fa-circle-check" />}
        suffixIcon={<i className="fa-solid fa-circle-check" />}
      />
    );

    expect(screen.queryByText("Success message")).not.toBeNull();
    // Do not display hint if successMessage
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).toBeNull();
  });

  test("shows error messages", async () => {
    const { rerender } = render(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        onChange={vi.fn()}
      />
    );

    const textInputElementWrapper =
      await screen.findByTestId("test-text-input");
    expect(textInputElementWrapper).toBeInTheDocument();
    expect(screen.queryByText("Error message")).toBeNull();
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).not.toBeNull();
    expect(
      screen.getByDisplayValue("Test input text field")
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test input text field")).toHaveAttribute(
      "id",
      "test-text-input-field"
    );

    rerender(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        onChange={vi.fn()}
        error="Error message"
      />
    );

    expect(screen.queryByText("Error message")).not.toBeNull();
    // Do not display hint if successMessage
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).toBeNull();
  });

  test("changes success to error message", async () => {
    const { rerender } = render(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        success="Success message"
        onChange={vi.fn()}
      />
    );

    expect(screen.queryByText("Success message")).not.toBeNull();
    // Do not display hint if successMessage
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).toBeNull();

    rerender(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value=""
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        error="Input text field should not be empty!"
        onChange={vi.fn()}
      />
    );

    expect(
      screen.queryByText("Input text field should not be empty!")
    ).not.toBeNull();
    // Do not display hint if successMessage
    expect(
      screen.queryByText("Lorem ipsum dolor sit amet, consetetur")
    ).toBeNull();
  });

  test("shows hint text", async () => {
    const { rerender } = render(
      <InputField
        id="company-id"
        label={"Company name"}
        name="legalName"
        value={"Meplato"}
        maxLength={255}
        hint={"Meplato GmbH"}
        onChange={vi.fn()}
        data-testid="test-text-input"
      />
    );

    const labelElement = await screen.queryByText("Company name");
    expect(labelElement).toBeInTheDocument();

    const inputElement = await screen.findByTestId("test-text-input");
    expect(inputElement).toBeInTheDocument();

    const hintElement = await screen.queryByText("Meplato GmbH");
    expect(hintElement).toBeInTheDocument();
    expect(hintElement).toHaveTextContent("Meplato GmbH");

    rerender(
      <InputField
        id="company-id"
        label={"Company name"}
        name="legalName"
        value={"Meplato"}
        maxLength={255}
        onChange={vi.fn()}
        data-testid="test-text-input"
      />
    );

    /** Test no hint provided */
    expect(hintElement).not.toBeInTheDocument();
  });

  test("shows value or placeholder", async () => {
    const { rerender } = render(
      <InputField
        id="company-id"
        label={"Company name"}
        name="legalName"
        value={""}
        maxLength={255}
        placeholder={"Meplato GmbH"}
        onChange={vi.fn()}
        data-testid="test-text-input"
      />
    );

    const labelElement = await screen.queryByText("Company name");
    expect(labelElement).toBeInTheDocument();

    const inputElement = await screen.getByPlaceholderText("Meplato GmbH");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", "company-id");
    expect(inputElement).toHaveDisplayValue("");

    rerender(
      <InputField
        id="company-id"
        label={"Company name"}
        name="legalName"
        value={"Meplato GmbH"}
        maxLength={255}
        placeholder={""}
        onChange={vi.fn()}
        data-testid="test-text-input"
      />
    );

    expect(inputElement).toHaveDisplayValue("Meplato GmbH");
  });

  test("changes value", async () => {
    const mockOnChange = vi.fn() as Props["onChange"];

    render(
      <InputField
        id="company-id"
        label={"Company name"}
        name="legalName"
        value={""}
        maxLength={255}
        onChange={mockOnChange}
        data-testid="test-text-input"
      />
    );

    const inputElement = await screen.getByTestId("test-text-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveTextContent("");
    fireEvent.change(inputElement, { target: { value: "Meplato test" } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  test("renders a textarea when multiline prop is set", () => {
    const { container } = render(
      <InputField multiline={true} value="test" onChange={vi.fn()} />
    );
    const textareaElement = container.querySelector("textarea");
    const inputElement = container.querySelector("input");

    expect(textareaElement).toBeInTheDocument();
    expect(inputElement).not.toBeInTheDocument();
  });

  test("renders an input when there is no multiline prop", () => {
    const { container } = render(
      <InputField multiline={false} value="test" onChange={vi.fn()} />
    );
    const textareaElement = container.querySelector("textarea");
    const inputElement = container.querySelector("input");

    expect(inputElement).toBeInTheDocument();
    expect(textareaElement).not.toBeInTheDocument();
  });

  test("renders a `text` InputField", () => {
    const component = render(
      <InputField
        id="test-text-input-field"
        type="text"
        label="Input text field"
        value="Test input text field"
        maxLength={255}
        hint="Lorem ipsum dolor sit amet, consetetur"
        data-testid="test-text-input"
        onChange={vi.fn()}
        error="Error message"
        prefixIcon={<DummyPrefixIcon data-testid="test-prefix-icon" />}
        suffixIcon={<DummySuffixIcon data-testid="test-suffix-icon" />}
      />
    );
    expect(component).toMatchSnapshot();
  });

  describe("NumberInputField", () => {
    test("renders", () => {
      const component = render(
        <InputField
          type="number"
          id="test-number-input-field"
          label="Input text field"
          value={6}
          min={0}
          max={10}
          hint="Lorem ipsum dolor sit amet, consetetur"
          data-testid="test-text-input"
          onChange={vi.fn()}
        />
      );
      expect(component).toMatchSnapshot();
    });

    test("renders a number spinner", () => {
      const { getByTestId } = render(
        <InputField
          type="number"
          id="test-number-input-field"
          label="Input text field"
          value={6}
          min={0}
          max={10}
          hint="Lorem ipsum dolor sit amet, consetetur"
          data-testid="test-text-input"
          onChange={vi.fn()}
        />
      );

      const incrementButton = getByTestId("increment");
      const decrementButton = getByTestId("decrement");

      expect(incrementButton).toBeDefined();
      expect(incrementButton).toHaveAttribute("role", "button");

      expect(decrementButton).toBeDefined();
      expect(decrementButton).toHaveAttribute("role", "button");
    });
  });
});
