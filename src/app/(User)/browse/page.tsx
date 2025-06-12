import ProfileCards from "@/components/ProfileCards";
import React from "react";

export default function page() {
  return (
    <div className="bg-neutral-900 w-full max-h-screen">
      <div className="absolute z-20 inset-0 flex items-center justify-center">
        <form className="text-white px-4 py-8 pt-20 pb-20 rounded-md w-full max-w-5xl mx-auto my-auto">
          <div className="w-full flex justify-center">
            <h1 className="text-2xl sm:text-6xl md:text-4xl text-center p-6 whitespace-nowrap">
              Quem está a ver a Netflix?
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 px-4 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProfileCards key={i} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="border border-stone-500 text-lg px-6 py-2 mt-16 mb-20 text-stone-500 hover:bg-stone-700 hover:text-white transition">
              Gerir Perfis
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
