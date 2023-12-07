import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Auth } from "firebase/auth";
import GraphicNovelsListPage from "./GraphicNovelsListPage";
import { setupStore } from "../../store";
import { comicsMock, loadMoreComicsMock } from "../../mocks/comicsMock";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a GraphicNovelsListPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show 'Your Graphic Novels' inside a heading", () => {
      vi.mock("react", async () => {
        const actual: Auth = await vi.importActual("react");
        return {
          ...actual,
          useEffect: vi.fn(),
        };
      });

      const store = setupStore({
        comicsState: {
          comics: comicsMock,
          totalComics: comicsMock.length,
          limit: 5,
        },
      });

      const expectedHeading = "Your Graphic Novels";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When is rendered and there's no graphic novels listed", () => {
    vi.mock("react", async () => {
      const actual: Auth = await vi.importActual("react");
      return {
        ...actual,
        useEffect: vi.fn(),
      };
    });

    const limitComics = 5;

    const store = setupStore({
      comicsState: { comics: [], totalComics: 0, limit: limitComics },
    });

    test("Then it should show the heading 'Your Graphic Novels'", () => {
      const expectedHeading = "Your Graphic Novels";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("And the the text 'Start your graphic novel adventure now. Press the button below to start crafting your own!'", async () => {
      const expectedNoComicsMessage =
        "Start your graphic novel adventure now. Press the button below to start crafting your own!";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const noComicsMessage = await screen.findByText(expectedNoComicsMessage);

      expect(noComicsMessage).toBeInTheDocument();
    });
  });

  describe("When there is a list of 5 comics and the user clicks on the button 'Load more'", () => {
    test("Then it should show the next 5 comics", async () => {
      const limitNumber = 5;

      const store = setupStore({
        comicsState: {
          comics: loadMoreComicsMock,
          totalComics: loadMoreComicsMock.length,
          limit: limitNumber,
        },
      });

      const loadMoreButtonText = "Load More";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      await screen.findByRole("heading", { name: loadMoreComicsMock[4].title });

      const button = screen.getByRole("button", { name: loadMoreButtonText });
      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        name: loadMoreComicsMock[6].title,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
