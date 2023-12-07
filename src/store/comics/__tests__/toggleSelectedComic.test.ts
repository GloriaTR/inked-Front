import { comicToggleMock, comicsMock } from "../../../mocks/comicsMock";
import {
  comicsReducer,
  toggleSelectedComicActionCreator,
} from "../comicsSlice";
import { ComicsState } from "../types";

describe("Given a toggleSelectedComic reducer", () => {
  describe("When it receives a toggleComic action with a current comic list and an id '56fb9f23c733a4fut2810d7r'", () => {
    test("Then it should return a state with the property 'isRead' of the comic with id '56fb9f23c733a4fut2810d7r' set to false", () => {
      const limitNumber = 5;

      const currentUserState: ComicsState = {
        comics: comicsMock,
        totalComics: 2,
        limit: limitNumber,
      };

      const toggleComicAction =
        toggleSelectedComicActionCreator(comicToggleMock);

      const newComicState = comicsReducer(currentUserState, toggleComicAction);

      expect(newComicState.comics[0]).toHaveProperty("isRead", false);
    });
  });
});
