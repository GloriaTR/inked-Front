import { UiState } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When is called with a showLoading action and a currentState with a property isLoading set to false", () => {
    test("Then it should return a new state with the property isLoading set to true", () => {
      const currentUiState: UiState = {
        isLoading: false,
      };

      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, showLoadingAction);

      expect(newUiState).toHaveProperty("isLoading", true);
    });
  });
});
