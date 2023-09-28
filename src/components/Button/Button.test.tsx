import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  const textButton = "Not Read";

  describe("When it receives a 'Not Read' text", () => {
    test("Then it should show a button with 'Not Read' inside", () => {
      const mockFunction = vi.fn();

      render(
        <Button actionOnClick={mockFunction} className="">
          {textButton}
        </Button>,
      );

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a function and the user clicks the button", () => {
    test("Then the received function should be called", async () => {
      const mockFunction = vi.fn();

      render(
        <Button actionOnClick={mockFunction} className="">
          {textButton}
        </Button>,
      );

      const button = screen.getByRole("button", { name: textButton });
      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
