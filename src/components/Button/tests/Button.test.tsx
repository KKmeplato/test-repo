import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "components/Button";
import { Icon } from "components/icons";
import { Size } from "lib/index";

describe("<Button />", () => {
  interface Props {
    variant: "basic" | "primary" | "critical" | "success";
    size?: Size;
    disabled?: boolean;
    icon?: React.ReactNode;
    disclosure?: "up" | "down";
    testId?: string;
    loading?: boolean;
    onClick: () => void;
  }

  test("renders and re-renders with specified props", async () => {
    const { rerender } = render(
      <Button
        variant="primary"
        data-testid="test-button"
        accessibilityLabel="Click me"
        onClick={vi.fn()}
      >
        Get started
      </Button>
    );

    const buttonElement = await screen.findByTestId("test-button");
    expect(buttonElement).toBeInTheDocument();
    expect(within(buttonElement).queryByText("Get started")).not.toBeNull();

    rerender(
      <Button
        variant="critical"
        data-testid="test-button"
        disclosure="down"
        accessibilityLabel="Click me"
        onClick={vi.fn()}
      >
        Subscribe now
      </Button>
    );

    expect(buttonElement).toBeInTheDocument();
    expect(within(buttonElement).queryByText("Subscribe now")).not.toBeNull();
    /** Check if the button contains an SVG element */
    const svgIcon = buttonElement.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });

  test("renders with an after icon and invokes icon onClick callback", async () => {
    const mockButtonClick = vi.fn() as Props["onClick"];

    render(
      <Button
        variant="critical"
        data-testid="test-button"
        disclosure="down"
        accessibilityLabel="Click me"
        icon={<Icon.sort />}
        onClick={mockButtonClick}
      >
        Choose
      </Button>
    );

    /** Invokes onClick callback on button click */
    const buttonElement = await screen.findByTestId("test-button");
    expect(within(buttonElement).queryByText("Choose")).not.toBeNull();
    await userEvent.click(buttonElement);
    expect(mockButtonClick).toHaveBeenCalled();

    /** Invokes onClick callback on before icon click */
    const beforeSvgIcon = await buttonElement.querySelector("svg");
    expect(beforeSvgIcon).toBeInTheDocument();
    if (beforeSvgIcon) {
      userEvent.click(beforeSvgIcon);
      expect(mockButtonClick).toHaveBeenCalled();
    }

    /** Invokes onClick callback on after icon click */
    const afterSvgIcon = await buttonElement.querySelector("svg");
    expect(afterSvgIcon).toBeInTheDocument();
    if (afterSvgIcon) {
      userEvent.click(afterSvgIcon);
      expect(mockButtonClick).toHaveBeenCalled();
    }
  });

  test("renders disabled button", async () => {
    const mockButtonClick = vi.fn() as Props["onClick"];

    const { rerender } = render(
      <Button
        variant="primary"
        data-testid="test-button"
        accessibilityLabel="Click me"
        onClick={mockButtonClick}
      >
        Get started
      </Button>
    );

    const buttonElement = await screen.findByTestId("test-button");
    expect(within(buttonElement).queryByText("Get started")).not.toBeNull();
    expect(buttonElement).not.toBeDisabled();

    rerender(
      <Button
        variant="critical"
        data-testid="test-button"
        accessibilityLabel="Click me"
        disclosure="up"
        onClick={mockButtonClick}
        disabled
      >
        Subscribe now
      </Button>
    );

    expect(within(buttonElement).queryByText("Subscribe now")).not.toBeNull();
    expect(buttonElement).toBeDisabled();
  });

  test("renders correctly", () => {
    const componentWithChildren = render(
      <Button
        variant="primary"
        data-testid="test-button"
        accessibilityLabel="Click me"
        onClick={vi.fn()}
      >
        Save
      </Button>
    );
    expect(componentWithChildren).toMatchSnapshot();

    const component = render(
      <Button
        variant="primary"
        data-testid="test-button"
        accessibilityLabel="Click me"
        onClick={vi.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
