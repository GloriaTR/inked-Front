import { useEffect, useState } from "react";
import { Comic } from "../../types";
import Button from "../Button/Button";
import "./NewGraphicNovelForm.css";

interface NewGraphicNovelFormProps {
  actionOnSubmit: (newComic: Omit<Comic, "id">) => void;
}

const NewGraphicNovelForm = ({
  actionOnSubmit,
}: NewGraphicNovelFormProps): React.ReactElement => {
  const initialComicData: Omit<Comic, "id"> = {
    image: "",
    title: "",
    authorName: "",
    synopsis: "",
    genre: "",
    numberPages: 0,
    coverType: "",
    releaseDate: 0,
    authorImage: "",
    authorNotableWork: "",
    authorBiography: "",
    isRead: false,
  };

  const [newComic, setNewComic] = useState<Omit<Comic, "id">>(initialComicData);

  const [disabled, setDisabled] = useState(true);

  const changeNewComic = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setNewComic((newComic) => ({
      ...newComic,
      [event.target.id]: event.target.value,
    }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newComic);
  };

  useEffect(() => {
    setDisabled(
      !Object.values(newComic).every((value) => {
        return value.toString().length >= 1;
      }),
    );
  }, [newComic]);

  return (
    <form className="new-graphic-novel" onSubmit={submitForm}>
      <label htmlFor="image">Graphic Novel image</label>
      <input
        type="url"
        id="image"
        className="new-graphic-novel__input"
        required
        value={newComic.image}
        onChange={changeNewComic}
      />
      <label htmlFor="title">Graphic Novel title</label>
      <input
        type="text"
        id="title"
        className="new-graphic-novel__input"
        required
        value={newComic.title}
        onChange={changeNewComic}
      />
      <label htmlFor="authorName">Author name</label>
      <input
        type="text"
        id="authorName"
        className="new-graphic-novel__input"
        required
        value={newComic.authorName}
        onChange={changeNewComic}
      />
      <label htmlFor="synopsis">Synopsis</label>
      <textarea
        id="synopsis"
        cols={20}
        rows={4}
        className="new-graphic-novel__text-area"
        required
        value={newComic.synopsis}
        onChange={changeNewComic}
      ></textarea>
      <label htmlFor="genre">Genre</label>
      <select
        id="genre"
        className="new-graphic-novel__select"
        value={newComic.genre}
        onChange={changeNewComic}
      >
        <option value="">--Select a genre--</option>
        <option value="adventure">Adventure</option>
        <option value="fantasy">Fantasy</option>
        <option value="fiction">Fiction</option>
        <option value="historical">Historical</option>
        <option value="memoir">Memoir</option>
        <option value="romance">Romance</option>
        <option value="thriller">Thriller</option>
        <option value="war">War</option>
      </select>
      <label htmlFor="numberPages">Number of pages</label>
      <input
        type="number"
        id="numberPages"
        className="new-graphic-novel__input"
        value={newComic.numberPages === 0 ? "" : newComic.numberPages}
        onChange={changeNewComic}
      />
      <label htmlFor="coverType">Type of cover</label>
      <select
        id="coverType"
        className="new-graphic-novel__select"
        value={newComic.coverType}
        onChange={changeNewComic}
      >
        <option value="">--Select type of cover--</option>
        <option value="hardcover">Hardcover</option>
        <option value="paperback">Paperback</option>
        <option value="softcover">Softcover</option>
      </select>
      <label htmlFor="releaseDate">Year of release</label>
      <input
        type="number"
        id="releaseDate"
        min="1980"
        max="2023"
        className="new-graphic-novel__input"
        value={newComic.releaseDate === 0 ? "" : newComic.releaseDate}
        onChange={changeNewComic}
      />
      <label htmlFor="authorImage">Author image</label>
      <input
        type="url"
        id="authorImage"
        className="new-graphic-novel__input"
        required
        value={newComic.authorImage}
        onChange={changeNewComic}
      />
      <label htmlFor="authorNotableWork">Notable work</label>
      <input
        type="text"
        id="authorNotableWork"
        className="new-graphic-novel__input"
        required
        value={newComic.authorNotableWork}
        onChange={changeNewComic}
      />
      <label htmlFor="authorBiography">Author biography</label>
      <textarea
        id="authorBiography"
        cols={20}
        rows={4}
        className="new-graphic-novel__text-area"
        required
        value={newComic.authorBiography}
        onChange={changeNewComic}
      ></textarea>
      <Button className="button button-form" type="submit" disabled={disabled}>
        Create
      </Button>
    </form>
  );
};

export default NewGraphicNovelForm;
