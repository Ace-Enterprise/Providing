import React from "react";
import "./style.scss";

export enum CardType {
  dark = "dark",
  light = "light",
}

export const Card = (props: {
  type: CardType;
  title: string;
  description: string;
  subtitle?: string;
}) => {
  return (
    <div
      className={
        props.type === CardType.dark
          ? "card__container__dark"
          : "card__container__light"
      }
    >
      <h1>
        {props.title} 
      </h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
      <p>
        {props.description}
      </p>
    </div>
  );
};
