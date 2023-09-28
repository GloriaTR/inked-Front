import { render, screen } from "@testing-library/react";
import NewGraphicNovelForm from "./NewGraphicNovelForm";
import Button from "../Button/Button";
import { comicMock } from "../../mocks/comicsMock";
import userEvent from "@testing-library/user-event";

describe("Given a NewGraphicNovelForm component", () => {
  const graphicNovelImageInputLabel = "Graphic Novel image";
  const titleInputLabel = "Graphic Novel title";
  const authorNameInputLabel = "Author name";
  const synopsisInputLabel = "Synopsis";
  const pagesInputLabel = "Number of pages";
  const releaseInputLabel = "Year of release";
  const authorImageInputLabel = "Author image";
  const workInputLabel = "Notable work";
  const biographyInputLabel = "Author biography";
  const mockFunction = vi.fn();

  describe("When is rendered", () => {
    test("Then it should show the fields 'Graphic Novel image', 'Graphic Novel title', 'Author name', 'Synopsis', 'Number of pages', 'Year of release', 'Author image', 'Notable work' and 'Author biography'", () => {
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

      expect(graphicNovelImageInput).toBeInTheDocument();
      expect(titleInput).toBeInTheDocument();
      expect(authorNameInput).toBeInTheDocument();
      expect(synopsisInput).toBeInTheDocument();
      expect(pagesInput).toBeInTheDocument();
      expect(releaseInput).toBeInTheDocument();
      expect(authorImageInput).toBeInTheDocument();
      expect(workInput).toBeInTheDocument();
      expect(biographyInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create", () => {
      const textButton = "Create";

      const mockFunction = vi.fn();

      render(
        <Button actionOnClick={mockFunction} className="">
          {textButton}
        </Button>,
      );

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user fills all the fields in the form", () => {
    const graphicNovelImageInputText = comicMock.image;
    const titleInputText = comicMock.title;
    const authorNameInputText = comicMock.authorName;
    const synopsisInputText = comicMock.synopsis;
    const pagesInputText = comicMock.numberPages;
    const releaseInputText = comicMock.releaseDate;
    const authorImageInputText = comicMock.authorImage;
    const workInputText = comicMock.authorNotableWork;
    const biographyInputText = comicMock.authorBiography;

    test("Then it should show the typed texts and values", async () => {
      const config = { delay: null };

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

      expect(graphicNovelImageInput).toHaveValue(graphicNovelImageInputText);
      expect(titleInput).toHaveValue(titleInputText);
      expect(authorNameInput).toHaveValue(authorNameInputText);
      expect(synopsisInput).toHaveValue(synopsisInputText);
      expect(pagesInput).toHaveValue(pagesInputText);
      expect(releaseInput).toHaveValue(releaseInputText);
      expect(authorImageInput).toHaveValue(authorImageInputText);
      expect(workInput).toHaveValue(workInputText);
      expect(biographyInput).toHaveValue(biographyInputText);
    });

    test("Then the action on submit function should be called", async () => {
      const textButton = "Create";

      const config = { delay: null };

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
