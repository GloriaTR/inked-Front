import { Comic, ComicApi, ComicsApi } from "../types";

export const comicIdMock: string = "56fb9f23c733a4fut2810d7r";

export const comicsMock: Comic[] = [
  {
    id: "56fb9f23c733a4fut2810d7r",
    title: "My Favorite Thing is Monsters",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1150886216242307072/MyFavoriteThingIsMonsters.webp?width=375&height=493",
    authorName: "Emil Ferris",
    synopsis:
      "It portrays a young girl named Karen Reyes investigating the death of her neighbor in 1960s Chicago.",
    genre: "Thriller",
    numberPages: 416,
    coverType: "Paperback",
    releaseDate: 2016,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1150093094302269511/MyFavoriteThingIsMonsters.webp?width=413&height=543",
    authorNotableWork: "My Favorite Thing is Monsters",
    authorBiography:
      "American writer, cartoonist, and designer. Ferris debuted in publishing with her 2017 graphic novel My Favorite Thing Is Monsters.",
    isRead: true,
  },
  {
    id: "2",
    title: "Persepolis",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1150093094772015215/Persepolis.webp?width=368&height=545",
    authorName: "Marjane Satrapi",
    synopsis:
      "A graphic memoir of a girl's coming-of-age during the Iranian Revolution.",
    genre: "Memoir",
    numberPages: 160,
    coverType: "Hardcover",
    releaseDate: 2000,
    authorImage:
      "https://cineuropa.org/imgCache/2019/06/17/1560763299202_0620x0413_0x18x1000x666_1679272954717.jpg",
    authorNotableWork: "Persepolis",
    authorBiography:
      "Iranian-born graphic novelist, known for 'Persepolis,' a memoir of her childhood.",
    isRead: false,
  },
];

export const comicsApiMock: ComicsApi = {
  comics: [
    {
      _id: "56fb9f23c733a4fut2810d7r",
      title: "My Favorite Thing is Monsters",
      image:
        "https://media.discordapp.net/attachments/1145433728835923978/1150886216242307072/MyFavoriteThingIsMonsters.webp?width=375&height=493",
      authorName: "Emil Ferris",
      synopsis:
        "It portrays a young girl named Karen Reyes investigating the death of her neighbor in 1960s Chicago.",
      genre: "Thriller",
      numberPages: 416,
      coverType: "Paperback",
      releaseDate: 2016,
      authorImage:
        "https://media.discordapp.net/attachments/1145433728835923978/1150093094302269511/MyFavoriteThingIsMonsters.webp?width=413&height=543",
      authorNotableWork: "My Favorite Thing is Monsters",
      authorBiography:
        "American writer, cartoonist, and designer. Ferris debuted in publishing with her 2017 graphic novel My Favorite Thing Is Monsters.",
      isRead: true,
    },
    {
      _id: "2",
      title: "Persepolis",
      image:
        "https://media.discordapp.net/attachments/1145433728835923978/1150093094772015215/Persepolis.webp?width=368&height=545",
      authorName: "Marjane Satrapi",
      synopsis:
        "A graphic memoir of a girl's coming-of-age during the Iranian Revolution.",
      genre: "Memoir",
      numberPages: 160,
      coverType: "Hardcover",
      releaseDate: 2000,
      authorImage:
        "https://cineuropa.org/imgCache/2019/06/17/1560763299202_0620x0413_0x18x1000x666_1679272954717.jpg",
      authorNotableWork: "Persepolis",
      authorBiography:
        "Iranian-born graphic novelist, known for 'Persepolis,' a memoir of her childhood.",
      isRead: false,
    },
  ],
};

export const comicMock: Comic = {
  id: "56fb9f23c733a4fut2810d7r",
  title: "My Favorite Thing is Monsters",
  image:
    "https://media.discordapp.net/attachments/1145433728835923978/1150886216242307072/MyFavoriteThingIsMonsters.webp?width=375&height=493",
  authorName: "Emil Ferris",
  synopsis:
    "It portrays a young girl named Karen Reyes investigating the death of her neighbor in 1960s Chicago.",
  genre: "Thriller",
  numberPages: 416,
  coverType: "Paperback",
  releaseDate: 2016,
  authorImage:
    "https://media.discordapp.net/attachments/1145433728835923978/1150093094302269511/MyFavoriteThingIsMonsters.webp?width=413&height=543",
  authorNotableWork: "My Favorite Thing is Monsters",
  authorBiography:
    "American writer, cartoonist, and designer. Ferris debuted in publishing with her 2017 graphic novel My Favorite Thing Is Monsters.",
  isRead: true,
};

export const comicApiMock: ComicApi = {
  _id: "56fb9f23c733a4fut2810d7r",
  title: "My Favorite Thing is Monsters",
  image:
    "https://media.discordapp.net/attachments/1145433728835923978/1150886216242307072/MyFavoriteThingIsMonsters.webp?width=375&height=493",
  authorName: "Emil Ferris",
  synopsis:
    "It portrays a young girl named Karen Reyes investigating the death of her neighbor in 1960s Chicago.",
  genre: "Thriller",
  numberPages: 416,
  coverType: "Paperback",
  releaseDate: 2016,
  authorImage:
    "https://media.discordapp.net/attachments/1145433728835923978/1150093094302269511/MyFavoriteThingIsMonsters.webp?width=413&height=543",
  authorNotableWork: "My Favorite Thing is Monsters",
  authorBiography:
    "American writer, cartoonist, and designer. Ferris debuted in publishing with her 2017 graphic novel My Favorite Thing Is Monsters.",
  isRead: true,
};

export const comicToggleMock = {
  id: "56fb9f23c733a4fut2810d7r",
  title: "My Favorite Thing is Monsters",
  image:
    "https://media.discordapp.net/attachments/1145433728835923978/1150886216242307072/MyFavoriteThingIsMonsters.webp?width=375&height=493",
  authorName: "Emil Ferris",
  synopsis:
    "It portrays a young girl named Karen Reyes investigating the death of her neighbor in 1960s Chicago.",
  genre: "Thriller",
  numberPages: 416,
  coverType: "Paperback",
  releaseDate: 2016,
  authorImage:
    "https://media.discordapp.net/attachments/1145433728835923978/1150093094302269511/MyFavoriteThingIsMonsters.webp?width=413&height=543",
  authorNotableWork: "My Favorite Thing is Monsters",
  authorBiography:
    "American writer, cartoonist, and designer. Ferris debuted in publishing with her 2017 graphic novel My Favorite Thing Is Monsters.",
  isRead: false,
};
