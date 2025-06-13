"use client";
import React, { ComponentProps, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropsContainerCards extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export default function ContainerCards({ children, ...props }: PropsContainerCards) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.85;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden px-4">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l " />

      <button
        onClick={() => scroll("left")}
        className=" md:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-20 bg-black/30 hover:bg-black text-white rounded-full"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        {...props}
        className="z-0 flex overflow-x-auto overflow-y-hidden scrollbar-hide py-4 scroll-smooth snap-x snap-mandatory gap-4"
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="z-0 snap-start shrink-0 w-[160px] sm:w-[180px] md:w-[220px] lg:w-[240px]"
          >
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="md:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-20 bg-black/30 hover:bg-black text-white rounded-full"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
