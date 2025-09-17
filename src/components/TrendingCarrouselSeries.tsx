import type { Serie } from "../types.js";
import { useState } from "react";
import GenreFilters from "./GenreFilters.js";
import type { Genre } from "../types.js";
import SerieCard from "./SerieCard.js";

const TrendingCarouselSeries = ({
  series,
  genres,
}: {
  series: Serie[];
  genres: Genre[];
}) => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  if (!series || series.length === 0) return null;

  const filtered = selectedGenre
    ? series.filter((serie) => serie.genre_ids.includes(selectedGenre))
    : series;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">TV Shows Trending Now</h1>
      {/* <GenreFilters
        genres={genres}
        onGenreSelect={(id) =>
          setSelectedGenre((current) => (current === id ? null : id))
        }
      /> */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {filtered.map((serie) => (
            <SerieCard
              key={serie.id}
              id={serie.id}
              title={serie.name}
              poster_path={serie.poster_path}
              overview={serie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCarouselSeries;
