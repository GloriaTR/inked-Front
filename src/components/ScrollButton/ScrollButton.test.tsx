import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollButton from "./ScrollButton";

describe("Given a ScrollButton component", () => {
  const expectedAriaLabelText = "Scroll to top button";

  describe("When the user scrolls down more than 300px", () => {
    test("Then it should show an icon with the alternate text 'Scroll to top button'", () => {
      render(<ScrollButton />);

      fireEvent.scroll(window, { target: { scrollY: 350 } });

      const scrollTopIcon = screen.getByLabelText(expectedAriaLabelText);
      expect(scrollTopIcon).toBeInTheDocument();
    });
  });

  describe("When the user scrolls down 100px", () => {
    test("Then the ScrollButton shouldn't show up", () => {
      render(<ScrollButton />);

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      const scrollTopIcon = screen.queryByLabelText(expectedAriaLabelText);
      expect(scrollTopIcon).not.toBeInTheDocument();
    });
  });

  describe("When the user clicks on the scroll to top button", () => {
    test("Then it should scroll to the top of the window", async () => {
      const scrollToTop = vi.spyOn(window, "scrollTo");

      render(<ScrollButton />);

      fireEvent.scroll(window, { target: { scrollY: 350 } });

      const scrollTopButton = screen.getByLabelText(expectedAriaLabelText);
      await userEvent.click(scrollTopButton);

      expect(scrollToTop).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });

      scrollToTop.mockRestore();
    });
  });
});
