import { NavLink, useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import "./Navigation.css";

const Navigation = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
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
            My List
          </NavLink>
        </li>
        <li className="navigation-list__options">
          <NavLink
            className="navigation-list__link"
            to={paths.createGraphicNovel}
          >
            Create
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
