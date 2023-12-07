import { comicMock, comicsMock } from "../../../mocks/comicsMock";
import { Comic } from "../../../types";
import { addComicActionCreator, comicsReducer } from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a comicsSlice reducer", () => {
  describe("When it receives an addComic action with a new comic", () => {
    test("Then it should return a new state with a new comic added", () => {
      const limitNumber = 5;

      const currentComicsState: ComicsState = {
        comics: comicsMock,
        totalComics: 2,
        limit: limitNumber,
      };

      const comicToAdd: Comic = comicMock;

      const addComicAction = addComicActionCreator(comicToAdd);

      const newComicsState = comicsReducer(currentComicsState, addComicAction);

      expect(newComicsState.comics).toContain(comicToAdd);
    });
  });
});
