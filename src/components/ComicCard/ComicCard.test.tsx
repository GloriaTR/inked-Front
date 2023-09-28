import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { comicMock, comicsMock } from "../../mocks/comicsMock";
import ComicCard from "./ComicCard";
import { setupStore } from "../../store";

describe("Given a ComicCard component", () => {
  const store = setupStore({ comicsState: { comics: comicsMock } });

  describe("When is rendered", () => {
    test("Then it should show the heading 'My Favorite Thing is Monsters'", () => {
      const expectedHeading = `${comicMock.title}`;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ComicCard comic={comicMock} isLazy={false} />
          </BrowserRouter>
        </Provider>,
      );

      const comicHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(comicHeading).toBeInTheDocument();
    });

    test("Then it should show an image with the alternate text 'Cover of graphic novel My Favorite Thing is Monsters'", () => {
      const expectedAlternativeImageText = `Cover of graphic novel ${comicMock.title}`;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ComicCard comic={comicMock} isLazy={false} />
          </BrowserRouter>
        </Provider>,
      );

      const comicImage = screen.getByAltText(expectedAlternativeImageText);

      expect(comicImage).toBeInTheDocument();
    });

    test("Then it should show the comic author name 'Emil Ferris' and the release data information 'Published in 2016'", () => {
      const expectedComicAuthor = "Emil Ferris";
      const expectedComicReleaseDate = `Published in ${comicMock.releaseDate}`;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ComicCard comic={comicMock} isLazy={false} />
          </BrowserRouter>
        </Provider>,
      );

      const comicAuthor = screen.getByText(expectedComicAuthor);
      const comicReleaseDate = screen.getByText(expectedComicReleaseDate);

      expect(comicAuthor).toBeInTheDocument();
      expect(comicReleaseDate).toBeInTheDocument();
    });
  });
});
