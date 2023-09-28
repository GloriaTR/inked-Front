import { auth, gitHubProvider } from "../../firebase";
import { browserPopupRedirectResolver, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet";
import Button from "../../components/Button/Button";
import paths from "../../paths/paths";
import "./HomePage.css";

const HomePage = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider, browserPopupRedirectResolver);
  };

  if (user) {
    return <Navigate to={paths.myList} />;
  }

  return (
    <>
      <Helmet>
        <title>Inked</title>
        <meta
          name="description"
          content="Manage your graphic novels effortlessly. Log in to explore and organize your reading list."
        ></meta>
      </Helmet>
      <div className="login">
        <h2 className="login__title">Welcome to inked</h2>
        <p className="login__text">Log in to access your account</p>
        <Button className="button-homepage" actionOnClick={login}>
          <img
            src="./img/gitHubIcon.svg"
            alt="GitHub icon"
            width="44"
            height="44"
          />
          <span className="button-homepage__text">Log in with GitHub</span>
        </Button>
      </div>
    </>
  );
};

export default HomePage;
