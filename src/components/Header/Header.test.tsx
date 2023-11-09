import { render, screen } from "@testing-library/react";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Juana" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];

auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show the heading 'inked'", () => {
      const expectedHeading = "inked";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the logo's app with the alternate text 'Inked logo'", () => {
      const expectedAlternativeLogoText = "Inked logo";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const logoImage = screen.getByAltText(expectedAlternativeLogoText);

      expect(logoImage).toBeInTheDocument();
    });
  });
});
