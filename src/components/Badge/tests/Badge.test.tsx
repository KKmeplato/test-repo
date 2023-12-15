import { render } from "@testing-library/react";

import { Badge } from "../Badge";
import { BadgeProps } from "../types";

describe("<Badge />", () => {
  it.each<BadgeProps>([
    { variant: "attention" },
    { variant: "critical" },
    { variant: "default" },
    { variant: "info" },
    { variant: "success" },
    { variant: "warning" }
  ])("renders all variants (variant:$variant)", (props) => {
    const result = render(<Badge {...props}>42</Badge>);
    expect(result).toMatchSnapshot();
  });

  it.each<BadgeProps>([
    { progress: undefined },
    { progress: "complete" },
    { progress: "incomplete" },
    { progress: "partial" }
  ])("renders all progress (progress:$progress)", (props) => {
    const result = render(<Badge {...props}>42</Badge>);
    expect(result).toMatchSnapshot();
  });

  it.each<BadgeProps>([
    { children: "with icon", prefixIcon: <div className="h-5 w-5">🧪</div> },
    { children: "notification", as: "notification" },
    {
      children: "notification and progress",
      as: "notification",
      progress: "partial"
    }
  ])("renders with (as:$as,progress:$progress)", (props) => {
    const result = render(<Badge {...props} />);
    expect(result).toMatchSnapshot();
  });

  it("renders with className/id", () => {
    const result = render(<Badge className="test-class" id="test-id" />);
    expect(result).toMatchSnapshot();
  });

  it.each<BadgeProps>([
    {
      children: (
        <div>
          <span>complex children</span>
          <span>🧪</span>
        </div>
      ),
      as: "notification"
    },
    {
      children: (
        <div>
          <span>complex children</span>
          <span>🧪</span>
        </div>
      )
    }
  ])("renders with complex children (as:$as)", (props) => {
    const result = render(<Badge {...props} />);
    expect(result).toMatchSnapshot();
  });

  it.each<BadgeProps>([
    { as: "dot", progress: "complete", variant: "attention" },
    { as: "dot", progress: "complete", variant: "critical" },
    { as: "dot", progress: "complete", variant: "default" },
    { as: "dot", progress: "complete", variant: "info" },
    { as: "dot", progress: "complete", variant: "success" },
    { as: "dot", progress: "complete", variant: "warning" },
    { as: "dot", progress: "incomplete", variant: "attention" },
    { as: "dot", progress: "incomplete", variant: "critical" },
    { as: "dot", progress: "incomplete", variant: "default" },
    { as: "dot", progress: "incomplete", variant: "info" },
    { as: "dot", progress: "incomplete", variant: "success" },
    { as: "dot", progress: "incomplete", variant: "warning" },
    { as: "dot", progress: "partial", variant: "attention" },
    { as: "dot", progress: "partial", variant: "critical" },
    { as: "dot", progress: "partial", variant: "default" },
    { as: "dot", progress: "partial", variant: "info" },
    { as: "dot", progress: "partial", variant: "success" },
    { as: "dot", progress: "partial", variant: "warning" }
  ])("renders as dot (progress:$progress, variant:$variant)", (props) => {
    const result = render(<Badge {...props} />);
    expect(result).toMatchSnapshot();
  });
});
