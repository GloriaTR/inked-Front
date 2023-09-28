import { lazy } from "react";

export const CreateGraphicNovelPageLazy = lazy(
  () => import("../CreateGraphicNovelPage/CreateGraphicNovelPage"),
);

export const ErrorPageLazy = lazy(() => import("../ErrorPage/ErrorPage"));

export const HomePageLazy = lazy(() => import("../HomePage/HomePage"));

export const GraphicNovelsListPageLazy = lazy(
  () => import("../GraphicNovelsListPage/GraphicNovelsListPage"),
);

export const DetailGraphicNovelPageLazy = lazy(
  () => import("../DetailGraphicNovelPage/DetailGraphicNovelPage"),
);
