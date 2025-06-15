"use client"
import React, { ComponentProps, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Logo from "@/images/netflix (1).svg";
import { Bell, ChevronDown, Lock } from "lucide-react";
import List from "./List";
import SearchBar from "./SearchBar";
import ResponsiveMenu from "./ResponsiveMenu";
import Notifications from "./Notifications";
import { useRouter } from "next/navigation";

interface PropsHeader extends ComponentProps<"header"> {
  title?: string;
}

export default function Header({ ...props }: PropsHeader) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <header
      {...props}
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />

      <div className="relative flex items-center justify-between px-8 py-4 z-20">
        <nav className="flex items-center">
          <Image
            src={Logo}
            alt="Logotipo da Netflix"
            width={100}
            height={50}
            className="mr-10"
          />
          <ResponsiveMenu />
        </nav>

        <nav className="flex items-center gap-6 text-white relative">
          <div className="flex justify-end">
            <SearchBar />
          </div>
          <div className="relative group">
            <Bell size={24} className="text-white cursor-pointer" />
            <div className="absolute top-full mt-2 right-0 w-96 bg-zinc-800 text-white text-sm rounded-md p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              <Notifications />
            </div>
          </div>

          <div
            className="relative cursor-pointer flex items-center gap-1"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            ref={dropdownRef}
          >
            <Image
              src="https://rb.gy/g1pwyx"
              alt="Imagem de Perfil da Netflix"
              width={30}
              height={30}
              className="rounded"
            />
            <ChevronDown size={18} />

            {dropdownOpen && (
              <div className="absolute right-0  w-56 bg-black rounded shadow-lg z-30 py-2 mt-96">
                <ul className="text-sm text-white">
                  <List>
                    <span className="flex items-center gap-4">
                      <Image
                        src="https://rb.gy/g1pwyx"
                        alt="Perfil"
                        width={30}
                        height={30}
                        className="rounded"
                      />
                      Miguel
                    </span>
                    <Lock size={16} />
                  </List>
                  <List>
                    <span className="flex items-center gap-4">
                      <Image
                        src="https://rb.gy/g1pwyx"
                        alt="Perfil"
                        width={30}
                        height={30}
                        className="rounded"
                      />
                      Aureo
                    </span>
                    <Lock size={16} />
                  </List>
                  <List>
                    <span className="flex items-center gap-4">
                      <Image
                        src="https://rb.gy/g1pwyx"
                        alt="Perfil"
                        width={30}
                        height={30}
                        className="rounded"
                      />
                      Claudio
                    </span>
                    <Lock size={16} />
                  </List>
                  <List title="Gerir Perfis" />
                  <List title="Transferir Perfil" />
                  <List title="Conta" />
                  <List title="Centro de Assistência" />
                  <hr className="border-gray-600 my-2" />
                  <li className="px-4 py-2 hover:bg-zinc-700 " onClick={logout}>
                    Sair da Netflix
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
