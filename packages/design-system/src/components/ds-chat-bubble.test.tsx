import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DsChatBubble } from "./ds-chat-bubble";

describe("DsChatBubble", () => {
  it("renders children", () => {
    render(<DsChatBubble variant="assistant">Hello world</DsChatBubble>);

    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("aligns assistant messages to the left", () => {
    render(<DsChatBubble variant="assistant">Left</DsChatBubble>);

    const wrapper = screen.getByTestId("bubble").parentElement;
    expect(wrapper?.className).toContain("justify-start");
  });

  it("aligns user messages to the right with user styling", () => {
    render(<DsChatBubble variant="user">Right</DsChatBubble>);

    const bubble = screen.getByTestId("bubble");
    const wrapper = bubble.parentElement;

    expect(wrapper?.className).toContain("justify-end");
    expect(bubble.className).toMatch(/bg-primary/);
  });
});
