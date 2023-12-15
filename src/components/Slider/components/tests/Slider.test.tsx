import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Slider } from "../../Slider";

describe("<Slider />", () => {
  it.each([
    {
      name: "single",
      defaultValue: [10],
      value: [10],
      min: 0,
      max: 100,
      label: "Single",
      accessibilityLabel: "Volume"
    },
    {
      name: "range",
      defaultValue: [10, 50],
      value: [10, 50],
      min: 0,
      max: 100,
      label: "Range",
      accessibilityLabel: "Price range"
    }
  ])("renders with $name", (args) => {
    const result = render(<Slider {...args} onChange={vi.fn()} />);

    expect(result).toMatchSnapshot();
  });

  it("renders a slider based on props", () => {
    const { getByRole, getByLabelText } = render(
      <Slider
        defaultValue={[10]}
        min={0}
        max={100}
        value={[10]}
        label="Volume"
        prefix=""
        onChange={vi.fn()}
      />
    );

    expect(
      getByRole("slider", { value: { now: 10, min: 0, max: 100 } })
    ).toBeInTheDocument();
    expect(getByLabelText("Volume")).toBeInTheDocument();
  });

  it("renders a range slider based on props", () => {
    const { getByRole, getAllByLabelText } = render(
      <Slider
        defaultValue={[10]}
        min={0}
        max={100}
        value={[10, 60]}
        label="Price range"
        prefix=""
        onChange={vi.fn()}
      />
    );

    expect(
      getByRole("slider", { value: { now: 10, min: 0, max: 100 } })
    ).toBeInTheDocument();
    expect(
      getByRole("slider", { value: { now: 60, min: 0, max: 100 } })
    ).toBeInTheDocument();
    expect(getAllByLabelText("Price range").length).toBe(2);
  });

  it("shows a tooltip when hovered on the slider thumb", async () => {
    const { getByRole } = render(
      <Slider
        defaultValue={[10]}
        min={0}
        max={100}
        value={[10]}
        label="Volume"
        prefix=""
        onChange={vi.fn()}
      />
    );

    await userEvent.hover(getByRole("slider"));
    expect(getByRole("tooltip")).toHaveTextContent("10");
  });

  it("shows a tooltip when hovered on the slider thumb when dual thumbs are used", async () => {
    const { getAllByRole } = render(
      <Slider
        defaultValue={[10]}
        min={0}
        max={100}
        value={[10, 60]}
        label="Price range"
        prefix=""
        onChange={vi.fn()}
      />
    );

    await userEvent.hover(getAllByRole("slider")[0]);
    expect(getAllByRole("tooltip")[0]).toHaveTextContent("10");

    await userEvent.hover(getAllByRole("slider")[1]);
    expect(getAllByRole("tooltip")[1]).toHaveTextContent("60");
  });
});
