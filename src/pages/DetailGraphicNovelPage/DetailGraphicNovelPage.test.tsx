import { render, screen } from "@testing-library/react";
import { setupStore } from "../../store";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailGraphicNovelPage from "./DetailGraphicNovelPage";
import { comicMock, comicsMock } from "../../mocks/comicsMock";
import paths from "../../paths/paths";

const limitNumber = 5;

const store = setupStore({
  comicsState: {
    comics: comicsMock,
    selectedComic: comicMock,
    totalComics: 2,
    limit: limitNumber,
  },
});

const pathSelectedComic = `${paths.myList}/${comicMock.id}`;

describe("Given a DetailGraphicNovelPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show 'My Favorite Thing is Monsters' inside a heading", async () => {
      const expectedHeading = "My Favorite Thing is Monsters";

      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={[pathSelectedComic]}>
            <Routes>
              <Route
                path={"/my-list/:id"}
                element={<DetailGraphicNovelPage />}
              ></Route>
            </Routes>
          </MemoryRouter>
        </Provider>,
      );

      const heading = await screen.findByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show the alternative texts 'Cover of graphic novel My Favorite Thing is Monsters' and 'Close-up of author Emil Ferris'", async () => {
    const expectedAlternativeComicImageText =
      "Cover of graphic novel My Favorite Thing is Monsters";
    const expectedAlternativeAuthorImageText = "Close-up of author Emil Ferris";

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[pathSelectedComic]}>
          <Routes>
            <Route
              path={"/my-list/:id"}
              element={<DetailGraphicNovelPage />}
            ></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const comicImage = await screen.findByAltText(
      expectedAlternativeComicImageText,
    );
    const authorImage = await screen.findByAltText(
      expectedAlternativeAuthorImageText,
    );

    expect(comicImage).toBeInTheDocument();
    expect(authorImage).toBeInTheDocument();
  });
});
