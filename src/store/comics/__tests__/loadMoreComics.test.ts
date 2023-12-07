import { comicsReducer, loadMoreComicsActionCreator } from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a comicsSlice reducer", () => {
  describe("When it receives a current state with a list of 5 comics and a loadMoreComics action", () => {
    test("Then it should return a list of 10 comics", () => {
      const limitComics = 5;

      const currentComicsState: ComicsState = {
        comics: [],
        totalComics: 0,
        limit: limitComics,
      };

      const loadMoreComicsAction = loadMoreComicsActionCreator();

      const newComicsState = comicsReducer(
        currentComicsState,
        loadMoreComicsAction,
      );

      expect(newComicsState.limit).toBe(limitComics + 5);
    });
  });
});
