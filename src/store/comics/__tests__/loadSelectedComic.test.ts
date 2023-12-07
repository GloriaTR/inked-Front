import { comicMock, comicsMock } from "../../../mocks/comicsMock";
import { Comic } from "../../../types";
import { comicsReducer, loadSelectedComicActionCreator } from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a comicsSlice reducer", () => {
  describe("When it receives a loadSelectedComic action with the comic 'My Favorite Thing is Monsters'", () => {
    test("Then it should return a new state with the comic 'My Favorite Thing is Monsters' loaded", () => {
      const limitNumber = 5;

      const currentComicsState: ComicsState = {
        comics: comicsMock,
        totalComics: 2,
        limit: limitNumber,
      };

      const selectedComic: Comic = comicMock;

      const loadSelectedComicAction =
        loadSelectedComicActionCreator(selectedComic);

      const newComicsState = comicsReducer(
        currentComicsState,
        loadSelectedComicAction,
      );

      expect(newComicsState).toHaveProperty("selectedComic", selectedComic);
    });
  });
});
