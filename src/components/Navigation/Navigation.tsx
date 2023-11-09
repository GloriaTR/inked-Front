import { NavLink, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import paths from "../../paths/paths";
import "./Navigation.css";
import Button from "../Button/Button";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  const [user] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      {user && (
        <nav className="navigation-container">
          <ul className="navigation-list">
            <li className="navigation-list__options">
              <NavLink
                className={
                  pathname === paths.myList
                    ? "navigation-list__link"
                    : "navigation-list__link--inactive"
                }
                to={paths.myList}
              >
                <img
                  src="/img/homeIconBlack.svg"
                  alt="home logo"
                  width="40"
                  height="40"
                />
                <span>My List</span>
              </NavLink>
            </li>
            <li className="navigation-list__options">
              <NavLink
                className="navigation-list__link"
                to={paths.createGraphicNovel}
              >
                <img
                  src="/img/createIconBlack.svg"
                  alt="create logo"
                  width="40"
                  height="40"
                />
                <span>Create</span>
              </NavLink>
            </li>
            <li className="navigation-list__options">
              <Button className="button button-header" actionOnClick={logout}>
                <img
                  src="/img/logOutButtonBlack.svg"
                  alt="Logout button"
                  width="40"
                  height="40"
                />
                <span>Log Out</span>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
