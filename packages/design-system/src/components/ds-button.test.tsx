import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import DsButton from "./ds-button"

describe("DsButton", () => {
  it("renders correctly and shows children", () => {
    render(<DsButton>Click me</DsButton>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("handles click events", () => {
    const handleClick = vi.fn()
    render(<DsButton onClick={handleClick}>Click</DsButton>)
    fireEvent.click(screen.getByText("Click"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("shows loading state", () => {
    render(
      <DsButton isLoading aria-label="loading-button">
        Loading
      </DsButton>
    )
    // Spinner is a span with border classes; ensure button is disabled
    const button = screen.getByLabelText("loading-button")
    expect(button).toBeDisabled()
    // children text should still be present
    expect(screen.getByText("Loading")).toBeInTheDocument()
  })

  it("is disabled when loading", () => {
    render(<DsButton isLoading>Save</DsButton>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
