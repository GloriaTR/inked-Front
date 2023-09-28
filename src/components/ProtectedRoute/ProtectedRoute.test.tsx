import { render, screen } from "@testing-library/react";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App/App";
import { store } from "../../store";

describe("Given a ProtectedRoute component", () => {
  describe("When the user is not logged in the app and tries to access '/my-list' route", () => {
    test("Then it should redirect to '/home' and show the heading 'inked'", () => {
      const authStateHookMock: Partial<AuthStateHook> = [null];

      auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

      const expectedHeading = "inked";

      render(
        <MemoryRouter initialEntries={["/my-list"]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
