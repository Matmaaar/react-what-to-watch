export type Genre = {
  id: number;
  name: string;
};


export type Movie = {
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  overview: string;
};

export type Serie = {
  id: number;
  name: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  overview: string;
};
