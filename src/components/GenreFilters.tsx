import React from 'react';
import type { Genre } from "../types.js";

type GenreFiltersProps = {
  genres: Genre[];
  onGenreSelect: (id: number) => void;
};


const GenreFilters = ({ genres, onGenreSelect }: GenreFiltersProps) => {
   console.log("onGenreSelect reçu :", onGenreSelect, typeof onGenreSelect);
   console.log("Genres reçus :", genres);

if (!genres || genres.length === 0) {
  return <p>Chargement des genres...</p>;
}

  return (
  <div>
    {genres.map((genre) => (
      <button className="bg-brand"
        key={genre.id}
        onClick={() => onGenreSelect(genre.id)}
        className="m-1 border border-brand px-3 py-1 rounded-full text-sm hover:bg-brand transition"
      >
        {genre.name}
      </button>
    ))}
  </div>
  );
};

export default GenreFilters;
