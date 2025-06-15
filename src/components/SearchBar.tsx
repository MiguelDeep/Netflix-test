"use client";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center transition-transform duration-300">
      {showInput ? (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white transition-transform duration-300" size={18} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Títulos, pessoas, géneros"
            className="pl-10 pr-4 py-2 w-40 md:w-64 bg-transparent text-white border border-white rounded transition-transform duration-300 focus:outline-none"
          />
        </div>
      ) : (
       
        <button
          onClick={() => setShowInput(true)}
          className="text-white p-2  transition-transform duration-300"
        >
          <Search className="transition-transform duration-300" size={24} />
        </button>
      )}
    </div>
  );
}
