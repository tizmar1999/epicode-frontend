import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import DsButton from "./ds-button"

describe("DsButton", () => {
  it("renders children correctly", () => {
    render(<DsButton>Click me</DsButton>)

    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn()

    render(<DsButton onClick={handleClick}>Click</DsButton>)

    fireEvent.click(screen.getByText("Click"))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when loading", () => {
    render(<DsButton isLoading>Loading</DsButton>)

    const button = screen.getByRole("button")

    expect(button).toBeDisabled()
  })

  it("shows loading spinner when isLoading is true", () => {
    render(<DsButton isLoading>Loading</DsButton>)

    const spinner = document.querySelector(".animate-spin")

    expect(spinner).toBeInTheDocument()
  })
})