"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";


export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center w-28 sm:w-32 md:w-36 space-y-2 cursor-pointer group mx-auto">
      <div className="w-full aspect-square rounded-md overflow-hidden bg-gradient-to-b flex items-center justify-center">
        <Link href={"/home"}>
          <Image
            src={"https://rb.gy/g1pwyx"}
            alt="Perfil Miguel"
            width={200}
            height={200}
            className="w-40 h-40 object-contain"
          />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
        <p className="text-sm text-gray-300 text-center font-medium group-hover:text-white transition">
          Miguel
        </p>
      </div>

      <span className="text-gray-500 text-xl sm:text-2xl">
        <Lock size={25} />
      </span>
    </div>
  );
}
