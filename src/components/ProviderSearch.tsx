import MovieCard from "./MovieCard.js";
import SerieCard from "./SerieCard.js";
import type { Content } from "../types.js";
import ButtonProvider from "./ButtonProvider.js";
import ButtonSwitch from "./ButtonSwitch.js";

const ProviderSearch = ({
  content,
  type,
  onProviderChange: setProviderId,
  onTypeChange: setType,
  providerId,
}: {
  content: Content[];
  type: "movie" | "tv";
  onProviderChange: (id: number) => void;
  onTypeChange: (type: "movie" | "tv") => void;
  providerId: number;
}) => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-4">Top Rated by platform</h1>
        <div className="mb-8 flex gap-4 justify-center">
          <ButtonSwitch
            id={1}
            type="movie"
            onClick={setType}
            isActive={type === "movie"}
          />
          <ButtonSwitch
            id={2}
            type="tv"
            onClick={setType}
            isActive={type === "tv"}
          />
        </div>

        <div className="mb-8 flex gap-4 justify-center">
          <ButtonProvider
            id={8}
            providerName="Netflix"
            onClick={setProviderId}
            isActive={providerId === 8}
          />
          <ButtonProvider
            id={119}
            providerName="Amazon Prime"
            onClick={setProviderId}
            isActive={providerId === 119}
          />
          {/* <ButtonProvider id={15} providerName="Hulu" onClick={setProviderId} /> */}
          <ButtonProvider
            id={2}
            providerName="Apple Tv"
            onClick={setProviderId}
            isActive={providerId === 2}
          />
          <ButtonProvider
            id={337}
            providerName="Disney+"
            onClick={setProviderId}
            isActive={providerId === 337}
          />
          {/* <ButtonProvider id={384} providerName="Canal+" onClick={setProviderId} /> */}
        </div>

        <div className="grid grid-cols-8 gap-6">
          {type === "movie"
            ? content.map((content) =>
                "title" in content ? (
                  <MovieCard
                    key={content.id}
                    id={content.id}
                    title={content.title}
                    poster_path={content.poster_path}
                    overview={content.overview}
                  />
                ) : null
              )
            : content.map((content) =>
                "name" in content ? (
                  <SerieCard
                    key={content.id}
                    id={content.id}
                    name={content.name}
                    poster_path={content.poster_path}
                    overview={content.overview}
                  />
                ) : null
              )}
        </div>
      </div>
    </div>
  );
};

export default ProviderSearch;
