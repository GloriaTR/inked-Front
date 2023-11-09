import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";

vi.mock("firebase/auth");

const user: Partial<User> = { displayName: "Juana" };

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

describe("Given a Navigation component", () => {
  describe("When is rendered", () => {
    test("Then it should show two links with the text 'My List' and 'Create' and a button with the text 'Log Out'", () => {
      const expectedHomeText = "My List";
      const expectedCreateText = "Create";
      const expectedLogOutText = "Log Out";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const homeLink = screen.getByText(expectedHomeText);
      const createLink = screen.getByText(expectedCreateText);
      const logOutButton = screen.getByText(expectedLogOutText);

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
      expect(logOutButton).toBeInTheDocument();
    });

    test("Then it should show three icons with the alternate texts 'home icon', 'create icon' and 'Logout button icon'", () => {
      const expectedHomeIconText = "home icon";
      const expectedCreateIconText = "create icon";
      const expectedLogOutButtonText = "Logout button icon";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const homeIcon = screen.getByAltText(expectedHomeIconText);
      const createIcon = screen.getByAltText(expectedCreateIconText);
      const logOutButton = screen.getByAltText(expectedLogOutButtonText);

      expect(homeIcon).toBeInTheDocument();
      expect(createIcon).toBeInTheDocument();
      expect(logOutButton).toBeInTheDocument();
    });
  });
});
