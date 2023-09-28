import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("Given an ErrorPage component", () => {
  describe("When is rendered", () => {
    test("Then it should show the status code '404' and message 'We are sorry, the page you requested could not be found.'", () => {
      const expectedStatusCode = "404";
      const expectedMessage =
        "We are sorry, the page you requested could not be found.";

      render(
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>,
      );

      const statusCode = screen.getByText(expectedStatusCode);
      const message = screen.getByText(expectedMessage);

      expect(statusCode).toBeInTheDocument();
      expect(message).toBeInTheDocument();
    });

    test("Then it should show an image with the alternate text 'Drawing of books hanging from the navigation bar of page not found, 404'", () => {
      const expectedAlternativeImageText =
        "Drawing of books hanging from the navigation bar of page not found, 404";

      render(
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>,
      );

      const image = screen.getByAltText(expectedAlternativeImageText);

      expect(image).toBeInTheDocument();
    });
  });
});
