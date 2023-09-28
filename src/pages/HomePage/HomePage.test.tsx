import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePageLazy from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When is rendered", () => {
    test("Then it should show the heading 'Welcome to inked'", () => {
      const expectedHeading = "Welcome to inked";

      render(
        <BrowserRouter>
          <HomePageLazy />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the text 'Log in to access your account'", () => {
      const expectedText = "Log in to access your account";

      render(
        <BrowserRouter>
          <HomePageLazy />
        </BrowserRouter>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in with GitHub'", () => {
      const expectedButtonName = /Log in with GitHub/i;

      render(
        <BrowserRouter>
          <HomePageLazy />
        </BrowserRouter>,
      );

      const button = screen.getByRole("button", { name: expectedButtonName });

      expect(button).toBeInTheDocument();
    });
  });
});
