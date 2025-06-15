"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Play, Check, ThumbsUp } from "lucide-react";
import { Movie } from "@/types/movies";
import api from "@/services/apiFilmes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  movie: Movie | null;
};

async function getMovies(url: string): Promise<Movie[]> {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}

export default function MovieModal({ isOpen, onClose, movie }: Props) {
  const [similar, setSimilar] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const trending = await getMovies(api.fetchTrending);
        setSimilar(trending || []);
      } catch (error) {
        console.error("Erro ao buscar filmes em alta:", error);
      }
    }

    if (movie) fetchTrending();
  }, [movie]);

  if (!isOpen || !movie) return null;

  const title = movie.title || movie.name;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/placeholder.jpg";

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-y-auto flex items-start justify-center py-10">
      <div className="bg-neutral-900 rounded-lg w-full max-w-5xl p-6 text-white space-y-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✖
        </button>

        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div  className="absolute w-full bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl ">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex items-center text-sm gap-4 mt-1">
              <span>{movie.release_date || movie.first_air_date}</span>
              <span>{movie.vote_average?.toFixed(1)} ★</span>
              <span className="bg-red-700 px-2 py-0.5 rounded">16+</span>
              <span>Idioma: PT</span>
            </div>
            <p className="mt-3 max-w-xl text-gray-300">
              {movie.overview || "Sem descrição disponível."}
            </p>
            <div className="flex gap-3 mt-4">
              <button className="bg-white  text-black px-4 py-2 rounded flex items-center gap-2">
                <Play size={18} className="text-blac" /> <span className="font-extrabold">Retomar</span>
              </button>
              <button className="border border-white px-3 py-2 rounded-full flex items-center ">
                <Check size={18} /> 
              </button>
                <button className="border border-white px-3 py-2 rounded-full flex items-center ">
                <ThumbsUp size={18} /> 
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Títulos semelhantes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similar.length > 0 ? (
              similar.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : "/placeholder.jpg"
                    }
                    alt={item.title || item.name}
                    width={300}
                    height={450}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {item.title || item.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.release_date || item.first_air_date} •{" "}
                      {item.vote_average?.toFixed(1)} ★
                    </p>
                    <p className="text-sm mt-2 text-gray-300">
                      {item.overview
                        ? item.overview.slice(0, 100) + "..."
                        : "Sem descrição"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                Nenhum título semelhante encontrado.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
