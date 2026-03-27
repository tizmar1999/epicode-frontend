import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DsTreeItem } from "./ds-tree-item";

describe("DsTreeItem", () => {
  it("renders label correctly", () => {
    render(<DsTreeItem label="Module 1" />);

    expect(screen.getByText("Module 1")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<DsTreeItem label="Clickable" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("treeitem", { name: "Clickable" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies active styles when isActive is true", () => {
    render(<DsTreeItem isActive label="Active Item" />);

    const button = screen.getByRole("treeitem", { name: "Active Item" });
    expect(button).toHaveAttribute("aria-selected", "true");
  });

  it("renders children when provided", () => {
    render(
      <DsTreeItem label="Parent">
        <div>Child Item</div>
      </DsTreeItem>
    );

    expect(screen.getByText("Child Item")).toBeInTheDocument();
  });

  it("does not crash when no onClick is provided", () => {
    render(<DsTreeItem label="No Click" />);

    const button = screen.getByRole("treeitem", { name: "No Click" });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  it("toggles expansion with keyboard arrows", () => {
    render(
      <DsTreeItem label="Parent" defaultOpen>
        <DsTreeItem label="Child" />
      </DsTreeItem>
    );

    const [parent] = screen.getAllByRole("treeitem");
    expect(parent).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(parent, { key: "ArrowLeft" });
    expect(parent).toHaveAttribute("aria-expanded", "false");

    fireEvent.keyDown(parent, { key: "ArrowRight" });
    expect(parent).toHaveAttribute("aria-expanded", "true");
  });
});
