import Header from "@/components/Header";
import { Play } from "lucide-react";
import IconNetflix from "@/images/netflix.svg";
import Image from "next/image";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden bg-black">
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
        <div className="absolute inset-0  bg-opacity-50 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
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
              <button className="bg-white flex gap-4 text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                <Play /> Ver
              </button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition">
                ℹ Mais informações
              </button>
            </div>
          </div>
        </div>
      </div>
     <Sections/>
     <Footer />
    </div>
  );
}
