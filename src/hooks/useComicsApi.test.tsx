import { renderHook } from "@testing-library/react";
import { User } from "firebase/auth";
import auth, { AuthStateHook } from "react-firebase-hooks/auth";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../store";
import {
  comicIdMock,
  comicMock,
  comicToggleMock,
  comicsMock,
} from "../mocks/comicsMock";
import useComicsApi from "./useComicsApi";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  vi.clearAllMocks();
});

const user: Partial<User> = {
  getIdToken: vi.fn().mockResolvedValue("token"),
};

const authStateHookMock: Partial<AuthStateHook> = [user as User];
auth.useIdToken = vi.fn().mockReturnValue([user as User]);
auth.useAuthState = vi.fn().mockReturnValue(authStateHookMock);

const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
  const store = setupStore({
    comicsState: {
      comics: comicsMock,
      totalComics: comicsMock.length,
      limit: 5,
    },
  });

  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("Given a getComics function", () => {
  describe("When is called", () => {
    test("Then it should return a list of comics when resolving successfully", async () => {
      const expectedComics = {
        comics: comicsMock,
        totalComics: comicsMock.length,
      };

      const {
        result: {
          current: { getComics },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const comics = await getComics({ filter: "✔ Read" });

      expect(comics).toStrictEqual(expectedComics);
    });

    test("Then it should throw the error 'Couldn't load Graphic Novels' when rejecting", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Couldn't load Graphic Novels");

      const {
        result: {
          current: { getComics },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const comics = getComics({ filter: "✔ Read" });

      expect(comics).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a deleteComic function", () => {
  describe("When is called with id `${comicsMock[0].id}`", () => {
    test("Then it should show the message 'Graphic Novel deleted' when resolving successfully", async () => {
      const expectedMessage = "Graphic Novel deleted";
      const comicIdToDelete = `${comicsMock[0].id}`;

      const {
        result: {
          current: { deleteComic },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const message = await deleteComic(comicIdToDelete);

      expect(message).toStrictEqual(expectedMessage);
    });
  });

  describe("When is called and the comic can't be deleted", () => {
    test("Then it should show the error 'Graphic Novel not deleted'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Graphic Novel not deleted");
      const comicIdToDelete = `${comicsMock[0].id}`;

      const {
        result: {
          current: { deleteComic },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const message = deleteComic(comicIdToDelete);

      expect(message).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given an addComic function", () => {
  describe("When is called with 'My Favorite Thing is Monsters' comic", () => {
    test("Then it should add the comic when resolving successfully", async () => {
      const {
        result: {
          current: { addComic },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const newComic = await addComic(comicMock);

      expect(newComic).toStrictEqual(comicMock);
    });
  });

  describe("When is called and the comic coudln't be created", () => {
    test("Then it should the error message 'Graphic Novel not created'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Graphic Novel not created");
      const comictoAdd = comicMock;

      const {
        result: {
          current: { addComic },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const newComic = addComic(comictoAdd);

      expect(newComic).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a getComicById function", () => {
  describe("When is called with id `${comicIdMock}`", () => {
    test("Then it should return the comic 'My Favorite Thing is Monsters' when resolving successfully", async () => {
      const expectedComic = comicMock;

      const {
        result: {
          current: { getComicById },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const comicById = await getComicById(comicIdMock);

      expect(comicById).toStrictEqual(expectedComic);
    });
  });

  describe("When is called with comic 'My Favorite Thing is Monsters' and can't be loaded", () => {
    test("Then it should show the error message 'Couldn't load the Graphic Novel'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Couldn't load the Graphic Novel");
      const comicIdtoLoad = comicMock.id;

      const {
        result: {
          current: { getComicById },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const message = getComicById(comicIdtoLoad);

      expect(message).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a toggleComic function", () => {
  describe("When is called with id '56fb9f23c733a4fut2810d7r' and a modification of the isRead property", () => {
    test("Then it should return the comic 'My Favorite Thing is Monsters' and the property isRead set to 'false'", async () => {
      const {
        result: {
          current: { toggleComic },
        },
      } = renderHook(() => useComicsApi(), { wrapper });

      const modifiedComic = await toggleComic(
        comicsMock[0].id,
        comicToggleMock.isRead,
      );

      expect(modifiedComic).toHaveProperty("isRead", false);
    });

    describe("When is called with id '56fb9f23c733a4fut2810d7r', a modification of the isRead property and there is an error", () => {
      test("Then it should show the error message 'Couldn't update the Graphic Novel'", () => {
        server.resetHandlers(...errorHandlers);

        const expectedError = new Error("Couldn't update the Graphic Novel");

        const {
          result: {
            current: { toggleComic },
          },
        } = renderHook(() => useComicsApi(), { wrapper });

        const message = toggleComic(comicIdMock, comicsMock[0].isRead);

        expect(message).rejects.toThrowError(expectedError);
      });
    });
  });
});
