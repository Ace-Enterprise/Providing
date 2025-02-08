import React from "react";

import "./style.scss";
import { CardType, Card } from "../card";

interface CarousselProps {
  items: {
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    type: "dark" | "light";
  }[];
}

export const Caroussel = (props: CarousselProps) => {
  return (
    <div className="caroussel__container">
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
  );
};
