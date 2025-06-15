'use client';

import Image from 'next/image';

const feedItems = [
  {
    title: 'The Rookie',
    subtitle: 'Já está disponível\nTemporada 6',
    date: 'Hoje',
    image: '/rookie.jpg',
  },
  {
    title: 'O Urso do Pó Branco',
    subtitle: 'Ainda está interessado em O Urso do Pó Branco?\nJá pode ver agora.',
    date: 'Hoje',
    image: '/urso.jpg',
  },
  {
    title: 'Os Sobreviventes',
    subtitle: 'Novo lançamento\nOs Sobreviventes',
    date: 'Há 1 semana',
    image: '/sobreviventes.jpg',
  },
  {
    title: 'Brevemente na Netflix',
    subtitle: 'Explore tudo o que vamos estrear brevemente.',
    date: 'Há 2 semanas',
    image: '/netflix-icon.png',
    isIcon: true,
  },
  {
    title: 'Querido Hongrang',
    subtitle: 'Novo lançamento\nQuerido Hongrang',
    date: 'Há 2 semanas',
    image: '/hongrang.jpg',
  },
];

export default function Notifications() {
  return (
    <div className="w-96 max-w-3xl mx-auto  text-white overflow-y-scroll h-[600px] p-4 space-y-4 rounded-lg shadow-xl">
      {feedItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row  rounded-lg overflow-hidden hover:bg-zinc-900"
        >
          <div className="w-full md:w-40 h-40 relative" >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="text-base font-semibold whitespace-pre-line leading-snug">
              {item.subtitle}
            </div>
            <div className="text-xs text-gray-400 mt-2">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
