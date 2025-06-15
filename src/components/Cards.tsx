"use client";
import React from "react";
import { ChevronDown, Play, Plus } from "lucide-react";
import Image from "next/image";


type Props = {
  movie: {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
  };
  onInfoClick?: (movieId: number) => void;
};

export default function Cards({ movie, onInfoClick }: Props) {
  const title = movie.title || movie.name;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg";

  return (
    <div className="group relative w-40 h-24 sm:w-52 sm:h-32 md:w-60 md:h-36 rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:z-20 hover:scale-110 shadow-md">
      <Image
        width={500}
        height={500}
        src={image}
        alt={title || ""}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end">
        <div className="p-3 space-y-2">
          <h1 className="text-white text-xs sm:text-sm font-semibold truncate">
            {title}
          </h1>

          <div className="w-full bg-gray-700 h-1 rounded overflow-hidden">
            <div className="bg-red-600 h-full w-[60%]"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="bg-white text-black rounded-full p-1 hover:bg-gray-200 transition">
                <Play size={16} />
              </button>
              <button className="bg-neutral-700 text-white rounded-full p-1 hover:bg-neutral-600 transition">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => onInfoClick?.(movie.id)}
              className="text-white bg-neutral-700 hover:bg-neutral-600 p-1 rounded-full"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
