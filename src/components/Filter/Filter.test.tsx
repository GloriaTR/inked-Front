import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When is rendered", () => {
    test("Then it should a filter with the alternate text 'Filter by Read or Unread'", () => {
      const setFilterValue = vi.fn();
      const expectedAriaLabelText = "Filter by Read or Unread";

      render(<Filter setFilterValue={setFilterValue} />);

      const filter = screen.getByLabelText(expectedAriaLabelText);

      expect(filter).toBeInTheDocument();
    });
  });
});
