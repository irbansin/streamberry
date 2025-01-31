export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // adult
  // :
  // false
  // backdrop_path
  // :
  // "/4MUfDtBqUFqotGF5RJOfNfoBTLo.jpg"
  // genre_ids
  // :
  // (3) [28, 27, 14]
  // id
  // :
  // 951546
  // original_language
  // :
  // "en"
  // original_title
  // :
  // "Reign of Chaos"
  // overview
  // :
  // "When the world is gripped by a plague unleashed by the evil lord Chaos, and humans are turned into rabid creatures, mankind can only be saved by three young women, descendants of a Goddess, with the power to stop Chaos' evil."
  // popularity
  // :
  // 734.473
  // poster_path
  // :
  // "/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg"
  // release_date
  // :
  // "2022-04-12"
  // title
  // :
  // "Reign of Chaos"
  // video
  // :
  // false
  // vote_average
  // :
  // 5.6
  // vote_count
  // :
  // 13
}
