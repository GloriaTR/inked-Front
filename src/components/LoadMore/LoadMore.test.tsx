import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoadMore from "./LoadMore";

describe("Given a LoadMore component", () => {
  const loadMoreButton = "Load More";

  describe("When it receives a 'Load More' text", () => {
    test("Then it should show a button with 'Load More' inside", () => {
      const mockFunction = vi.fn();

      render(<LoadMore actionOnClick={mockFunction} />);

      const button = screen.getByRole("button", { name: loadMoreButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a function and the user clicks the button", () => {
    test("Then the received function should be called", async () => {
      const mockFunction = vi.fn();

      render(<LoadMore actionOnClick={mockFunction} />);

      const button = screen.getByRole("button", { name: loadMoreButton });
      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
