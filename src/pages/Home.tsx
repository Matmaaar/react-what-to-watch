import { getTrendingMovies } from "../api/tmdb.js";
import { getTrendingSeries } from "../api/tmdb.js";
import { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { Genre } from "../types.js";
import TrendingBanner from "../components/TrendingBanner.js";
import TrendingCarousel from "../components/TrendingCarousel.js";
import TrendingCarouselSeries from "../components/TrendingCarrouselSeries.js";



const Home = () => {
  const context = useOutletContext<{ genres: Genre[] }>();
  const genres = context.genres;

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
  getTrendingMovies().then(data => setMovies(data))
  }, [])

  useEffect(() => {
  getTrendingSeries().then(data => setSeries(data))
  }, [])

  return (
    <div>

      <TrendingBanner movies={movies} series={series} genres={genres} />
<div className="m-20">
      <TrendingCarousel movies={movies} genres={genres} />
      <TrendingCarouselSeries series={series} genres={genres} />
      </div>
    </div>
  )
};

export default Home;
