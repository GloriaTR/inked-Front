import { comicsMock } from "../../../mocks/comicsMock";
import { comicsReducer, deleteComicActionCreator } from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a comicsReducer reducer", () => {
  describe("When it receives a deleteComic action with the number id '56fb9f23c733a4fut2810d7r'", () => {
    test("Then it should return a new state without the comic with the id number '56fb9f23c733a4fut2810d7r'", () => {
      const currentComicsState: ComicsState = { comics: comicsMock };
      const comicIdToDelete = "56fb9f23c733a4fut2810d7r";

      const deleteComicAction = deleteComicActionCreator(comicIdToDelete);

      const newComicsState = comicsReducer(
        currentComicsState,
        deleteComicAction,
      );

      const comicToDelete = currentComicsState.comics.find(
        ({ id }) => id === comicIdToDelete,
      );

      expect(newComicsState).not.toContain(comicToDelete);
    });
  });
});
