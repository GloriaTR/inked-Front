export interface Comic {
  id: string;
  title: string;
  image: string;
  synopsis: string;
  genre: string;
  numberPages: number;
  coverType: string;
  releaseDate: number;
  isRead: boolean;
  authorName: string;
  authorImage: string;
  authorNotableWork: string;
  authorBiography: string;
}

export interface ComicsApi {
  comics: ComicApi[];
  totalComics: number;
}

export interface ComicApi extends Omit<Comic, "id"> {
  _id: string;
}
