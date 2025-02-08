import React from "react";

import "./style.scss";
import { Card, CardType } from "../../../shared/components/card";

export const Courses = () => {
  const courses = [
    {
      title: "Curso Intensivo",
      subtitle: "(30h/semana)",
      description:
        "Para quem busca aprendizado rápido e eficiente, com foco em todas as habilidades do idioma.",
    },
    {
      title: "Curso Semi-Intensivo",
      subtitle: "(30h/semana)",
      description:
        "Mais flexível, ideal para quem tem mais tempo para explorar a cidade e fazer outras atividades.",
    },
  ];
  return (
    <div className="courses__container">
      <h1>Cursos</h1>
      <div className="courses__cards">
        {courses.map((course, index) => (
          <Card
            key={index}
            type={index % 2 === 0 ? CardType.dark : CardType.light}
            title={course.title}
            subtitle={course.subtitle}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};
