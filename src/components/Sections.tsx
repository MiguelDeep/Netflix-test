"use client";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";
import api from "@/services/apiFilmes";
import MovieModal from "./MovieModal";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  overview?: string;
};

type SectionsMap = {
  [category: string]: Movie[];
};

async function getMovies(url: string): Promise<Movie[]> {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}

export default function Sections() {
  const [sections, setSections] = useState<SectionsMap>({});
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (movieId: number) => {
    const allMovies = Object.values(sections).flat();
    const found = allMovies.find((m) => m.id === movieId);
    if (found) {
      setSelectedMovie(found);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      const [
        trending,
        originals,
        topRated,
        action,
        comedy,
        horror,
        romance,
        doc
      ] = await Promise.all([
        getMovies(api.fetchTrending),
        getMovies(api.fetchNetflixOriginals),
        getMovies(api.fetchTopRated),
        getMovies(api.fetchActionMovies),
        getMovies(api.fetchComedyMovies),
        getMovies(api.fetchHorrorMovies),
        getMovies(api.fetchRomanceMovies),
        getMovies(api.fetchDocumentaries)
      ]);

      setSections({
        "Tendência geral": trending,
        "Originais Netflix": originals,
        "Melhores Filmes": topRated,
        Explosivos: action,
        "Rir é o melhor remédio": comedy,
        Terror: horror,
        Românticos: romance,
        "Educativo, histórico e biográfico": doc
      });
    }

    fetchData();
  }, []);

  return (
    <div className="relative inset-0 z-20 space-y-8">
      {Object.entries(sections).map(([title, movies]) => (
        <div key={title}>
          <h1 className="font-bold mb-2 pl-20 text-3xl text-white">{title}</h1>
          <ContainerCards>
            {movies.map((movie: Movie) => (
              <Cards
                key={movie.id}
                movie={movie}
                onInfoClick={handleOpenModal}
              />
            ))}
          </ContainerCards>
        </div>
      ))}
      <MovieModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        movie={selectedMovie}
      />
    </div>
  );
}
