import { Link } from "react-router";
import { useParams } from "react-router";
import { getMovie } from "../api/tmdb.js";
import { useState } from "react";
import { useEffect } from "react";
import type { Movie } from "../types.js";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovie(Number(id)).then(data => setMovie(data));
    console.log(movie);
  }, []);

  return (
    <div
      className="relative w-full flex items-center justify-center rounded-lg overflow-hidden"
      style={{
      height: "70vh",
      backgroundImage: `url(https://image.tmdb.org/t/p/w1920/${movie?.backdrop_path})`,
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
        <h2 className="text-2xl mb-2 drop-shadow-lg"></h2>
        <h1 className="pt-6 text-5xl font-bold mb-4 drop-shadow-lg">
          {movie?.title}
        </h1>
        <p className="mb-6">{movie?.overview}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Watch Now
        </button>
      </div>

    </div>
  );
};

export default Movie;
