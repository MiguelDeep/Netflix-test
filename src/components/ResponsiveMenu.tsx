"use client";
import { ChevronDown } from "lucide-react";

export default function ResponsiveMenu() {
  return (
    <>
      <div className="relative md:hidden">
        <div className="group relative inline-block text-left">
          <div className="flex items-center text-white text-sm font-medium cursor-pointer">
            <div className="flex items-center gap-1 text-[10px] md:text-2xl">
              Página Inicial
              <ChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={18}
              />
            </div>
          </div>

          <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 p-4 rounded shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="flex flex-col  text-white text-sm font-medium ">
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700  ">Séries</p>
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700 ">Filmes</p>
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700">Jogos</p>
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700">Mais recentes</p>
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700">Minha Lista</p>
              <p className="font-bold cursor-pointer text-center p-2 hover:bg-zinc-700">Idiomas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-6 lg:gap-10 text-white text-sm font-medium">
        <p className="font-bold cursor-pointer">Página Inicial</p>
        <p className="font-bold cursor-pointer">Séries</p>
        <p className="font-bold cursor-pointer">Filmes</p>
        <p className="font-bold cursor-pointer">Jogos</p>
        <p className="font-bold cursor-pointer">Mais recentes</p>
        <p className="font-bold cursor-pointer">Minha Lista</p>
        <p className="font-bold cursor-pointer">Idiomas</p>
      </div>
    </>
  );
}
