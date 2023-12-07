import { render, screen } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import CreateGraphicNovelPage from "./CreateGraphicNovelPage";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { setupStore } from "../../store";
import { comicsMock } from "../../mocks/comicsMock";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  vi.clearAllMocks();
});

const limitNumber = 5;

const store = setupStore({
  comicsState: { comics: comicsMock, totalComics: 2, limit: limitNumber },
});

describe("Given a CreateGraphicNovelPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show the heading 'Create a Graphic Novel'", () => {
      const expectedHeading = "Create a Graphic Novel";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateGraphicNovelPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Create' button", () => {
    test("Then it should show the heading 'Create a Graphic Novel'", async () => {
      const user: Partial<User> = { displayName: "Juana" };

      const authStateHookMock: Partial<AuthStateHook> = [user as User];

      auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

      const expectedHeading = "Create a Graphic Novel";

      const createButtonText = "Create";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateGraphicNovelPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      const createButton = await screen.findByRole("button", {
        name: createButtonText,
      });

      await userEvent.click(createButton);

      expect(heading).toBeInTheDocument();
    });
  });
});
