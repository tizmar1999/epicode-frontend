import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import { DsTreeItem } from "./ds-tree-item"

describe("DsTreeItem", () => {
  it("renders label correctly", () => {
    render(<DsTreeItem label="Module 1" />)

    expect(screen.getByText("Module 1")).toBeInTheDocument()
  })

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn()

    render(<DsTreeItem label="Clickable" onClick={handleClick} />)

    fireEvent.click(screen.getByRole("button"))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("applies active styles when isActive is true", () => {
    render(<DsTreeItem label="Active Item" isActive />)

    const button = screen.getByRole("button")

    expect(button.className).toMatch(/3a2a59/)
  })

  it("renders children when provided", () => {
    render(
      <DsTreeItem label="Parent">
        <div>Child Item</div>
      </DsTreeItem>
    )

    expect(screen.getByText("Child Item")).toBeInTheDocument()
  })

  it("does not crash when no onClick is provided", () => {
    render(<DsTreeItem label="No Click" />)

    const button = screen.getByRole("button")

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
  })
})
