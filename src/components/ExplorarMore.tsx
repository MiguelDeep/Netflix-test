'use client';

import { ArrowRight } from 'lucide-react';

export default function ExplorarMore({ title }: { title: string }) {
  return (
    <div className="pl-20">
      <div className="inline-block group relative">
        <h1 className="font-bold text-3xl text-white">
          {title}
        </h1>

        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center space-x-1">
          <span className="text-sky-400 text-sm font-medium w-screen flex items-center">Explorar tudo
          <ArrowRight className="w-4 h-4 text-sky-400 " />

          </span>
        </div>
      </div>
    </div>
  );
}
