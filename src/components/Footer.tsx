import React from "react";
import Facebook from "@/images/facebook.svg";
import Instagram from "@/images/instagram.svg";
import Youtube from "@/images/youtube.svg";
import Image from "next/image";
import { Textos } from "@/const/Textos";
import TextFooter from "./TextFooter";

export default function Footer() {
  return (
    <footer className="text-gray-400 mt-20 px-10 md:px-40">
      <div className="flex gap-6 mb-6">
        <Image
          src={Facebook}
          alt="Facebook"
          width={24}
          height={24}
          className="invert opacity-70 hover:opacity-100 transition"
        />
        <Image
          src={Instagram}
          alt="Instagram"
          width={24}
          height={24}
          className="invert opacity-70 hover:opacity-100 transition"
        />
        <Image
          src={Youtube}
          alt="YouTube"
          width={24}
          height={24}
          className="invert opacity-70 hover:opacity-100 transition"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-6">
        {Textos.map((text, _i) => (
          <TextFooter key={_i} text={text} />
        ))}
      </div>

      <button className="border border-gray-400 text-sm px-4 py-1 mb-4 hover:bg-gray-700 hover:text-white transition">
        Código do serviço
      </button>

      <p className="text-xs text-gray-500">© 2025 Netflix Clone de Miguel</p>
    </footer>
  );
}
