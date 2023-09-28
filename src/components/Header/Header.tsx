import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title-logo">
          <img
            className="header__logo"
            src="/img/logoInkedHeader.webp"
            alt="Inked logo"
            width="46"
            height="53"
          />
          <h1 className="header__title">inked</h1>
        </div>
        {user && (
          <Button className="button button-header" actionOnClick={logout}>
            <img
              src="/img/logout.svg"
              alt="Logout button"
              width="44"
              height="44"
            />
          </Button>
        )}
      </div>
      {user && <Navigation />}
    </header>
  );
};

export default Header;
