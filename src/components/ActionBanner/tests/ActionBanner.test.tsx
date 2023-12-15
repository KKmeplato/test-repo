import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ActionBanner } from "../ActionBanner";
import { ActionBannerProps } from "../types";

const mockClick = vi.fn();
describe("<ActionBanner />", () => {
  it.each<ActionBannerProps>([
    {
      variant: "default",
      children: "This is text for default banner",
      action: {
        label: "Action",
        onClick: mockClick
      }
    },
    {
      variant: "critical",
      children: "This is text for critical banner",
      action: {
        label: "Action",
        onClick: mockClick
      }
    },
    {
      variant: "warning",
      children: "This is text for warning banner",
      action: {
        label: "Action",
        onClick: mockClick
      }
    },
    {
      variant: "highlight",
      children: "This is text for highlight banner",
      action: {
        label: "Action",
        onClick: mockClick
      }
    },
    {
      variant: "upgrade",
      children: "This is text for upgrade banner",
      action: {
        label: "Action",
        onClick: mockClick
      }
    }
  ])("renders all variants of action banner (variant:$variant)", (props) => {
    const result = render(
      <ActionBanner {...props}>{props.children}</ActionBanner>
    );
    expect(result).toMatchSnapshot();
  });

  it("calls the click handlers of action button respectively when clicked", async () => {
    const result = render(
      <ActionBanner
        action={{ label: "Action", onClick: mockClick }}
        variant="upgrade"
      >
        Action banner content
      </ActionBanner>
    );
    await userEvent.click(result.getByRole("button"));
    expect(mockClick).toHaveBeenCalled();
  });
});
