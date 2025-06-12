import React from "react";
import { Play, ThumbsUp, Download, ChevronDown } from "lucide-react";

export default function ButtonsActionsCards() {
  return (
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col p-2 sm:p-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="mt-1 sm:mt-2 h-1 w-full bg-gray-600 rounded">
          <div className="h-1 bg-red-600 rounded w-1/3" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="bg-white text-black p-1 rounded-full hover:bg-gray-200">
              <Play size={16} />
            </button>
            <button className="bg-neutral-700 text-white p-1 rounded-full hover:bg-neutral-600">
              <ThumbsUp size={16} />
            </button>
            <button className="bg-neutral-700 text-white p-1 rounded-full hover:bg-neutral-600">
              <Download size={16} />
            </button>
          </div>
          <button className="bg-neutral-700 text-white p-1 rounded-full hover:bg-neutral-600">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
  );
}
