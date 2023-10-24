import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useComicsApi from "../../hooks/useComicsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSelectedComicActionCreator } from "../../store/comics/comicsSlice";
import "./DetailGraphicNovelPage.css";

const DetailGraphicNovelPage = (): React.ReactElement => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { getComicById } = useComicsApi();

  const [user] = useAuthState(auth);

  const selectedComic = useAppSelector(
    (state) => state.comicsState.selectedComic,
  );

  useEffect(() => {
    (async () => {
      if (user && id) {
        const selectedComic = await getComicById(id);

        dispatch(loadSelectedComicActionCreator(selectedComic));
      }
    })();
  }, [dispatch, getComicById, user, id]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Inked | ${selectedComic?.title}`}</title>
          <meta
            name="description"
            content={`See all information regarding ${selectedComic?.title}`}
          ></meta>
        </Helmet>
      </HelmetProvider>
      <div className="detail">
        <div className="detail-image">
          <img
            src={selectedComic?.image}
            alt={`Cover of graphic novel ${selectedComic?.title}`}
            width="92"
            height="135"
            className="detail-image__comic"
          />
        </div>
        <h2 className="detail__title">{selectedComic?.title}</h2>
        <span className="detail__author">{selectedComic?.authorName}</span>
        <p className="detail__synopsis">{selectedComic?.synopsis}</p>
        <div className="detail-data">
          <div className="detail-data__genre">
            <span>Genre</span>
            <span className="detail-data__type-genre">
              {selectedComic?.genre}
            </span>
          </div>
          <span className="detail-data__pages-cover">
            {selectedComic?.numberPages} pages, {selectedComic?.coverType}
          </span>
          <span className="detail-data__release-date">
            First published in {selectedComic?.releaseDate}
          </span>
        </div>
        <h3 className="detail-author__title">About the author</h3>
        <div className="detail-author-data">
          <img
            src={selectedComic?.authorImage}
            alt={`Close-up of author ${selectedComic?.authorName}`}
            width="70"
            height="70"
            className="detail-author__image"
          />
          <div className="detail-author__notablework">
            <span className="detail-author__work">Notable work:</span>
            <span>{selectedComic?.authorNotableWork}</span>
          </div>
        </div>
        <p className="detail-author__biography">
          {selectedComic?.authorBiography}
        </p>
      </div>
    </>
  );
};

export default DetailGraphicNovelPage;
