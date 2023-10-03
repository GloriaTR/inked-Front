import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadComicsActionCreator } from "../../store/comics/comicsSlice";
import ComicsList from "../../components/ComicsList/ComicsList";
import useComicsApi from "../../hooks/useComicsApi";
import "./GraphicNovelsListPage.css";
import { Link } from "react-router-dom";
import paths from "../../paths/paths";

const GraphicNovelsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const comics = useAppSelector((state) => state.comicsState.comics);
  const hasComics = comics.length > 0;

  const { getComics } = useComicsApi();

  const [user, isLoadingAuth] = useAuthState(auth);

  const isLoadingUI = useAppSelector((state) => state.uiState.isLoading);

  const preloadImage = (image: string) => {
    const preloadImageLink = document.createElement("link");
    preloadImageLink.href = image;
    preloadImageLink.rel = "preload";
    preloadImageLink.as = "image";
    document.head.appendChild(preloadImageLink);
  };

  useEffect(() => {
    (async () => {
      if (user) {
        const comics = await getComics();

        dispatch(loadComicsActionCreator(comics));

        preloadImage(comics[0].image);
      }
    })();
  }, [dispatch, getComics, user]);

  return (
    <>
      <Helmet>
        <title>Inked | My List</title>
        <meta
          name="description"
          content="See a list of your read and pending graphic novels"
        ></meta>
      </Helmet>
      <h2 className="graphic-novels-page-heading">Your Graphic Novels</h2>
      {hasComics
        ? !isLoadingAuth && !isLoadingUI && <ComicsList />
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
