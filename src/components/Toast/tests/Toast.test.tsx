import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { UikitProvider } from "components/UikitProvider";
import { CreateToastProps, ThemeContext } from "contexts/types";

import { Toast } from "../Toast";

describe("<Toast />", () => {
  const mockOnClose = vi.fn();
  it.each<CreateToastProps & ThemeContext>([
    {
      message: "Catalog not deleted",
      critical: true,
      mode: "light",
      theme: "meplato",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog deleted",
      critical: false,
      mode: "light",
      theme: "meplato",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog not deleted",
      critical: true,
      mode: "dark",
      theme: "meplato",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog deleted",
      critical: false,
      mode: "dark",
      theme: "meplato",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog not deleted",
      critical: true,
      mode: "light",
      theme: "webridge",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog deleted",
      critical: false,
      mode: "light",
      theme: "webridge",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog not deleted",
      critical: true,
      mode: "dark",
      theme: "webridge",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    },
    {
      message: "Catalog deleted",
      critical: false,
      mode: "dark",
      theme: "webridge",
      onClose: mockOnClose,
      action: "Undo",
      onAction: mockOnClose
    }
  ])("renders with $message / $critical", (props) => {
    const result = render(
      <UikitProvider {...props}>
        <Toast {...props} />
      </UikitProvider>
    );

    expect(result).toMatchSnapshot();
  });
});
