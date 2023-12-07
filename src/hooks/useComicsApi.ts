import axios from "axios";
import { useCallback } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Comic, ComicApi } from "../types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/ui/uiSlice";
import showFeedback from "../showFeedback/showFeedback";
import paths from "../paths/paths";

const useComicsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user] = useIdToken(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  interface Params {
    limit: number;
  }

  const getComics = useCallback(
    async ({
      limit,
    }: Params): Promise<{
      comics: Comic[];
      totalComics: number;
    }> => {
      dispatch(showLoadingActionCreator());

      const token = await user?.getIdToken();

      try {
        const { data } = await axios.get<{
          comics: ComicApi[];
          totalComics: number;
        }>(`${apiUrl}/comics?limit=${limit}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(hideLoadingActionCreator());

        const comics = data.comics.map<Comic>(({ _id, ...comics }) => ({
          ...comics,
          id: _id,
        }));

        return { comics, totalComics: data.totalComics };
      } catch {
        dispatch(hideLoadingActionCreator());

        showFeedback("Couldn't load Graphic Novels", "error");

        throw new Error("Couldn't load Graphic Novels");
      }
    },
    [apiUrl, user, dispatch],
  );

  const deleteComic = async (id: string) => {
    dispatch(showLoadingActionCreator());

    const token = await user?.getIdToken();

    try {
      const {
        data: { message },
      } = await axios.delete(`${apiUrl}/comics/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoadingActionCreator());
      showFeedback("Graphic Novel deleted", "success");

      return message;
    } catch {
      dispatch(hideLoadingActionCreator());

      showFeedback("Graphic Novel not deleted", "error");

      throw new Error("Graphic Novel not deleted");
    }
  };

  const addComic = async (newComic: Omit<Comic, "id">) => {
    dispatch(showLoadingActionCreator());

    const token = await user?.getIdToken();

    try {
      const { data: apiComic } = await axios.post(
        `${apiUrl}/comics`,
        newComic,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const comic = {
        ...apiComic.comic,
        id: apiComic.comic._id,
      };
      delete comic._id;

      dispatch(hideLoadingActionCreator());

      showFeedback("Graphic Novel created", "success");

      return comic;
    } catch {
      dispatch(hideLoadingActionCreator());

      showFeedback("Graphic Novel not created", "error");
      throw new Error("Graphic Novel not created");
    }
  };

  const getComicById = useCallback(
    async (id: string) => {
      dispatch(showLoadingActionCreator());
      const token = await user?.getIdToken();

      try {
        const { data: apiComic } = await axios.get(`${apiUrl}/comics/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const comic = {
          ...apiComic.comic,
          id: apiComic.comic._id,
        };
        delete comic._id;

        dispatch(hideLoadingActionCreator());

        return comic;
      } catch {
        dispatch(hideLoadingActionCreator());

        showFeedback("Couldn't load the Graphic Novel", "error");

        navigate(paths.myList);
        throw new Error("Couldn't load the Graphic Novel");
      }
    },
    [apiUrl, user, dispatch, navigate],
  );

  const toggleComic = async (id: string, isRead: boolean) => {
    dispatch(showLoadingActionCreator());

    const token = await user?.getIdToken();

    const read = isRead ? "true" : "false";

    try {
      const { data: apiComic } = await axios.patch(
        `${apiUrl}/comics/${id}`,
        read,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/plain",
          },
        },
      );

      const comic = {
        ...apiComic.comic,
        id: apiComic.comic._id,
      };
      delete comic._id;

      dispatch(hideLoadingActionCreator());

      return comic;
    } catch {
      dispatch(hideLoadingActionCreator());

      showFeedback("Couldn't update the Graphic Novel", "error");

      throw new Error("Couldn't update the Graphic Novel");
    }
  };

  return { getComics, deleteComic, addComic, getComicById, toggleComic };
};

export default useComicsApi;
