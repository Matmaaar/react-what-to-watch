type MovieCardProps = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
};

export default function MovieCard({ id, title, poster_path, overview }: MovieCardProps) {
  return (
    <div
      key={id}
      className="relative group flex-shrink-0 mr-4 rounded-lg shadow-lg overflow-hidden"
      style={{ minWidth: 180 }}
    >
      {/* Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-[270px] object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-sm">
        <p className="line-clamp-5">{overview}</p>
      </div>

      {/* Shadow */}
      <div className="absolute inset-0 rounded-lg group-hover:shadow-2xl transition duration-300"></div>
    </div>
  );
}
