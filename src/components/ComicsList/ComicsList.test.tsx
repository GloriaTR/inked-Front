import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ComicsList from "./ComicsList";
import { BrowserRouter } from "react-router-dom";
import { comicsMock } from "../../mocks/comicsMock";
import { setupStore } from "../../store";

const limitNumber = 5;

describe("Given a ComicsList component", () => {
  describe("When is rendered with the list of comics 'Persepolis' and 'My Favorite Thing is Monsters'", () => {
    test("Then it should show 'Persepolis' and 'My Favorite Thing is Monsters' headings", () => {
      const store = setupStore({
        comicsState: { comics: comicsMock, totalComics: 2, limit: limitNumber },
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ComicsList />
          </BrowserRouter>
        </Provider>,
      );

      comicsMock.forEach(({ title }) => {
        const comicTitle = `${title}`;
        const heading = screen.getByRole("heading", {
          name: comicTitle,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
