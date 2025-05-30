import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("renders with correct text", () => {
    render(
      <Button
        variant="Primary"
        size="Large"
      >
        Click me
      </Button>,
    );
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button
        variant="Secondary1"
        size="Large"
        onClick={handleClick}
      >
        Click me
      </Button>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Button
        variant="Negative1"
        size="Large"
        disabled
      >
        Disabled Button
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
