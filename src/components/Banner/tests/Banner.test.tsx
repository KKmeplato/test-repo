import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Banner } from "../Banner";
import { BannerProps } from "../types";

const mockPrimaryClick = vi.fn();
const mockSecondaryClick = vi.fn();
const mockDismissClick = vi.fn();
describe("<Banner />", () => {
  it.each<BannerProps>([
    {
      variant: "default",
      title: "This is a title",
      children: "This is a body text this is a body text.",
      primaryAction: {
        label: "Label",
        onClick: mockPrimaryClick
      },
      secondaryAction: {
        label: "Label2",
        onClick: mockSecondaryClick
      }
    },
    {
      variant: "critical",
      children: "This is a body text this is a body text.",
      primaryAction: {
        label: "Label",
        onClick: mockPrimaryClick
      },
      secondaryAction: {
        label: "Label2",
        onClick: mockSecondaryClick
      }
    },
    {
      variant: "success",
      children: "This is a body text this is a body text.",
      primaryAction: {
        label: "Label",
        onClick: mockPrimaryClick
      },
      secondaryAction: {
        label: "Label2",
        onClick: mockSecondaryClick
      }
    },
    {
      variant: "warning",
      children: "This is a body text this is a body text.",
      primaryAction: {
        label: "Label",
        onClick: mockPrimaryClick
      },
      secondaryAction: {
        label: "Label2",
        onClick: mockSecondaryClick
      },
      isInsideCard: true
    },
    {
      variant: "highlight",
      title: "This is a title",
      children: "This is a body text this is a body text.",
      primaryAction: {
        label: "Label",
        onClick: mockPrimaryClick
      },
      secondaryAction: {
        label: "Label2",
        onClick: mockSecondaryClick
      },
      hideIcon: false,
      isInsideCard: true
    }
  ])("renders default and inside banners (variant:$variant)", (props) => {
    const result = render(<Banner {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("calls the click handlers of primary and secondary action respectively when clicked", async () => {
    const result = render(
      <Banner
        variant="default"
        primaryAction={{
          label: "Label",
          onClick: mockPrimaryClick
        }}
        secondaryAction={{
          label: "Second",
          onClick: mockSecondaryClick
        }}
      >
        Banner content
      </Banner>
    );
    const buttonElement = await result.getAllByRole("button");
    console.log("eeeee", buttonElement.length);
    expect(buttonElement[0]).toHaveTextContent("Label");
    expect(buttonElement[1]).toHaveTextContent("Second");
    await userEvent.click(buttonElement[0]);
    await userEvent.click(buttonElement[1]);
    expect(mockPrimaryClick).toHaveBeenCalled();
    expect(mockSecondaryClick).toHaveBeenCalled();
  });

  it("calls the click handlers of dismiss icon respectively when clicked", async () => {
    const result = render(
      <Banner variant="highlight" onDismiss={mockDismissClick}>
        Banner content
      </Banner>
    );
    await userEvent.click(result.getByRole("button"));
    expect(mockDismissClick).toHaveBeenCalled();
  });
});
