import React from "react";
import { CardType } from "@/shared/components/card";

import "./style.scss";
import { Caroussel } from "@/shared/components/caroussel";

export const Accomodations = () => {
  const accomodationsArr = [
    {
      title: "Quarto compartilhado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, dui nec auctor luctus, nunc nisl ultricies nunc, nec condimentum turpis nunc vel nunc. Nullam nec eros vel nunc scelerisque.",
      image: "/shared-room.jpg",
      type: CardType.dark,
    },
    {
      title: "Quarto individual",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, dui nec auctor luctus, nunc nisl ultricies nunc, nec condimentum turpis nunc vel nunc. Nullam nec eros vel nunc scelerisque.",
      image: "/private-room.jpg",
      type: CardType.light,
    },
    {
      title: "Apartamento",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, dui nec auctor luctus, nunc nisl ultricies nunc, nec condimentum turpis nunc vel nunc. Nullam nec eros vel nunc scelerisque.",
      image: "/apartment.jpg",
      type: CardType.dark,
    },
  ];
  return (
    <div className="accomodations__container">
      <h1>Acomodações</h1>
      <Caroussel items={accomodationsArr} />
    </div>
  );
};
