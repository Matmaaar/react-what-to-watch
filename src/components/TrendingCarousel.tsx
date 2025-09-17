import type { Movie } from "../types.js";
import { useState } from "react";
import GenreFilters from "./GenreFilters.js";
import type { Genre } from "../types.js";
import MovieCard from "./MovieCard.js";



const TrendingCarousel = ({ movies, genres }: { movies: Movie[]; genres: Genre[] }) => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  if (!movies || movies.length === 0) return null;


   const filtered = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Movies Trending Now</h1>
      {/* <GenreFilters genres={genres} onGenreSelect={(id) => setSelectedGenre((current) => (current === id ? null : id))} /> */}
      <div className="overflow-x-auto no-scrollbar">
  <div className="flex gap-4">
    {filtered.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        overview={movie.overview}
      />
    ))}
  </div>
</div>
    </div>
  );
};

export default TrendingCarousel;
