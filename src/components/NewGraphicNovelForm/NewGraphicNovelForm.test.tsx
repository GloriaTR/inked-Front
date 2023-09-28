import { render, screen } from "@testing-library/react";
import NewGraphicNovelForm from "./NewGraphicNovelForm";
import { comicMock } from "../../mocks/comicsMock";
import userEvent from "@testing-library/user-event";

describe("Given a NewGraphicNovelForm component", () => {
  describe("When the user fills all the fields in the form", () => {
    test("Then the action on submit function should be called", async () => {
      const mockFunction = vi.fn();

      const config = { delay: null };

      const textButton = "Create";

      const graphicNovelImageInputLabel = "Graphic Novel image";
      const titleInputLabel = "Graphic Novel title";
      const authorNameInputLabel = "Author name";
      const synopsisInputLabel = "Synopsis";
      const pagesInputLabel = "Number of pages";
      const releaseInputLabel = "Year of release";
      const authorImageInputLabel = "Author image";
      const workInputLabel = "Notable work";
      const biographyInputLabel = "Author biography";

      const graphicNovelImageInputText = comicMock.image;
      const titleInputText = comicMock.title;
      const authorNameInputText = comicMock.authorName;
      const synopsisInputText = comicMock.synopsis;
      const pagesInputText = comicMock.numberPages;
      const releaseInputText = comicMock.releaseDate;
      const authorImageInputText = comicMock.authorImage;
      const workInputText = comicMock.authorNotableWork;
      const biographyInputText = comicMock.authorBiography;

      render(<NewGraphicNovelForm actionOnSubmit={mockFunction} />);

      const graphicNovelImageInput = screen.getByLabelText(
        graphicNovelImageInputLabel,
      );
      const titleInput = screen.getByLabelText(titleInputLabel);
      const authorNameInput = screen.getByLabelText(authorNameInputLabel);
      const synopsisInput = screen.getByLabelText(synopsisInputLabel);
      const pagesInput = screen.getByLabelText(pagesInputLabel);
      const releaseInput = screen.getByLabelText(releaseInputLabel);
      const authorImageInput = screen.getByLabelText(authorImageInputLabel);
      const workInput = screen.getByLabelText(workInputLabel);
      const biographyInput = screen.getByLabelText(biographyInputLabel);

      await userEvent.type(
        graphicNovelImageInput,
        graphicNovelImageInputText,
        config,
      );
      await userEvent.type(titleInput, titleInputText, config);
      await userEvent.type(authorNameInput, authorNameInputText, config);
      await userEvent.type(synopsisInput, synopsisInputText, config);
      await userEvent.type(pagesInput, pagesInputText.toString(), config);
      await userEvent.type(releaseInput, releaseInputText.toString(), config);
      await userEvent.type(authorImageInput, authorImageInputText, config);
      await userEvent.type(workInput, workInputText, config);
      await userEvent.type(biographyInput, biographyInputText, config);

      const button = screen.getByRole("button", { name: textButton });
      await userEvent.click(button);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
