"use client"
import React from "react";
import ButtonsActionsCards from "./ButtonsActionsCards";

export default function Cards() {
  return (
    <div className="group relative w-40 h-24 sm:w-52 sm:h-32 md:w-60 md:h-36 bg-gray-800 rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-50 shadow-lg">
      
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300" />
      <div className="relative z-10 p-2">
        <h1 className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">
          T1:E1 Macaquinho do chinês
        </h1>
        <p className="text-[9px] sm:text-[10px] md:text-xs text-white/70 mt-1">2 de 60 min</p>
      </div>

      <ButtonsActionsCards />
  </div>
  );
}
