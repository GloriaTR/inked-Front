import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Comic } from "../../types";
import Button from "../Button/Button";
import {
  deleteComicActionCreator,
  toggleSelectedComicActionCreator,
} from "../../store/comics/comicsSlice";
import useComicsApi from "../../hooks/useComicsApi";
import paths from "../../paths/paths";
import "./ComicCard.css";

interface ComicCardProps {
  comic: Comic;
  isLazy: boolean;
}

const ComicCard = ({
  comic: { id, title, authorName, releaseDate, image, isRead },
  isLazy,
}: ComicCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { deleteComic, toggleComic } = useComicsApi();

  const deleteComicById = async (id: string) => {
    await deleteComic(id);
    dispatch(deleteComicActionCreator(id));
  };

  const toggleIsRead = async () => {
    const readComic = await toggleComic(id, isRead);

    dispatch(toggleSelectedComicActionCreator(readComic));
  };

  return (
    <article className="comic">
      <img
        src={image}
        alt={`Cover of graphic novel ${title}`}
        className="comic__image"
        width="92"
        height="135"
        {...(isLazy && { loading: "lazy" })}
      />
      <span className="comic__release-date">Published in {releaseDate}</span>
      <div className="comic-info">
        <NavLink className="comic-navigation" to={`${paths.myList}/${id}`}>
          <h3 className="comic__title">{title}</h3>
          <span className="comic__author">{authorName}</span>
        </NavLink>
      </div>
      <Button
        className="button button-card"
        actionOnClick={() => deleteComicById(id)}
      >
        <img
          src="/img/deleteIcon.svg"
          alt="Delete Card Icon"
          width="50"
          height="50"
        />
      </Button>
      <Button
        className={`button comic__read-button comic__read-button--${
          isRead ? "read" : "unread"
        }`}
        actionOnClick={toggleIsRead}
      >{`${isRead ? "✔ Read" : "Not Read"}`}</Button>
    </article>
  );
};

export default ComicCard;
