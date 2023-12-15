import { render } from "@testing-library/react";
import { DummyIcon } from "src/tests/fixtures/components";
import { expect } from "vitest";

import { ActionItem } from "../ActionItem";

describe("<ActionItem />", () => {
  test("renders", () => {
    const result = render(
      <ActionItem id="sort-asc">Sort ascending</ActionItem>
    );

    expect(result.getByRole("button")).toHaveTextContent("Sort ascending");
    expect(result).toMatchSnapshot();
  });

  test("renders a prefix icon", () => {
    const { getByRole, getByTitle } = render(
      <ActionItem prefixIcon={<DummyIcon />} id="sort-asc">
        Sort ascending
      </ActionItem>
    );

    expect(getByRole("button")).toHaveTextContent("Sort ascending");
    expect(getByTitle("DummyIcon")).toBeDefined();
  });

  test("renders a suffix icon", () => {
    const { getByRole, getByTitle } = render(
      <ActionItem suffixIcon={<DummyIcon />} id="sort-asc">
        Sort ascending
      </ActionItem>
    );

    expect(getByRole("button")).toHaveTextContent("Sort ascending");
    expect(getByTitle("DummyIcon")).toBeDefined();
  });

  test("renders a bottom help text", () => {
    const { getByText } = render(
      <ActionItem bottomHelpText="You can use keyboard shortcuts" id="sort-asc">
        Sort ascending
      </ActionItem>
    );

    expect(getByText("Sort ascending")).toBeDefined();
    expect(getByText("You can use keyboard shortcuts")).toBeDefined();
  });

  test("renders a side help text", () => {
    const { getByText } = render(
      <ActionItem sideHelpText="EN">English</ActionItem>
    );

    expect(getByText("English")).toBeDefined();
    expect(getByText("EN")).toBeDefined();
  });

  test("renders a disabled button", () => {
    const { getByRole } = render(
      <ActionItem
        bottomHelpText="You can use keyboard shortcuts"
        id="sort-asc"
        disabled
      >
        Sort ascending
      </ActionItem>
    );

    expect(getByRole("button")).toBeDisabled();
  });
});
