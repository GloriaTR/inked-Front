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

    test("Then it should show two buttons, one with the text 'GitHub' and the other one with the text 'Google'", () => {
      const expectedButtonNameGitHub = /GitHub/i;
      const expectedButtonNameGoogle = /Google/i;

      render(
        <BrowserRouter>
          <HomePageLazy />
        </BrowserRouter>,
      );

      const buttonGitHub = screen.getByRole("button", {
        name: expectedButtonNameGitHub,
      });
      const buttonGoogle = screen.getByRole("button", {
        name: expectedButtonNameGoogle,
      });

      expect(buttonGitHub).toBeInTheDocument();
      expect(buttonGoogle).toBeInTheDocument();
    });
  });
});
