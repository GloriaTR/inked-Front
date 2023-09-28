import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When is rendered", () => {
    test("Then it should show a loader", () => {
      const expectedAriaLabelText = "loading";

      render(<Loading />);

      const loading = screen.getByLabelText(expectedAriaLabelText);

      expect(loading).toBeInTheDocument();
    });
  });
});
