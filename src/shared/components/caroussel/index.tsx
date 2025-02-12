"use client"; // Adicione esta linha no topo do arquivo

import React from "react";
import "./style.scss";
import { CardType, Card } from "../card";

interface CarousselProps {
  items: {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    type: "dark" | "light";
  }[];
}

export const Caroussel = (props: CarousselProps) => {
  const carousselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carousselRef.current) {
      const scrollAmount = direction === "left" ? -210 : 210; // 400px (card width) + 20px (gap)
      carousselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="caroussel__wrapper">
      <button className="caroussel__arrow caroussel__arrow--left" onClick={() => scroll("left")}>
        ←
      </button>
      <div className="caroussel__container" ref={carousselRef}>
        {props.items.map((item, index) => (
          <Card
            key={index}
            type={item.type === "dark" ? CardType.dark : CardType.light}
            title={item.title}
            subtitle={item.subtitle ?? ""}
            description={item.description}
          />
        ))}
      </div>
      <button className="caroussel__arrow caroussel__arrow--right" onClick={() => scroll("right")}>
        →
      </button>
    </div>
  );
};