"use client";
import { Bell } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const feedItems = [
  {
    title: "The Rookie",
    subtitle: "Já está disponível\nTemporada 6",
    date: "Hoje",
    image: "/rookie.jpg",
  },
  {
    title: "O Urso do Pó Branco",
    subtitle: "Ainda está interessado em O Urso do Pó Branco?\nJá pode ver agora.",
    date: "Hoje",
    image: "/urso.jpg",
  },
  {
    title: "Os Sobreviventes",
    subtitle: "Novo lançamento\nOs Sobreviventes",
    date: "Há 1 semana",
    image: "/sobreviventes.jpg",
  },
  {
    title: "Brevemente na Netflix",
    subtitle: "Explore tudo o que vamos estrear brevemente.",
    date: "Há 2 semanas",
    image: "/netflix-icon.png",
    isIcon: true,
  },
  {
    title: "Querido Hongrang",
    subtitle: "Novo lançamento\nQuerido Hongrang",
    date: "Há 2 semanas",
    image: "/hongrang.jpg",
  },
];

export default function BellWithNotifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Bell size={24} className="text-white cursor-pointer" />

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-[92vw] sm:w-[20rem] md:w-[28rem] lg:w-[32rem] max-h-[80vh] bg-zinc-950 text-white rounded-lg shadow-xl p-3 space-y-4 overflow-y-auto z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {feedItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row rounded-lg overflow-hidden hover:bg-zinc-900 transition"
            >
              <div className="w-full sm:w-28 md:w-36 h-36 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div className="text-sm sm:text-base font-semibold whitespace-pre-line leading-snug">
                  {item.subtitle}
                </div>
                <div className="text-xs text-gray-400 mt-2">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
