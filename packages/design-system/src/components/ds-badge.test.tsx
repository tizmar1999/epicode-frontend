import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DsBadge } from "./ds-badge";

describe("DsBadge", () => {
  it("renders provided text", () => {
    render(<DsBadge>Completed</DsBadge>);

    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("applies variant class for 'new'", () => {
    render(<DsBadge variant="new">New</DsBadge>);

    const badge = screen.getByText("New");
    expect(badge.className).toMatch(/bg-primary/);
  });
});
