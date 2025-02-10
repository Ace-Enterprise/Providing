import React from "react";
import { CardType } from "@/shared/components/card";

import "./style.scss";
import { Caroussel } from "@/shared/components/caroussel";

export const Accomodations = () => {
  const accomodationsArr = [
    {
      title: "Casa de Família (Homestay)",
      description:
        "Viva com uma família sul-africana e experimente a cultura local no dia a dia. Essa é a melhor escolha para quem busca imersão completa no idioma e nos costumes.",
      type: CardType.dark,
    },
    {
      title: "Casa de Estudantes",
      description:
        "Ideal para quem prefere uma rotina independente e gosta de socializar com pessoas do mundo todo.",
      type: CardType.dark,
    },
    {
      title: "Residência Estudantil",
      description:
        "Localizada dentro ou próximo à escola, oferece praticidade para sua rotina de estudos e uma atmosfera focada no aprendizado.",
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
