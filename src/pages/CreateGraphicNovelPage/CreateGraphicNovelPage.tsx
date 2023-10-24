import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NewGraphicNovelForm from "../../components/NewGraphicNovelForm/NewGraphicNovelForm.js";
import useComicsApi from "../../hooks/useComicsApi.js";
import { addComicActionCreator } from "../../store/comics/comicsSlice.js";
import { useAppDispatch } from "../../store/index.js";
import { Comic } from "../../types.js";
import "./CreateGraphicNovelPage.css";
import paths from "../../paths/paths.js";

const CreateGraphicNovelPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { addComic } = useComicsApi();

  const navigate = useNavigate();

  const onSubmitNewComic = async (newComicToAdd: Omit<Comic, "id">) => {
    const newComic = await addComic(newComicToAdd);

    dispatch(addComicActionCreator(newComic));
    navigate(paths.myList);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inked | Create a Graphic Novel</title>
          <meta
            name="description"
            content="Fill the form and create a list of graphic novels"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <h2 className="create-graphic-novel-heading">Create a Graphic Novel</h2>
      <NewGraphicNovelForm actionOnSubmit={onSubmitNewComic} />
    </>
  );
};

export default CreateGraphicNovelPage;
