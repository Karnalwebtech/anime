import AnimeGrid from "@/components/cards/post-card";
import { animes } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">TV Series Anime</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {animes.map((anime, i) => (
          <AnimeGrid key={i} anime={anime} />
        ))}
      </div>
    </div>
  );
}
