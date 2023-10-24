import { auth, gitHubProvider, googleProvider } from "../../firebase";
import { browserPopupRedirectResolver, signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../components/Button/Button";
import paths from "../../paths/paths";
import "./HomePage.css";

const HomePage = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const loginWithGitHub = async () => {
    await signInWithPopup(auth, gitHubProvider, browserPopupRedirectResolver);
  };

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver);
  };

  if (user) {
    return <Navigate to={paths.myList} />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inked</title>
          <meta
            name="description"
            content="Manage your graphic novels effortlessly. Log in to explore and organize your reading list."
          ></meta>
        </Helmet>
      </HelmetProvider>
      <div className="login">
        <h2 className="login__title">Welcome to inked</h2>
        <p className="login__text">Log in to access your account</p>
        <div className="button-homepage">
          <Button className="button-login" actionOnClick={loginWithGitHub}>
            <img
              src="./img/gitHubIcon.svg"
              alt="GitHub icon"
              width="44"
              height="44"
            />
            <span className="button-login__text">GitHub</span>
          </Button>
          <Button className="button-login" actionOnClick={loginWithGoogle}>
            <img
              src="./img/googleIcon.svg"
              alt="Google icon"
              width="44"
              height="44"
            />
            <span className="button-login__text">Google</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
