import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
