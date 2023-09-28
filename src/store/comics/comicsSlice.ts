import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComicsState } from "./types.js";
import { Comic } from "../../types.js";

const initialComicsState: ComicsState = {
  comics: [],
  selectedComic: {} as Comic,
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState: initialComicsState,
  reducers: {
    loadComics: (
      currentComicsState,
      action: PayloadAction<Comic[]>,
    ): ComicsState => ({
      ...currentComicsState,
      comics: action.payload,
    }),
    deleteComic: (
      currentComicsState,
      action: PayloadAction<string>,
    ): ComicsState => ({
      ...currentComicsState,
      comics: currentComicsState.comics.filter(
        (comic) => comic.id !== action.payload,
      ),
    }),
    addComic: (
      currentComicState,
      action: PayloadAction<Comic>,
    ): ComicsState => ({
      ...currentComicState.comics,
      comics: [...currentComicState.comics, action.payload],
    }),
    loadSelectedComic: (
      currentComicState,
      action: PayloadAction<Comic>,
    ): ComicsState => ({
      ...currentComicState,
      selectedComic: action.payload,
    }),
    toggleSelectedComic: (
      currentComicState,
      action: PayloadAction<Comic>,
    ): ComicsState => ({
      ...currentComicState,
      selectedComic: action.payload,
      comics: currentComicState.comics.map((comic) =>
        comic.id === action.payload.id ? action.payload : comic,
      ),
    }),
  },
});

export const comicsReducer = comicsSlice.reducer;
export const {
  loadComics: loadComicsActionCreator,
  deleteComic: deleteComicActionCreator,
  addComic: addComicActionCreator,
  loadSelectedComic: loadSelectedComicActionCreator,
  toggleSelectedComic: toggleSelectedComicActionCreator,
} = comicsSlice.actions;
