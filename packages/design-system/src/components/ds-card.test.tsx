import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DsCard } from "./ds-card";

describe("DsCard", () => {
  it("renders children content", () => {
    render(<DsCard>Body text</DsCard>);

    expect(screen.getByText("Body text")).toBeInTheDocument();
  });

  it("renders header and footer when provided", () => {
    render(<DsCard header="Header" footer="Footer" />);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies elevated variant class", () => {
    render(<DsCard variant="elevated">Elevated</DsCard>);

    const card = screen.getByText("Elevated").closest(".rounded-xl");
    expect(card?.className).toMatch(/shadow/);
  });
});
