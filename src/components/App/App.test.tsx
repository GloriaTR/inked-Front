import auth, { AuthStateHook, IdTokenHook } from "react-firebase-hooks/auth";
import { Auth, User, signInWithPopup, signOut } from "firebase/auth";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { setupStore } from "../../store";
import { comicMock, comicsMock } from "../../mocks/comicsMock";
import paths from "../../paths/paths";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given an App component", () => {
  describe("When is rendered", () => {
    const user: Partial<User> = { displayName: "Juana" };

    const authStateHookMock: Partial<AuthStateHook> = [user as User];

    auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

    const store = setupStore({ comicsState: { comics: comicsMock } });

    test("Then it should show the heading 'inked'", () => {
      const expectedHeading = "inked";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show two links with the text 'My List' and 'Create'", () => {
      const expectedHomeText = "My List";
      const expectedCreateText = "Create";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const homeLink = screen.getByRole("link", { name: expectedHomeText });
      const createLink = screen.getByRole("link", { name: expectedCreateText });

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });

    test("Then it should show the logo's app with the alternate text 'Inked logo'", () => {
      const expectedAlternativeLogoText = "Inked logo";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const logoImage = screen.getByAltText(expectedAlternativeLogoText);

      expect(logoImage).toBeInTheDocument();
    });
  });

  const store = setupStore({ comicsState: { comics: comicsMock } });

  vi.mock("firebase/auth", async () => {
    const actual: Auth = await vi.importActual("firebase/auth");
    return {
      ...actual,
      signOut: vi.fn(),
      signInWithPopup: vi.fn(),
    };
  });

  describe("When the user is not logged in and clicks the 'Log in with GitHub' button", () => {
    test("Then the received function should be called", async () => {
      const authStateHookMock: Partial<AuthStateHook> = [null];
      auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

      const loginTextButton = /Log in with GitHub/i;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const loginButton = screen.getByRole("button", { name: loginTextButton });

      await userEvent.click(loginButton);

      expect(signInWithPopup).toHaveBeenCalled();
    });
  });

  describe("When the user is logged in and the logout button is clicked", () => {
    test("Then the received function should be called", async () => {
      const user: Partial<User> = { displayName: "Juana" };

      const authStateHookMock: Partial<AuthStateHook> = [user as User];

      auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

      const logOutButtonAltText = "Logout button";

      render(
        <MemoryRouter initialEntries={[paths.myList]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const logoutButton = screen.getByAltText(logOutButtonAltText);

      await userEvent.click(logoutButton);

      expect(signOut).toHaveBeenCalled();
    });
  });

  const user: Partial<User> = {
    displayName: "Juana",
    getIdToken: vi.fn().mockResolvedValue("token"),
  };

  const authStateHookMock: Partial<AuthStateHook> = [user as User];
  auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

  const useIdTokenHookMock: Partial<IdTokenHook> = [user as User];
  auth.useIdToken = vi.fn().mockReturnValue(useIdTokenHookMock);

  describe("When the user clicks on the delete icon of the card 'My Favorite Thing is Monsters'", () => {
    const store = setupStore({ comicsState: { comics: comicsMock } });

    test("Then it shouldn't show the title 'My Favorite Thing is Monsters' inside a heading", async () => {
      const expectedHeading = "My Favorite Thing is Monsters";

      const deleteButtonAltText = "Delete Card Icon";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      const deleteButton = await screen.findAllByAltText(deleteButtonAltText);

      await userEvent.click(deleteButton[0]);

      expect(heading).not.toBeInTheDocument();
    });
  });

  describe("When the user creates the comic 'My Favorite Thing is Monsters' through the Create page", () => {
    const store = setupStore({ comicsState: { comics: comicsMock } });

    test("Then it should show My List page with 'My Favorite Thing is Monsters' inside a heading", async () => {
      const textButton = "Create";

      const expectedHeading = "My Favorite Thing is Monsters";

      const graphicNovelImageInputLabel = "Graphic Novel image";
      const titleInputLabel = "Graphic Novel title";
      const authorNameInputLabel = "Author name";
      const synopsisInputLabel = "Synopsis";
      const pagesInputLabel = "Number of pages";
      const releaseInputLabel = "Year of release";
      const authorImageInputLabel = "Author image";
      const workInputLabel = "Notable work";
      const biographyInputLabel = "Author biography";

      const graphicNovelImageInputText = comicMock.image;
      const titleInputText = comicMock.title;
      const authorNameInputText = comicMock.authorName;
      const synopsisInputText = comicMock.synopsis;
      const pagesInputText = comicMock.numberPages;
      const releaseInputText = comicMock.releaseDate;
      const authorImageInputText = comicMock.authorImage;
      const workInputText = comicMock.authorNotableWork;
      const biographyInputText = comicMock.authorBiography;

      const config = { delay: null };

      render(
        <MemoryRouter initialEntries={["/create-graphic-novel"]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const graphicNovelImageInput = await screen.findByLabelText(
        graphicNovelImageInputLabel,
      );
      const titleInput = await screen.findByLabelText(titleInputLabel);
      const authorNameInput = await screen.findByLabelText(
        authorNameInputLabel,
      );
      const synopsisInput = await screen.findByLabelText(synopsisInputLabel);
      const pagesInput = await screen.findByLabelText(pagesInputLabel);
      const releaseInput = await screen.findByLabelText(releaseInputLabel);
      const authorImageInput = await screen.findByLabelText(
        authorImageInputLabel,
      );
      const workInput = await screen.findByLabelText(workInputLabel);
      const biographyInput = await screen.findByLabelText(biographyInputLabel);

      await userEvent.type(
        graphicNovelImageInput,
        graphicNovelImageInputText,
        config,
      );
      await userEvent.type(titleInput, titleInputText, config);
      await userEvent.type(authorNameInput, authorNameInputText, config);
      await userEvent.type(synopsisInput, synopsisInputText, config);
      await userEvent.type(pagesInput, pagesInputText.toString(), config);
      await userEvent.type(releaseInput, releaseInputText.toString(), config);
      await userEvent.type(authorImageInput, authorImageInputText, config);
      await userEvent.type(workInput, workInputText, config);
      await userEvent.type(biographyInput, biographyInputText, config);

      const button = await screen.findByRole("button", { name: textButton });
      await userEvent.click(button);

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'My Favorite Thing is Monsters' comic", () => {
    test("Then it should navigate to its detail page and show the comic 'My Favorite Thing is Monsters' with author data heading 'About the author'", async () => {
      const store = setupStore({ comicsState: { comics: comicsMock } });

      const detailPagePath = "/my-list/56fb9f23c733a4fut2810d7r";
      const comicHeading = "My Favorite Thing is Monsters Emil Ferris";
      const expectedHeading = "About the author";

      render(
        <MemoryRouter
          initialEntries={[paths.myList, detailPagePath]}
          initialIndex={0}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      const link = (
        await screen.findByRole("link", { name: comicHeading })
      ).closest("a")!;

      await userEvent.click(link);

      const comicHeadingAuthor = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(comicHeadingAuthor).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Read' button in the 'My Favorite Thing is Monsters' card", () => {
    test("Then it should toggle the button to 'Not Read'", async () => {
      const store = setupStore({
        comicsState: { comics: comicsMock },
      });

      const previousButtonText = "✔ Read";
      const expectedButtonName = "Not Read";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      );

      const button = await screen.findAllByRole("button", {
        name: previousButtonText,
      });

      await userEvent.click(button[0]);

      const buttonNotRead = await screen.findAllByRole("button", {
        name: expectedButtonName,
      });

      expect(buttonNotRead[0]).toBeInTheDocument();
    });
  });
});
