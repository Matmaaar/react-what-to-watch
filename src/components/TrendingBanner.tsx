import { useState } from "react";
import type { Movie } from "../types.js";
import type { Serie } from "../types.js";

type BannerType = "movie" | "serie";

const TrendingBanner = ({
  movies,
  series,
}: {
  movies: Movie[];
  series: Serie[];
}) => {
  const [bannerType, setBannerType] = useState<BannerType>("movie");

  const current =
    bannerType === "movie"
      ? {
          title: movies[0]?.title,
          overview: movies[0]?.overview,
          backdrop: movies[0]?.backdrop_path,
          label: "Most Popular Movie",
        }
      : {
          title: series[0]?.name,
          overview: series[0]?.overview,
          backdrop: series[0]?.backdrop_path,
          label: "Most Popular Series",
        };

  const handleToggle = () => {
    setBannerType(bannerType === "movie" ? "serie" : "movie");
  };

  return (
    <div
      className="relative w-full flex items-center justify-center rounded-lg overflow-hidden"
      style={{
        height: "70vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920/${current.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #08121c 0%, rgba(8,18,28,0.8) 5%, rgba(8,18,28,0.0) 80%)",
          zIndex: 1,
        }}
      />
      <div className="relative z-10 w- max-w-3xl mx-auto p-8 text-white">
        <h2 className="text-2xl mb-2 drop-shadow-lg">{current.label}</h2>
        <h1 className="pt-6 text-5xl font-bold mb-4 drop-shadow-lg">
          {current.title}
        </h1>
        <p className="mb-6">{current.overview}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Watch Now
        </button>
      </div>
      <button
        onClick={handleToggle}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-4 z-20"
        aria-label="Next"
      >
        {/* Flèche droite */}
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 4l8 8-8 8" />
        </svg>
      </button>
    </div>
  );
};

export default TrendingBanner;
