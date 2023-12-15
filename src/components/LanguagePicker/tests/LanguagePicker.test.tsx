import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import { LanguagePicker } from "../LanguagePicker";

function Wrapper({ children }: { children: React.ReactElement }) {
  return <div id="uikit-theme">{children}</div>;
}

describe("<LanguagePicker />", () => {
  it("renders", () => {
    const result = render(
      <LanguagePicker selected="de" locales={["en", "de", "es", "pt-BR"]} />,
      { wrapper: Wrapper }
    );

    expect(result).toMatchSnapshot();
  });

  it("renders when clicked", async () => {
    const result = render(
      <LanguagePicker selected="de" locales={["en", "de", "es", "pt-BR"]} />,
      { wrapper: Wrapper }
    );

    await userEvent.click(result.getByRole("button"));

    expect(result).toMatchSnapshot();
  });

  it("opens an ActionList with the languages when clicked", async () => {
    const { getByRole, getByText } = render(
      <LanguagePicker selected="en" locales={["en", "de", "es", "pt-BR"]} />,
      { wrapper: Wrapper }
    );

    await userEvent.click(getByRole("button"));

    expect(getByText("Spanish")).toBeDefined();
    expect(getByText("German")).toBeDefined();
    expect(getByText("Brazilian Portuguese")).toBeDefined();
  });

  it("responds to onSelect when a language item is clicked", async () => {
    const mockOnSelect = vi.fn();
    const { getByRole, getAllByRole } = render(
      <LanguagePicker
        selected="en"
        locales={["en", "de", "es", "pt-BR"]}
        onSelect={mockOnSelect}
      />,
      { wrapper: Wrapper }
    );

    await userEvent.click(getByRole("button"));
    await userEvent.click(getAllByRole("menuitem")[2]);

    expect(mockOnSelect).toHaveBeenCalledWith("es");
  });
});
