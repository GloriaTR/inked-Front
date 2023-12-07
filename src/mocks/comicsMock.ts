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
  totalComics: comicsMock.length,
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

export const paramsMock = {
  limit: 10,
};

export const loadMoreComicsMock: Comic[] = [
  {
    id: "56fb9f23c733a4fut2810d7t",
    title: "Black Hole (limited series)",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151605077895811194/blackHole.webp?width=125&height=173",
    authorName: "Charles Burns",
    synopsis:
      "A limited series graphic novel that delves into the lives of teenagers dealing with a mysterious and disturbing plague.",
    genre: "Thriller",
    numberPages: 368,
    coverType: "Hardcover",
    releaseDate: 2005,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153077087872237608/CharlesBurns.webp?width=87&height=92",
    authorNotableWork: "Black Hole",
    authorBiography:
      "Charles Burns is an American cartoonist and illustrator known for his dark and surreal storytelling.",
    isRead: true,
  },
  {
    id: "56fb9f23c733a4fut2810d8z",
    title: "Ghost World (limited series)",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151604145413955674/ghostWorld.webp?width=137&height=176",
    authorName: "Daniel Clowes",
    synopsis:
      "A limited series graphic novel that explores the lives and misadventures of two teenage girls in a quirky town.",
    genre: "Romance",
    numberPages: 80,
    coverType: "Softcover",
    releaseDate: 1993,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153076013916495893/DanielClowes.webp?width=87&height=87",
    authorNotableWork: "Eightball",
    authorBiography:
      "Daniel Clowes is an American cartoonist and screenwriter known for his indie comics.",
    isRead: false,
  },
  {
    id: "3",
    title: "Footnotes in Gaza",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151584355563610292/footnotesInGaza.webp?width=125&height=170",
    authorName: "Joe Sacco",
    synopsis:
      "A graphic novel investigating the 1956 massacre in the Gaza Strip through interviews and historical research.",
    genre: "Historical",
    numberPages: 432,
    coverType: "Hardcover",
    releaseDate: 2009,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153071069444460604/JoeSacco.webp?width=87&height=87",
    authorNotableWork: "Palestine",
    authorBiography:
      "Joe Sacco is an American cartoonist and journalist known for his graphic journalism.",
    isRead: true,
  },
  {
    id: "4",
    title: "Through The Woods",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151586555601891428/throughTheWoods.webp?width=137&height=177",
    authorName: "Emily Carroll",
    synopsis:
      "A collection of five beautifully illustrated and chilling tales of suspense and horror.",
    genre: "Thriller",
    numberPages: 208,
    coverType: "Softcover",
    releaseDate: 2014,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153071737475452998/EmilyCarroll.webp?width=87&height=87",
    authorNotableWork: "His Face All Red",
    authorBiography:
      "Emily Carroll is a Canadian author and artist known for her dark and atmospheric storytelling.",
    isRead: false,
  },
  {
    id: "5",
    title: "The Complete Maus",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151587621785567232/maus.webp?width=118&height=172",
    authorName: "Art Spiegelman",
    synopsis:
      "A Pulitzer Prize-winning graphic novel that tells the story of the Holocaust through the author's father's experiences.",
    genre: "Memoir",
    numberPages: 296,
    coverType: "Paperback",
    releaseDate: 1986,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153069580248432750/ArtSpiegelman.webp?width=87&height=87",
    authorNotableWork: "Maus",
    authorBiography:
      "Art Spiegelman is an American cartoonist, editor, and comics advocate known for his impactful Holocaust narrative.",
    isRead: true,
  },
  {
    id: "6",
    title: "Fun Home: Family Tragicomic",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151590527347736676/funHome.webp?width=115&height=172",
    authorName: "Alison Bechdel",
    synopsis:
      "A graphic novel memoir exploring the author's relationship with her father and her coming out as a lesbian.",
    genre: "Romance",
    numberPages: 240,
    coverType: "Softcover",
    releaseDate: 2006,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153073189618982992/AlisonBechdel.webp?width=87&height=87",
    authorNotableWork: "Fun Home",
    authorBiography:
      "Alison Bechdel is an American cartoonist and writer known for her exploration of LGBTQ themes.",
    isRead: false,
  },
  {
    id: "7",
    title: "This One Summer",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151591515945177139/thisOneSummer.webp?width=125&height=177",
    authorName: "Mariko Tamaki",
    synopsis:
      "Two friends navigate the complexities of growing up during a summer vacation in a quiet lakeside town.",
    genre: "Romance",
    numberPages: 320,
    coverType: "Paperback",
    releaseDate: 2014,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153073695967957052/MarikoTamaki.webp?width=87&height=87",
    authorNotableWork: "Skim",
    authorBiography:
      "Mariko Tamaki is a Canadian writer and artist known for her exploration of adolescence and identity.",
    isRead: false,
  },
  {
    id: "8",
    title: "Los surcos del azar",
    image:
      "https://media.discordapp.net/attachments/1145433728835923978/1151592448137646181/losSurcosDelAzar.webp?width=121&height=172",
    authorName: "Paco Roca",
    synopsis:
      "The life and adventures of Miguel Ruiz, a Spanish exile who fought against Franco's regime during World War II.",
    genre: "War",
    numberPages: 360,
    coverType: "Hardcover",
    releaseDate: 2013,
    authorImage:
      "https://media.discordapp.net/attachments/1145433728835923978/1153074025808015532/PacoRoca.webp?width=87&height=88",
    authorNotableWork: "Arrugas",
    authorBiography:
      "Paco Roca is a Spanish author renowned for his graphic storytelling and his exploration of Spanish history.",
    isRead: true,
  },
];
