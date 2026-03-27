import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DsProgress } from "./ds-progress";

describe("DsProgress", () => {
  it("renders label and percentage", () => {
    render(<DsProgress label="Progress" value={40} />);

    expect(screen.getByText("Progress")).toBeInTheDocument();
    expect(screen.getByText("40%")).toBeInTheDocument();
  });

  it("clamps value below 0 to 0", () => {
    render(<DsProgress value={-10} />);

    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("clamps value above 100 to 100", () => {
    render(<DsProgress value={150} />);

    expect(screen.getByText("100%")).toBeInTheDocument();
  });
});
