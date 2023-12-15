import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setMedia } from "mock-match-media";
import { describe, it } from "vitest";

import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";
import { Breakpoints } from "lib/constants";

import { Modal } from "../Modal";

describe("<Modal />", () => {
  const activator = (
    <Button variant="primary" onClick={vi.fn}>
      Activator
    </Button>
  );
  const themeContainer = document.createElement("div");
  themeContainer.id = "uikit-theme";

  beforeEach(() => {
    setMedia({ width: `${Breakpoints.sm}px` }); // isSM
  });

  it("renders with complex children", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClick }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClick }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClick }}
        title="Primary and secondary action"
      >
        <div id="first-child">First child</div>
        <div>
          <Checkbox
            id="second-child"
            value="confirmed"
            label="I agree to TOS"
          />
        </div>
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const dialog = result.getByRole("dialog");
    assert(dialog, "dialog is null");
    const div = dialog.querySelector<HTMLDivElement>("#first-child");
    expect(div).toBeInTheDocument();
    const checkbox = dialog.querySelector<HTMLButtonElement>("#second-child");
    expect(checkbox).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("renders with medium size buttons", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClick }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClick }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClick }}
        title="Medium size buttons"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();
    expect(primary).toHaveAttribute("data-size", "medium");
    const secondary = result.getByRole("button", { name: "Cancel" });
    expect(secondary).toBeInTheDocument();
    expect(secondary).toHaveAttribute("data-size", "medium");
    const tertiary = result.getByRole("button", { name: "Foo" });
    expect(tertiary).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("renders with small size buttons", async () => {
    setMedia({ width: `${Breakpoints.sm - 1}px` }); // isXS

    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClick }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClick }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClick }}
        title="Small size buttons"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();
    expect(primary).toHaveAttribute("data-size", "small");
    const secondary = result.getByRole("button", { name: "Cancel" });
    expect(secondary).toBeInTheDocument();
    expect(secondary).toHaveAttribute("data-size", "small");
    expect(result).toMatchSnapshot();
  });

  it("renders without primary", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClick }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClick }}
        title="Without primary action"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const secondary = result.getByRole("button", { name: "Cancel" });
    expect(secondary).toBeInTheDocument();
    const tertiary = result.getByRole("button", { name: "Foo" });
    expect(tertiary).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("renders without secondary", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClick }}
        tertiaryAction={{ label: "Foo", onClick: mockOnClick }}
        title="Without secondary action"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();
    const tertiary = result.getByRole("button", { name: "Foo" });
    expect(tertiary).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("renders without tertiary", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClick }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClick }]}
        title="Without tertiary action"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();
    const secondary = result.getByRole("button", { name: "Cancel" });
    expect(secondary).toBeInTheDocument();
    expect(result).toMatchSnapshot();
  });

  it("renders without footer", async () => {
    const result = render(
      <Modal open activator={activator} title="Without footer">
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const dialog = result.getByRole("dialog");
    assert(dialog, "dialog is null");
    expect(dialog.children[0].children.length).toBe(3);
    expect(result).toMatchSnapshot();
  });

  it("primary button is loading", async () => {
    const mockOnClick = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{
          label: "Delete user",
          onClick: mockOnClick,
          loading: true
        }}
        title="Primary button is loading"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();
    expect(primary).toBeDisabled();
    expect(result).toMatchSnapshot();
  });

  it("primary button clicked", async () => {
    const mockOnClickPrimary = vi.fn();
    const mockOnClickSecondary = vi.fn();
    const mockOnClickTertiary = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClickPrimary }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClickSecondary }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClickTertiary }}
        title="Primary button clicked"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const primary = result.getByRole("button", { name: "Delete user" });
    expect(primary).toBeInTheDocument();

    await userEvent.click(primary);

    expect(mockOnClickPrimary).toHaveBeenCalledOnce();
    expect(mockOnClickSecondary).not.toHaveBeenCalled();
    expect(mockOnClickTertiary).not.toHaveBeenCalled();
  });

  it("secondary button clicked", async () => {
    const mockOnClickPrimary = vi.fn();
    const mockOnClickSecondary = vi.fn();
    const mockOnClickTertiary = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClickPrimary }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClickSecondary }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClickTertiary }}
        title="Secondary button clicked"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const secondary = result.getByRole("button", { name: "Cancel" });
    expect(secondary).toBeInTheDocument();

    await userEvent.click(secondary);

    expect(mockOnClickSecondary).toHaveBeenCalledOnce();
    expect(mockOnClickPrimary).not.toHaveBeenCalled();
    expect(mockOnClickTertiary).not.toHaveBeenCalled();
  });

  it("tertiary button clicked", async () => {
    const mockOnClickPrimary = vi.fn();
    const mockOnClickSecondary = vi.fn();
    const mockOnClickTertiary = vi.fn();
    const result = render(
      <Modal
        open
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnClickPrimary }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnClickSecondary }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnClickTertiary }}
        title="Tertiary button clicked"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const tertiary = result.getByRole("button", { name: "Foo" });
    expect(tertiary).toBeInTheDocument();
    await userEvent.click(tertiary);
    expect(mockOnClickTertiary).toHaveBeenCalledOnce();
    expect(mockOnClickPrimary).not.toHaveBeenCalled();
    expect(mockOnClickSecondary).not.toHaveBeenCalled();
  });

  it("onClose called after ESC key", async () => {
    const mockOnClose = vi.fn();
    const mockOnAction = vi.fn();
    render(
      <Modal
        open
        onClose={mockOnClose}
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnAction }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnAction }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnAction }}
        title="Tertiary button clicked"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    await userEvent.keyboard("{Escape}");

    expect(mockOnClose).toHaveBeenCalledOnce();
    expect(mockOnAction).not.toHaveBeenCalled();
  });

  it("onClose called after mouse click X", async () => {
    const mockOnClose = vi.fn();
    const mockOnAction = vi.fn();
    const result = render(
      <Modal
        open
        onClose={mockOnClose}
        activator={activator}
        primaryAction={{ label: "Delete user", onClick: mockOnAction }}
        secondaryActions={[{ label: "Cancel", onClick: mockOnAction }]}
        tertiaryAction={{ label: "Foo", onClick: mockOnAction }}
        title="Tertiary button clicked"
      >
        Do you really want to delete the user?
      </Modal>,
      {
        container: document.body.appendChild(themeContainer)
      }
    );

    const closeButton = result.getByRole("button", { name: "close modal" });
    expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledOnce();
    expect(mockOnAction).not.toHaveBeenCalled();
  });
});
