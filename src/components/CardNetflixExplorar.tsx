'use client';

import { Play, Check, ThumbsUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CardNetflixExplorar({ thumb, preview }: { thumb?: string; preview?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group w-[200px] h-[110px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={thumb ||""}
        alt="Thumb"
        className="rounded-md object-cover"
        fill
        sizes="(max-width: 768px) 100vw"
      />

      {hovered && (
        <div className="absolute z-10 -top-20 -left-10 w-[330px] bg-zinc-900 rounded-lg shadow-xl transition-all duration-300 scale-100 group-hover:scale-105">
          <div className="relative w-full h-[180px]">
            <Image
              src={preview || ""}
              alt="Preview"
              className="rounded-t-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>

          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-3 text-white">
                <button className="bg-white text-black rounded-full p-1.5 hover:bg-neutral-300">
                  <Play size={18} />
                </button>
                <button className="bg-neutral-800 rounded-full p-1.5 hover:bg-neutral-700">
                  <Check size={18} />
                </button>
                <button className="bg-neutral-800 rounded-full p-1.5 hover:bg-neutral-700">
                  <ThumbsUp size={18} />
                </button>
              </div>
              <button className="bg-neutral-800 rounded-full p-1.5 hover:bg-neutral-700 text-white">
                <ChevronDown size={18} />
              </button>
            </div>

            <div>
              <p className="text-sm text-white mb-1">T2:E1 Medo de voar tão baixo</p>
              <div className="h-1 bg-neutral-700 rounded overflow-hidden mb-1">
                <div className="h-full bg-red-600 w-[90%]" />
              </div>
              <p className="text-xs text-neutral-400">46 de 51 min</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
