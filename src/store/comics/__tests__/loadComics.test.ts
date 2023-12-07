import { comicsMock } from "../../../mocks/comicsMock";
import { Comic } from "../../../types";
import { comicsReducer, loadComicsActionCreator } from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a comicsSlice reducer", () => {
  describe("When it receives a loadComics action with comics", () => {
    test("Then it should return a new state with the comics 'Persepolis' and 'My Favorite Thing is Monsters' loaded", () => {
      const limitComics = 5;

      const currentComicsState: ComicsState = {
        comics: [],
        totalComics: 0,
        limit: limitComics,
      };

      const comics: Comic[] = comicsMock;

      const loadComicAction = loadComicsActionCreator({
        comics: comics,
        totalComics: comics.length,
      });

      const newComicsState = comicsReducer(currentComicsState, loadComicAction);

      expect(newComicsState).toHaveProperty("comics", comics);
    });
  });
});
