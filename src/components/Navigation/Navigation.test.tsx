import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When is rendered", () => {
    test("Then it should show two links with the text 'My List' and 'Create'", () => {
      const expectedHomeText = "My List";
      const expectedCreateText = "Create";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const homeLink = screen.getByRole("link", { name: expectedHomeText });
      const createLink = screen.getByRole("link", { name: expectedCreateText });

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
