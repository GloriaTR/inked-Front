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

  const isMyListPage = pathname === paths.myList;
  const isCreateGraphicNovelPage = pathname === paths.createGraphicNovel;

  return (
    <>
      {user && (
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <NavLink
                className={
                  isMyListPage
                    ? "navigation-list__link"
                    : "navigation-list__link--inactive"
                }
                to={paths.myList}
              >
                <img
                  src={
                    isMyListPage
                      ? "/img/homeIconOrange.svg"
                      : "/img/homeIconBlack.svg"
                  }
                  alt="home icon"
                  width="36"
                  height="36"
                />
                <span className="navigation-list__text">My List</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navigation-list__link"
                to={paths.createGraphicNovel}
              >
                <img
                  src={
                    isCreateGraphicNovelPage
                      ? "/img/createIconOrange.svg"
                      : "/img/createIconBlack.svg"
                  }
                  alt="create icon"
                  width="36"
                  height="36"
                />
                <span className="navigation-list__text">Create</span>
              </NavLink>
            </li>
            <li>
              <Button
                className="button navigation-list__button"
                actionOnClick={logout}
              >
                <img
                  src="/img/logOutButtonBlack.svg"
                  alt="Logout button icon"
                  width="36"
                  height="36"
                />
                <span className="navigation-list__text">Log Out</span>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
