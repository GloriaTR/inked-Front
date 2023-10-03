import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Auth } from "firebase/auth";
import GraphicNovelsListPage from "./GraphicNovelsListPage";
import { setupStore } from "../../store";
import { comicsMock } from "../../mocks/comicsMock";
import { BrowserRouter } from "react-router-dom";

vi.mock("react", async () => {
  const actual: Auth = await vi.importActual("react");
  return {
    ...actual,
    useEffect: vi.fn(),
  };
});

describe("Given a GraphicNovelsListPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show 'Your Graphic Novels' inside a heading", () => {
      const store = setupStore({ comicsState: { comics: comicsMock } });

      const expectedHeading = "Your Graphic Novels";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When is rendered and there's no graphic novels listed", () => {
    const store = setupStore({ comicsState: { comics: [] } });

    test("Then it should show the heading 'Your Graphic Novels'", () => {
      const expectedHeading = "Your Graphic Novels";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });

    test("And the the text 'Start your graphic novel adventure now. Press the button below to start crafting your own!'", async () => {
      const expectedNoComicsMessage =
        "Start your graphic novel adventure now. Press the button below to start crafting your own!";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GraphicNovelsListPage />
          </BrowserRouter>
        </Provider>,
      );

      const noComicsMessage = await screen.findByText(expectedNoComicsMessage);

      expect(noComicsMessage).toBeInTheDocument();
    });
  });
});
