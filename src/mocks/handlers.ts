import { rest } from "msw";
import {
  comicApiMock,
  comicIdMock,
  comicsApiMock,
  comicsMock,
} from "./comicsMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/comics`, (_req, res, ctx) => {
    return res(ctx.json(comicsApiMock));
  }),

  rest.delete(
    `${import.meta.env.VITE_API_URL}/comics/${comicsMock[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.json({ message: "Graphic Novel deleted" }));
    },
  ),

  rest.post(`${import.meta.env.VITE_API_URL}/comics`, (_req, res, ctx) => {
    return res(ctx.json({ comic: comicApiMock }));
  }),

  rest.get(
    `${import.meta.env.VITE_API_URL}/comics/${comicIdMock}`,
    (_req, res, ctx) => {
      return res(ctx.json({ comic: comicApiMock }));
    },
  ),

  rest.patch(
    `${import.meta.env.VITE_API_URL}/comics/${comicIdMock}`,
    (_req, res, ctx) => {
      return res(
        ctx.json({ comic: { ...comicsApiMock.comics[0], isRead: false } }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/comics`, (_req, res, ctx) => {
    return res(ctx.status(404, "Comics couldn't be loaded"));
  }),

  rest.delete(
    `${import.meta.env.VITE_API_URL}/comics/${comicsMock[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(404, "Graphic Novel not deleted"));
    },
  ),

  rest.post(`${import.meta.env.VITE_API_URL}/comics`, (_req, res, ctx) => {
    return res(ctx.status(500, "Graphic Novel not created"));
  }),

  rest.get(
    `${import.meta.env.VITE_API_URL}/comics/${comicIdMock}`,
    (_req, res, ctx) => {
      return res(ctx.status(500, "Couldn't load Graphic Novel"));
    },
  ),

  rest.patch(
    `${import.meta.env.VITE_API_URL}/comics/${comicIdMock}`,
    (_req, res, ctx) => {
      return res(ctx.status(500, "Couldn't update the Graphic Novel"));
    },
  ),
];
