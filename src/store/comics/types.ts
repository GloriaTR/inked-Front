import { Comic } from "../../types";

export interface ComicsState {
  comics: Comic[];
  selectedComic?: Comic;
  limit: number;
  totalComics: number;
}
