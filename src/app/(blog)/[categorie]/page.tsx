import React from "react";
import { notFound } from "next/navigation";
import { animes } from "@/lib/data";
import AnimeGrid from "@/components/cards/post-card";

interface CategoryPageProps {
  params: {
    categorie: string;
  };
}

export default async function page({ params }: CategoryPageProps) {
  const { categorie } = await params;

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-pink-500 mb-6"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animes
          .filter((item) => item.type === categorie)
          .map((anime, i) => (
            <AnimeGrid key={i} anime={anime} />
          ))}
      </div>
    </div>
  );
}
