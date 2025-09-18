import { getTrendingMovies } from "../api/tmdb.js";
import { getTrendingSeries } from "../api/tmdb.js";
import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { Genre } from "../types.js";
import TrendingBanner from "../components/TrendingBanner.js";
import TrendingCarousel from "../components/TrendingCarousel.js";
import TrendingCarouselSeries from "../components/TrendingCarrouselSeries.js";
import { getTopRatedByProvider } from "../api/tmdb.js";
import ProviderSearch from "../components/ProviderSearch.js";
import type { Movie, Serie } from "../types.js";

const Home = () => {
  const context = useOutletContext<{ genres: Genre[] }>();
  const genres = context.genres;
  const [providerId, setProviderId] = useState<number>(8);
  const [type, setType] = useState<"movie" | "tv">("movie");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [providerContent, setProviderContent] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    getTrendingSeries().then((data) => setSeries(data));
  }, []);

  useEffect(() => {
    getTopRatedByProvider(providerId, type).then((data) =>
      setProviderContent(data.results)
    );
  }, [providerId, type]);

  return (
    <div>
      <TrendingBanner movies={movies} series={series} genres={genres} />
      <div className="m-20">
        <TrendingCarousel movies={movies} genres={genres} />
        <TrendingCarouselSeries series={series} genres={genres} />
        <ProviderSearch content={providerContent} genres={genres} type={type} onProviderChange={setProviderId} />
      </div>
    </div>
  );
};

export default Home;
