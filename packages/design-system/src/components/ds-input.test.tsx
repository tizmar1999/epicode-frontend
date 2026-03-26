import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DsInput from "./ds-input";

describe("DsInput", () => {
  it("renders input with label", () => {
    render(<DsInput label="Email" />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("shows helper text when provided", () => {
    render(<DsInput helperText="Enter your email" />);

    expect(screen.getByText("Enter your email")).toBeInTheDocument();
  });

  it("shows error message when error is true", () => {
    render(
      <DsInput
        error
        errorMessage="This field is required"
        helperText="Helper"
      />,
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("prioritizes error message over helper text", () => {
    render(
      <DsInput error errorMessage="Error message" helperText="Helper text" />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("sets aria-invalid when error is true", () => {
    render(<DsInput error />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
