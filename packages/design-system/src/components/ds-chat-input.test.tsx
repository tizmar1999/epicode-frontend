import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DsChatInput } from "./ds-chat-input";

describe("DsChatInput", () => {
  it("renders placeholder text", () => {
    render(<DsChatInput placeholder="Type here" />);

    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });

  it("does not send when empty", () => {
    const handleSend = vi.fn();
    render(<DsChatInput onSend={handleSend} />);

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(handleSend).not.toHaveBeenCalled();
  });

  it("sends trimmed value and clears input", () => {
    const handleSend = vi.fn();
    render(<DsChatInput onSend={handleSend} />);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: " Hello " } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(handleSend).toHaveBeenCalledWith("Hello");
    expect((textarea as HTMLTextAreaElement).value).toBe("");
  });
});
