import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import paths from "../../paths/paths.js";
import "./ErrorPage.css";

const ErrorPage = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Inked | Page Not Found</title>
        <meta name="description" content="Page Not Found"></meta>
      </Helmet>
      <div className="error">
        <img
          className="error__image"
          src="/img/booksErrorPage.svg"
          alt="Drawing of books hanging from the navigation bar of page not found, 404"
          width="200"
          height="100"
        />
        <span className="error__status-code">404</span>
        <p className="error__text">
          We are sorry, the page you requested could not be found.
        </p>
        <Link className="error__link" to={paths.myList}>
          Back to homepage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
