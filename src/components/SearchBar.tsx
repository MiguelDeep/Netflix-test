"use client";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBarToggle() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className="relative flex items-center space-x-2">
      {showInput && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Titulos, pessoas,géneros"
          className="transition-all duration-300 w-40 md:w-64 px-4 py-2 rounded bg-transparent text-white border focus:outline-none focus:border-white"
        />
      )}

      <button
        onClick={() => setShowInput(!showInput)}
        className="text-white p-2 rounded  transition-colors"
      >
        {showInput ? <X size={24} /> : <Search size={24} />}
      </button>
    </div>
  );
}
