"use client"
import React, { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/images/netflix (1).svg";
import { Search, Bell } from "lucide-react";

interface PropsHeader extends ComponentProps<"header"> {
  title?: string;
}

export default function Header({ ...props }: PropsHeader) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      {...props}
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />

      <div className="relative flex items-center justify-between px-8 py-4 z-20">
        <nav className="flex items-center">
          <Image
            src={Logo}
            alt="Logotipo da Netflix"
            width={100}
            height={50}
            className="mr-10"
          />
          <div className="gap-6 lg:gap-10 hidden md:flex text-white text-sm font-medium">
            <p>Pagina Inicial</p>
            <p>Series</p>
            <p>Filmes</p>
            <p>Jogos</p>
            <p>Mais recentes</p>
            <p>A minha lista</p>
            <p>Procurar por idioma</p>
          </div>
        </nav>

        <nav className="flex items-center gap-6 text-white">
          <Search size={24} />
          <Bell size={24} />
          <Image
            src={"https://rb.gy/g1pwyx"}
            alt="Imagem de Perfil da Netflix"
            width={30}
            height={30}
            className="rounded"
          />
        </nav>
      </div>
    </header>
  );
}
