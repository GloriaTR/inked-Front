import { useAppSelector } from "../../store";
import ComicCard from "../ComicCard/ComicCard";
import "./ComicsList.css";

const ComicsList = (): React.ReactElement => {
  const { comics } = useAppSelector((state) => state.comicsState);

  return (
    <ul className="comics-list">
      {comics.map((comic, comicPosition) => (
        <li key={comic.id}>
          <ComicCard comic={comic} isLazy={comicPosition > 0} />
        </li>
      ))}
    </ul>
  );
};

export default ComicsList;
