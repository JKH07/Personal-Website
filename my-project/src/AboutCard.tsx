
import { Card } from "flowbite-react";

import React, { useState, useEffect, useRef } from "react";

const cards = [
  { id: 1, title: "Card 1", color: "bg-red-400" },
  { id: 2, title: "Card 2", color: "bg-blue-400" },
  { id: 3, title: "Card 3", color: "bg-green-400" },

];

export default function AboutCard() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    function onScroll() {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 220;
      const index = Math.round(scrollLeft / cardWidth);
      setCenterIndex(index);
    }

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10 mt-10  items-center"
      style={{ scrollSnapType: "x mandatory" }}
      
    >
      {cards.map((card, i) => (
        
        <Card href="#" className="max-w-sm ml-5"  key={card.id}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      ))}
    </div>
  );
}
