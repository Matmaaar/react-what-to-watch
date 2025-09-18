import GenreFilters from "./GenreFilters.js";
import type { Genre } from "../types.js";
import MovieCard from "./MovieCard.js";
import SerieCard from "./SerieCard.js";
import type { Content } from "../types.js";
import ButtonProvider from "./ButtonProvider.js";

const ProviderSearch = ({
  content,
  genres,
  type,
  onProviderChange: setProviderId,
}: {
  content: Content[];
  genres: Genre[];
  type: "movie" | "tv";
  onProviderChange: (id: number) => void;
}) => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-4">Top Rated by platform</h1>
        <div className="mb-8 flex gap-4">
          <ButtonProvider
            id={8}
            providerName="Netflix"
            onClick={setProviderId}
          />
          <ButtonProvider
            id={119}
            providerName="Amazon Prime"
            onClick={setProviderId}
          />
          {/* <ButtonProvider id={15} providerName="Hulu" onClick={setProviderId} /> */}
          <ButtonProvider
            id={2}
            providerName="Apple Tv"
            onClick={setProviderId}
          />
          <ButtonProvider
            id={337}
            providerName="Disney+"
            onClick={setProviderId}
          />
          {/* <ButtonProvider id={384} providerName="Canal+" onClick={setProviderId} /> */}
        </div>

        <div className="flex overflow-x-auto no-scrollbar">
        {type === "movie"
          ? content.map((content) => (
              <MovieCard
                key={content.id}
                id={content.id}
                title={content.title}
                poster_path={content.poster_path}
                overview={content.overview}
              />
            ))
          : content.map((content) => (
              <SerieCard
                key={content.id}
                id={content.id}
                name={content.name}
                poster_path={content.poster_path}
                overview={content.overview}
              />
            ))}
            </div>
      </div>
    </div>
  );
};

export default ProviderSearch;
