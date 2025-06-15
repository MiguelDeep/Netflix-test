"use client";
import React, { ComponentProps, useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropsContainerCards extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function ContainerCards({ children, ...props }: PropsContainerCards) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll: () => void = () => {
    if (!scrollRef.current) return;
    setIsAtStart(scrollRef.current.scrollLeft < 10);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden z-0"> 
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-10 hover:bg-black/35 h-36 items-center text-white"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        {...props}
        className="z-0 flex overflow-x-auto overflow-y-hidden scrollbar-hide py-4 scroll-smooth gap-4"
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className={`shrink-0 w-[160px] sm:w-[180px] md:w-[220px] lg:w-[240px] ${
              i === 0 && isAtStart ? "ml-20" : ""
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-10 hover:bg-black/35 text-white h-36 items-center"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
