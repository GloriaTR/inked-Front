import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import paths from "../../paths/paths";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Footer from "../Footer/Footer";
import HomePageLazy from "../../pages/HomePage/HomePage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import {
  CreateGraphicNovelPageLazy,
  DetailGraphicNovelPageLazy,
  ErrorPageLazy,
  GraphicNovelsListPageLazy,
} from "../../pages/LazyPages/LazyPages";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = (): React.ReactElement => {
  const location = useLocation();
  const isHomePage = location.pathname === paths.home;

  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <>
      <Header />
      <main
        className={`main-container ${isHomePage ? "homepage-centered" : ""}`}
      >
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to={paths.home} />
              </ProtectedRoute>
            }
          />
          <Route
            path={paths.home}
            element={
              <Suspense>
                <HomePageLazy />
              </Suspense>
            }
          />
          <Route
            path={paths.myList}
            element={
              <ProtectedRoute>
                <Suspense>
                  <GraphicNovelsListPageLazy />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path={paths.createGraphicNovel}
            element={
              <ProtectedRoute>
                <Suspense>
                  <CreateGraphicNovelPageLazy />
                </Suspense>
              </ProtectedRoute>
            }
          />

          <Route
            path={paths.detail}
            element={
              <ProtectedRoute>
                <Suspense>
                  <DetailGraphicNovelPageLazy />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense>
                <ErrorPageLazy />
              </Suspense>
            }
          />
        </Routes>
        {isLoading && <Loading />}
      </main>
      <Footer />
    </>
  );
};

export default App;
