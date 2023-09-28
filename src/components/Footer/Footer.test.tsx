import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import Footer from "./Footer";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Juana" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];

auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a Footer component", () => {
  describe("When the user is logged in", () => {
    test("Then it should show the logo's app with the alternate text 'Inked company logo'", () => {
      const expectedAlternativeLogoText = "Inked company logo";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const logoImage = screen.getByAltText(expectedAlternativeLogoText);

      expect(logoImage).toBeInTheDocument();
    });

    test("Then it should show the company data '© 2023 inked, Ltd' and 'Diputació, 37, 08015, Barcelona'", () => {
      const expectedCompanyCopyright = "© 2023 inked, Ltd";
      const expectedCompanyAddress = "Diputació, 37, 08015, Barcelona";

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );

      const companyCopyright = screen.getByText(expectedCompanyCopyright);
      const companyAddress = screen.getByText(expectedCompanyAddress);

      expect(companyCopyright).toBeInTheDocument();
      expect(companyAddress).toBeInTheDocument();
    });
  });
});
