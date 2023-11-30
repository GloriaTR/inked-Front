import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadComicsActionCreator,
  loadMoreComicsActionCreator,
} from "../../store/comics/comicsSlice";
import ComicsList from "../../components/ComicsList/ComicsList";
import useComicsApi from "../../hooks/useComicsApi";
import "./GraphicNovelsListPage.css";
import { Link } from "react-router-dom";
import paths from "../../paths/paths";
import LoadMore from "../../components/LoadMore/LoadMore";

const GraphicNovelsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const comics = useAppSelector((state) => state.comicsState.comics);
  const hasComics = comics.length > 0;

  const { getComics } = useComicsApi();

  const [user, isLoadingAuth] = useAuthState(auth);

  const isLoadingUI = useAppSelector((state) => state.uiState.isLoading);

  const totalComics = useAppSelector((state) => state.comicsState.totalComics);
  const limit = useAppSelector((state) => state.comicsState.limit);

  useEffect(() => {
    const params = {
      limit: limit,
    };

    (async () => {
      if (user) {
        const { comics, totalComics } = await getComics({ ...params });

        if (comics) {
          dispatch(
            loadComicsActionCreator({
              comics: comics,
              totalComics: totalComics,
            }),
          );
        }

        const parent = document.head;
        const firstChild = document.head.firstChild;

        for (let i = 0; i < 5; i++) {
          const preloadImageLink = document.createElement("link");
          preloadImageLink.rel = "preload";
          preloadImageLink.as = "image";
          preloadImageLink.href = comics[0].image;

          parent.insertBefore(preloadImageLink, firstChild);
        }
      }
    })();
  }, [dispatch, getComics, user, limit]);

  const handleOnLoadMore = () => {
    dispatch(loadMoreComicsActionCreator());
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inked | My List</title>
          <meta
            name="description"
            content="See a list of your read and pending graphic novels"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <h2 className="graphic-novels-page-heading">Your Graphic Novels</h2>
      {hasComics
        ? !isLoadingAuth &&
          !isLoadingUI && (
            <>
              <ComicsList />
              {totalComics > limit && (
                <LoadMore actionOnClick={handleOnLoadMore} />
              )}
            </>
          )
        : !isLoadingAuth &&
          !isLoadingUI && (
            <>
              <p className="graphic-novels-page__no-comics">
                Start your graphic novel adventure now. Press the button below
                to start crafting your own!
              </p>
              <Link className="create__link" to={paths.createGraphicNovel}>
                Create Graphic Novel
              </Link>
            </>
          )}
    </>
  );
};

export default GraphicNovelsListPage;
