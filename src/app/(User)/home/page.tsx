"use client";

import Header from "@/components/Header";
import { Info } from "lucide-react";
import IconNetflix from "@/images/netflix.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import SectionsMovies from "@/components/SectionsMovies";
import play from "@/images/icons8_play.ico";



export default function Home() {


  return (
    <div className="flex flex-col min-h-screen bg-[#171717]">
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/_Introduo_do_Meu_perfil.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        <div className="absolute inset-0 bg-black/50 z-10" />


        <div className="relative z-30">
          <Header />
          <div className="p-8 text-white">
            <div className="flex items-center mt-40 gap-4">
              <Image src={IconNetflix} alt="icon Netflix" />
              <p className="font-bold text-xl">F I L M E</p>
            </div>

            <h1 className="text-4xl font-bold mt-60 mb-4">
              A tragédia da Oceangate
            </h1>
            <p className="text-lg w-96 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              deleniti molestiae tenetur nobis iusto id necessitatibus! Aliquid
              distinctio qui amet sunt. Fugit rerum aspernatur, alias fugiat
              velit nostrum beatae fuga.
            </p>

            <div className="mt-4 flex gap-4">
              <button className="bg-white flex gap-4 text-black px-6 py-2 rounded hover:bg-gray-300 transition items-center">
                <Image src={play} alt="play" width={20} height={20} />
                <span className="font-bold">Ver</span>
              </button>
              <button className="bg-gray-700/60 text-white px-6 py-2 rounded hover:bg-gray-600 transition flex items-center gap-4">
                <Info />
                Mais informações
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#171717] via-[#171717]/50 to-transparent z-20 pointer-events-none" />
      </div>

      <main className="relative z-30 mt-4">
        <SectionsMovies />
      </main>

      <Footer />
    </div>
  );
}
